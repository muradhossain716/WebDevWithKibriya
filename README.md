# WebDevWithKibriya

<p>Javascript: Javascript is a high level,prototype-based,object oriented,multi-paradigm,interpreted or just in time compiled,dynamic,single threaded,garbage-collected, programming language with first class functions and a non blocking event loop concorrency model. </p>
<p>High level: Every computer programs needs resourses.In some language programers manually has to manage the resourses example:C this type of pramming language is called low level language.High level language are those whose resources does not need to manage manually.example :js,python</p>
<p>garbage-collected: means js has algorithms that cleans the memory (unused and old objects) automatically in time to time</p>
<p>just-in-time compiled:Entire program converted into machine code at once then executed immediately.no portable file generated.</p>
<p> Prototypes:Prototypes are the mechanism by which JavaScript objects inherit features from one another.Prototype contains method that are accessable to all the objects linked to that prototype.</p>
<p>Paradigm: Paradigm is an approach and mindset of structuring code, which will direct our coding style and technique.</p>
<p>First Class Function: it is treated as variable, we can pass them into function, return from function</p>
<p>Dynamic/dynamically typed:type of varible is known at runtime and type of variable is automatically changend</p>
<code>
let a=10;
a='jerry';//type will automatically change;
</code>
<p>Single threaded: means javascript can do a single thing at a time.</p>
<p>Event loop:The event loop is a constantly running process that monitors both the callback queue and the call stack.
If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen
</p>
<p>API stands for Application Programming Interface. A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser.Web api adds some additional functionality to js by which js works as multi threaded and non-blocking behaviour.When long running task is generated in js runtime, it exports the task to web api when the task finishes, the call back function is placed into the call back queue/even queue.now Event loop check wheather call stack is empty or not if it is empty, the function is push into the call stack and executes it.</p>
