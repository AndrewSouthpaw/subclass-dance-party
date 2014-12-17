/* GrowingDancer
 * ====================
 * A size dancer that grows in size.
 */

var GrowingDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof GrowingDancer 
  ? this 
  : Object.create(GrowingDancer.prototype);

  SizeDancer.call(self, top, left, timeBetweenSteps);
  this._maxSize = 30;
  return self;
};

GrowingDancer.prototype = Object.create(SizeDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

/* newSize
 * ====================
 * Governs size-changing behavior of the dancer. Grows in size up to max size,
 * then resets.
 */
GrowingDancer.prototype.newSize = function() {
  if (this.size >= this._maxSize) return this._sizeReset;
  return this.size + 1;
};
