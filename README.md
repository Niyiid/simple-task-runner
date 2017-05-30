# README #

# Simple Task Runner

This is a dirty implementation of an asynchronous simple task runner that runs tasks concurrently up until a certain limit. I wrote it as part of my live coding session interview with @HeftyByte. Even though I didn't finish it during the live coding session, I still decided to put up the working implementation here.

Your are free to use the code or build upon it.


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.


<h3>About:</h3>

Node.js is a very cool language in that it runs everything asynchronously using a single event loop so this makes it pretty fast because of its non-blocking IO implementation.

However this asynchronous awesomeness can also be problematic in some situations. For example, you need to process about a million task concurrently but have only the computational resource to process just 10000 tasks at a time.

You would definitely want to process a maximum of 10000, but since node.js processes stuff asynchronously, it will end up trying to process all the task concurrently and would lead to you running out of resources.

A good way to handle this is to throttle the amount of tasks being processed at any given time, hence the need for a Task Runner like this one.


- Created by Odigie Oseme U. | http://osemeodigie.com [v0.0.1]

Website: http://osemeodigie.com
