# Description#
This is currently my setup for a bootstrapping a static web HTML/CSS/JS project using the Compass Framework and SASS. I opted to not use Compass' reset and instead use the HTML5 Boilerplate CSS stylesheet for a base reset.

## How to Use ##
All Compass+SASS related files are in the /compass folder.
The config file is set up to be ready to go. For your edits in /compass/sass/ css to be compiled automatically, run the watcher command `compass watch` within the /compass folder. Then all your changes in the SASS files will be compiled into the css folder.

*Note*: You can either create an empty /css directory at trunk level or it will be created with the initial SASS to CSS compilation.

To get started with the JavaScript part please head over to <a href="https://github.com/rmurphey/dojo-boilerplate/">Rebecca's repo</a> and give it a proper read (mind that I've slightly altered her files as the directory structure of this project is slightly different).

## Documentation for Libraries ##
* <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>
* <a href="http://compass-style.org/">Compass Framework</a>
* <a href="http://sass-lang.com/">SASS</a>
* <a href="http://lessframework.com/">Less Framework 4</a>
* <a href="https://github.com/rmurphey/dojo-boilerplate/">Dojo Boilerplate by Rebecca Murphey</a>