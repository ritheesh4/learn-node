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
