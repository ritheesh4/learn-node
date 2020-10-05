# learn-node

- Introduction to Node.js and npm
- Node js is an environment where the javascript code can be run outside the browser.
  Use cases of node
 - Single-threaded, based on event driven, non-blocking I/O model.
 - Perfect for building fast and scalable data0inensive apps.
 - Do not use node for applications with heavy server-side processing (CPU-intensive).


Write and read from a file
----------------------------
 - require('fs') is used to read and write data from and into a file. 
 - fs.readFileSync(path, char-set) is used to read from file.
 - fs.writeFileSync(path, variable) is used to write into a file.

Synchronous vs Asynchronous code  (Blocking vs Non-blocking)

Synchronous
-----------
- Each line of the code waits for the result of the previous line.
- Each line blocks the execution of rest of the code.
- So synchronous code also called as blocking code.

Asynchronous
------------
-  It does not affect the execution of the code. Once the process is done, there would be call back function to process the results.
- So that the code runs in the backround.
- Non-blocking.

Why using synchronous code is a bad habit.
 -  The node js is single threaded. So, if the execution of the code waits or blocks for some time, that will affect the other users also to work. Wether there are two or thousand people, there is only one thread to access. So, using synchronous will block every user to access the thread.
 - So using the asynchronous fucntion, once the process has been completed, there would be callback fucntion to execute the code according to the need. So the rest of the codes do not get blocked.
- This is why we use so many callback functions in Node.js.
- Multiple callbacks create more complicated triganle is called as callback hell.


Modules
-----------
- In Node js, every single file is read as a module.

NPM(Node package Manager)
----
- Node manager is the command line interface app that automatically comes included with node js which we use to install and manage open source packages.

- nodemon (package): Automatically restarts the server once a change has been saved. 

Slug
-----
- Last part of URL that contains the uniqure string that identifies the resource that the website is displaying


Over view of How the web works
-------------------------------
- Reauest-response model or Client-server architecture.

 https://www.google.com/maps

 HTTP or HTTPS => Protocol.
 www.google.com => Domain name.
 /maps => Resource.

 DNS
 -----
 - Domain Name System.(A special server).(Phone book of the internet).

 STEP - 1 
 - Browser requests DNS. DNS matches the web address to the real IP address of the server.
 - It happens through the internet serviec provider(ISP).
 - So domain is not the real adress. DNS converts into the IP address.

 https://216.58.211.206:433

 HTTP or HTTPS: Protocol.
 216.58.211.296:433  : IP addresss.
 433   : Port number(kind of sub address.). Deafult 443 for HTTPS. 80 for HTTP.

 STEP -2
 - Once we have a real connection, a TCP/IP socket connection established across between the server and the browser. Finally get connected.

 TCP: It is the Transmission controll protocol and the IP: is the internet protocol. Together they are 
 communication protocols that defines exactly how data travel across the web.
 - They are basically internet's fundamental controll system.

Basic HTTP request
------------------
- HTTP method + request target + HTTP version
- HTTP request headers (many different possibilities.)
    GET /map HTTP/1.1
    Host: www.google.com
    User-Agent: Mozilla/5.0
    Accept-Language: en-US    
    <BODY>
Basic HTTP RESPONSE
-------------------
- HTTP version + status code + status message
    HTTP/1.1 200 OK
    Headers
    <BODY>



