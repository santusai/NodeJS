var events = require('events');
var eventEmitters = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a screamed Someone222222!');
}

//Assign the eventhandler to an event:
eventEmitters.on('screamed22', myEventHandler);

//Fire the 'scream' event:
eventEmitters.emit('screamed22');