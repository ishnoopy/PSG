const fs = require('fs');
const path = require('path');

// Get the path to the controllers directory
const controllersDir = path.join(process.cwd(), 'controllers');

// Get an array of all the controller files
const controllerFiles = fs.readdirSync(controllersDir);

// Require all the controller files and store them in an object
const controllers = {};
controllerFiles.forEach(file => {
  const controllerName = path.basename(file, '.js');
  const controller = require(path.join(controllersDir, file));
  controllers[controllerName] = controller;
});

// Export the controllers object
module.exports = controllers;