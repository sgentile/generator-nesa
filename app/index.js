'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NesaGenerator = module.exports = function NesaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
	
  var self = this;
	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'], callback: function(){
			console.log('end call back, starting client install');
			process.chdir("client/");
			self.installDependencies({ skipInstall: options['skip-install']});
		}});
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NesaGenerator, yeoman.generators.Base);

NesaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
  /*{
	  name:'appName',
	  message:'What is the name of your app?',
	  default:'app'
  }*/
  ];

  this.prompt(prompts, function (props) {
    //this.appName = props.appName;

    cb();
  }.bind(this));
};

NesaGenerator.prototype.app = function app() {
  //this.mkdir('app');
  //this.mkdir('app/templates');
  //this.mkdir(this.appName);

  this.directory('api', 'api');
  this.directory('client', 'client');
  this.directory('public', 'public');
  this.directory('routes', 'routes');

  this.copy('app.js', 'app.js');
  this.copy('travis.yml', 'travis.yml');
  this.copy('_package.json', 'package.json');
};

NesaGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('readme.md', 'readme.md');
};

