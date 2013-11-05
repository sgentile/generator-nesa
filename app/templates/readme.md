# Node Express Angular Seed 
## Overview

The goal of this project is to provide a simple starting seed project for web developers that want to use the [Yeoman](http://www.yeoman.io "Yeoman") in combination with the [Yeoman generator for AngularJS](https://github.com/yeoman/generator-angular "AngularJS Generator").  Key components of Yeoman utilized here is the generation of a [grunt]("http://gruntjs.com/") configuration file and [bower]("http://bower.io/"). 

Although the generator provides the client side application, I wanted to provide a starting point to hook this up with a backend web server. My experience is that this can be achieved quickly with the web server offering [Express]("http://expressjs.com/") - which uses [NodeJS]("http://nodejs.org/").

Lastly, I want to provide a clean separation of the client web application from the server.  Taking inspiration from this article on [Using AngularJS with a Rails backend]("Inspired by: http://www.emmanueloga.com/2013/07/23/Using-AngularJS-with-a-Rails-backend.html"), I used the [grunt proxy task]("https://github.com/drewzboto/grunt-connect-proxy") to do the same with the node express server.

##Setup
###Server
This repository provides two applications - the main directory contains the server side application.  From the main directory run:

	npm install

###Client
Inside the 'client' directory is the client side application that uses grunt and bower.  To install the client components - run
	
	cd client
	bower install && npm install
	
from this directory.

##Running the Application
###Server
Once the setup is complete - the server can be launched by running

	node app
	
from the main directory.  This will launch the express web server (on port 3000 by default). (todo: provide a watch for the server side)

###Client
In a second terminal - goto the client directory and run 

	cd client
	grunt server
	
This will launch the client side application (on port 9000 by default).  This project uses live-reload so you can directly make changes to the application while it is running.   

As mentioned above, this uses the grunt proxy task to accomplish this.  All requests made to the REST node express setup will be redirected to port 3000 on your behalf.

##Building and Deploying
In the above description, the client app is running separate from the server.  In order to build the project, we need to run 

	cd client
	grunt build --force
	
(note, I will be looking into removing --force, for now it doesn't like deleting the public directory structure)

This will run the grunt build task (see the gruntfile for details), which will provide the minification, compression, etc.. and then the copy task - which will take the client and move it to the server public directory.   This directory is defined in the gruntfile - see the 'dist' path.

##Extras
Just a few helpful items:
I left out compass/sass/less from this setup - I will provide instructions for adding this later - it's rather simple to add yourself though.  I didn't want to put a dependency on ruby for this initial release.

I've added socket.io to the project.  It's a simple implementation, but I've found most the applications we are building today are using websockets.

###Basic tips
To install a new Node package to the project, if you use

	npm install <name> --save-dev
	
it will automatically add that to the package.json file.

To install a new bower component to the project, if you use

	bower install --save <name>
	
it will automatically add this to the bower.json file.

##Angular-Generator Docs
The [angular-generator]("https://github.com/yeoman/generator-angular") docs provide generators that you can use in the project and will handle creating the file template as well as adding the references to the index.html file.

from the github repo:

####Available generators:

* [angular:controller](https://github.com/yeoman/generator-angular/blob/master/readme.md#controller)
* [angular:directive](https://github.com/yeoman/generator-angular/blob/master/readme.md#directive)
* [angular:filter](https://github.com/yeoman/generator-angular/blob/master/readme.md#filter)
* [angular:route](https://github.com/yeoman/generator-angular/blob/master/readme.md#route)
* [angular:service](https://github.com/yeoman/generator-angular/blob/master/readme.md#service)
* [angular:provider](https://github.com/yeoman/generator-angular/blob/master/readme.md#service)
* [angular:factory](https://github.com/yeoman/generator-angular/blob/master/readme.md#service)
* [angular:value](https://github.com/yeoman/generator-angular/blob/master/readme.md#service)
* [angular:constant](https://github.com/yeoman/generator-angular/blob/master/readme.md#service)
* [angular:decorator](https://github.com/yeoman/generator-angular/blob/master/readme.md#decorator)
* [angular:view](https://github.com/yeoman/generator-angular/blob/master/readme.md#view)

##Thanks
If you have any questions or issues - please create an issue in the repo.  Let me know if you have any suggestions!


