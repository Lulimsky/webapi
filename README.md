# WebAPI

![carbon (5)2](https://user-images.githubusercontent.com/85719559/210292678-5cb8f2a5-cfc1-49ee-814d-d96869c8afd4.png)

## This README file attends to explain the present project.

**Requirements:**

![login_web_exe_p](https://user-images.githubusercontent.com/85719559/210293125-45a98622-12c4-4c2b-b655-2c525e925dd0.jpg)
![login_web_exe_p2](https://user-images.githubusercontent.com/85719559/210293380-cec180a1-d188-42fb-822a-efdd943b9327.jpg)
![login_web_exe_p3](https://user-images.githubusercontent.com/85719559/210299706-15adb2d9-a0f9-450a-a92c-5d5f2bc94028.jpg)

**Technical decisions:**

My approach as a Junior Full-Stack Developer, beginning in Front-End development
and Javascript programming was to *"stick to the basics"*. 
Meaning I didn't use any framework. For various reasons:
Primary, given the circumstances (delivering the task asap) I decided to take a simple path holding on
to the foundations of Front-End development **-HTML/CSS/JAVASCRIPT-**. 
Therefore search for the most straightforward solution available and found the `fetch()` method.

**Fetch API** was introduced in 2015 by **ECMAScript 6** standardization committee for Javascript language.  
This has become the standard for handling data requests today. 
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol,
such as requests and responses. It also provides a global fetch() method that provides an easy,
logical way to fetch resources asynchronously across the network allowing us to avoid the use of
**XMLHttpRequest** or external libraries such as **JQuery** and its `$.ajax` function.

By default, JavaScript works synchronously as a single-threaded programming language, which means that
one process must complete before another starts.
In a nutshell, a promise acts as a proxy for an unknown value that will eventually become available
at some point, ending up as a resolved state if everything goes well, or a rejected state if something goes wrong.
Using a Promise we call `.then()` to be executed if the result is resolved, or `.catch()` if it is rejected.
In addition, we can also chain Promises, making one Promise return another Promise.

**Bibliography/documentation:**

- https://fetch.spec.whatwg.org/#fetch-method

- https://github.com/whatwg/fetch

- https://stackoverflow.com/questions/44058726/is-the-fetch-api-an-ecmascript-feature

- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options

- https://flaviocopes.com/fetch-api/

- https://www.w3schools.com/js/js_es6.asp

- https://www.w3schools.com/jsref/api_fetch.asp

- https://www.diogorodrigues.dev/blog/fetch-api-is-new-old-version-of-ajax

- https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/

- https://www.returngis.net/2019/01/hacer-peticiones-con-fetch-de-ecmascript-6/

