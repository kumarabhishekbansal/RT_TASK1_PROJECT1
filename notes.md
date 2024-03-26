# webpack

Webpack is a library that lets us create a bundle out of JavaScript/React code that can be used in a browser. 

The biggest difference 
is that running Webpack in production mode will minimize our code and decrease 
the size of the project bundle.

there will be a file called main.js that includes our project 
code and is also known as our bundle.


# Configuring Webpack to work with React

Now that we've set up a basic development environment with Webpack for a JavaScript application, we can start installing the packages we need in order to run any React application.


These packages are react and react-dom, where the former is the generic core package for React and the latter provides an entry point to the browser's DOM and renders React.

# Babel

since, by default, not 
every browser can read the format (such as ES2015+ or React) that your JavaScript code 
is written in. Therefore, we need to compile the JavaScript code into a readable format for 
every browser.
For this, we'll use Babel and its related packages to create a toolchain to use React in 
the browser with Webpack. These packages can be installed as devDependencies

Next to the Babel core package, we'll also install babel-loader, which is a helper so 
that Babel can run with Webpack and two preset packages. These preset packages help 
determine which plugins will be used to compile our JavaScript code into a readable 
format for the browser (@babel/preset-env) and to compile React-specific code 
(@babel/preset-react). 

