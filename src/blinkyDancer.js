
/* BlinkyDancer
 * ====================
 * A dancer that appears and disappears.
 */
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof BlinkyDancer 
  ? this 
  : Object.create(BlinkyDancer.prototype);

  Dancer.call(self, top, left, timeBetweenSteps);
  return self;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

/* step
 * ====================
 * Toggles the visibility of dancer on/off.
 */
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

/* lineUp
 * ====================
 * Moves dancer to the right side of dance floor
 */
BlinkyDancer.prototype.lineUp = function() {
  var top = $('body').height() * Math.random();
  var left = $('body').width() - 20;
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};