

var CustomImageDancer = function(top, left, timeBetweenSteps, url) {
  var self = this instanceof CustomImageDancer 
  ? this 
  : Object.create(CustomImageDancer.prototype);

  self._imageURL = url;
  ImageDancer.call(self, top, left, timeBetweenSteps);
  self.$node.addClass('customImageDancer');

  // Mouseover listener to move away from the mouse
  self.$node.on('mouseover', Dancer.prototype.animateRandomLocation.bind(self));
  return self;
};

CustomImageDancer.prototype = Object.create(ImageDancer.prototype);
CustomImageDancer.prototype.constructor = CustomImageDancer;
