# Nmap Scan

![image](https://user-images.githubusercontent.com/129129988/228128602-5d37466e-4cb3-47d9-9f5a-61b65618bc77.png)

![image](https://user-images.githubusercontent.com/129129988/228128618-ab0b6e36-753d-4459-8c69-a0859b12f614.png)


nmap -sC -sV -p22,80, 10.129.167.161 -o nmap/late  -v -e tun0

![image](https://user-images.githubusercontent.com/129129988/228128646-66bc399d-2b8d-4131-a464-21d34f4deb43.png)


## Open Ports

we have ports 22 running ssh version 7.6p1 
and port 80 on a nginx server version 1.14.0

lets jump in. 

# Enumeration


Checking out the page..... we see a link on how we can edit photos online..
![image](https://user-images.githubusercontent.com/129129988/228128804-aa51d523-a643-4cf8-827c-88a48b13319c.png)
images.late.htb

intresting lets add these domains so we can access them.

![image](https://user-images.githubusercontent.com/129129988/228128829-028bd2b8-6a46-447a-900f-8a668a0a4c4b.png)
![image](https://user-images.githubusercontent.com/129129988/228128843-cf6f1293-69f0-44f1-a2fb-136bed863000.png)



if you dont...

![image](https://user-images.githubusercontent.com/129129988/228128915-72f40f39-2594-4ae6-b8b7-26bb1d679ab3.png)

Now this is intresting looks like we can convert images to text and it uses flask. 
![image](https://user-images.githubusercontent.com/129129988/228128936-98f2bb02-7581-4870-8ddb-7fb99d441bbb.png)


https://medium.com/@nyomanpradipta120/ssti-in-flask-jinja2-20b068fdaeee
Using this article I figuered out that maybe we can write some text inside the picture. Once converted we can check for SSTI. 

I used LibertyLight
![image](https://user-images.githubusercontent.com/129129988/228128995-f49a56b7-b914-4bfe-9524-0c362c3a8ae7.png)
![image](https://user-images.githubusercontent.com/129129988/228129011-696c51d6-be14-431c-89a4-c9da3575f2c5.png)


![image](https://user-images.githubusercontent.com/129129988/228129025-038324f9-5ec0-4710-8e74-f1dff8450235.png)


![image](https://user-images.githubusercontent.com/129129988/228129040-c57b8871-a025-4ce7-941a-11daf9550214.png)


inside the results.txt we can see SSTI. 

## PrivEsc

running linpeas.sh we can see that we can write to a fine in /usr/local/sbin
ssh-alert.sh

![image](https://user-images.githubusercontent.com/129129988/228129176-aa8ac9bc-8d11-4cdb-ba8c-61ac00e19916.png)

i tried to get a reverse shell but it did not work; i also extracted the root id_rsa; with chmod 600 and that did not work; i also added my id_rsa.pub to authrorized keys; Which also didnt work. Asked for root password. 

At the end seens we can read files I decided to access /root/root.txt hopeing its there. 

![image](https://user-images.githubusercontent.com/129129988/228129188-decee19b-0f5c-448a-a12e-07429c301226.png)


Command to get root Flag.

echo 'cat /root/root.txt > /tmp/root.txt' >> /usr/local/sbin/ssh-alert.sh;ssh localhost "exit"; cat /tmp/root.txt
 
 
 Let me know if you were able to obtain a shell; I would really like to know how.
 
 
