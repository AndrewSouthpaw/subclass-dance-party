/* ShrinkingDancer
 * ====================
 * A size dancer that shrinks down in size.
 */

var ShrinkingDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof ShrinkingDancer 
  ? this 
  : Object.create(ShrinkingDancer.prototype);

  SizeDancer.call(self, top, left, timeBetweenSteps);

  this._sizeReset = 30;
  this._minSize = 0;
  return self;
};

ShrinkingDancer.prototype = Object.create(SizeDancer.prototype);
ShrinkingDancer.prototype.constructor = ShrinkingDancer;

/* newSize
 * ====================
 * Governs size changing behavior of dancer. Shrinks down in size to a limit,
 * then resets.
 */
ShrinkingDancer.prototype.newSize = function() {
  if (this.size <= this._minSize) return this._sizeReset;
  return this.size - 1;
};
