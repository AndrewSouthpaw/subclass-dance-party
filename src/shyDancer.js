
/* ShyDancer
 * ====================
 * Image dancer that moves to a new spot on the floor when moused over.
 */
var ShyDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof ShyDancer 
  ? this 
  : Object.create(ShyDancer.prototype);

  self._imageURL = 'img/shyperson.jpeg';

  ImageDancer.call(self, top, left, timeBetweenSteps);
  self.$node.addClass('shyDancer');

  // Mouseover listener to move away from the mouse
  self.$node.on('mouseover', Dancer.prototype.animateRandomLocation.bind(self));
  return self;
};

ShyDancer.prototype = Object.create(ImageDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;
