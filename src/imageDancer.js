
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
  return self;
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;
ImageDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

};
ImageDancer.prototype.lineUp = function() {
  var top = $('body').height() - this.$node.width();
  var left = $('body').width() * Math.random();
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};

