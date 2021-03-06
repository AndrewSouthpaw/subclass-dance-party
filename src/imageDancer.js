
/* ImageDancer
 * ====================
 * Dancers that feature an image on them.
 */

var ImageDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof ImageDancer 
    ? this 
    : Object.create(ImageDancer.prototype);
    
  Dancer.call(self, top, left, timeBetweenSteps);

  // Dancer .$node is a span, so recreate as an image
  self.$node = $('<img class="imageDancer"></img>');
  self.$node.css('background-image', 'url("' + self._imageURL + '")');
  Dancer.prototype.setRandomLocation.call(self);

  // Properties that govern dancing behavior
  self._direction = -1;  // 1 for down, -1 for up
  self._steps = 0;

  return self;
};
ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

/* step
 * ====================
 * Moves dancer incrementally up or down, based upon direction. After a set
 * number of steps, the direction switches.
 */
ImageDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if (this._steps++ > 10) {
    this._direction *= -1;
    this._steps = 0;
  }
  this.$node.css('top', '+=' + this._direction + 'px');
};
