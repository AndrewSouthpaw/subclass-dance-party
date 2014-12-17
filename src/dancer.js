// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  var self = this instanceof Dancer ? this : Object.create(Dancer.prototype);
  
  self.$node = $('<span class="dancer"></span>');
  self.timeBetweenSteps = timeBetweenSteps;
  self.step();
  self.setPosition(top, left);
  return self;
};

/* step
 * ====
 * Responsible for scheduling the next step on dancer object
 */
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

/* setPosition
 * ====================
 * Sets the position of the dancer object.
 */
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/* getDownDancers
 * ====================
 * Issues a command to all dancers to getDown.
 */
Dancer.prototype.getDownDancers = function() {
  this.getDown();
};

/* getDown
 * ====================
 * Default behavior for dancers. Picks a random location on the dance floor
 * and sets an animation to traverse the path to that location.
 */
Dancer.prototype.getDown = function() {
  // Makes all dancers get down and boogie!
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  var styleSetting = {top: top, left: left};
  this.$node.animate(styleSetting, {duration: FLOOR_ANIMATION_DURATION});

  // $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
};

/* lineUpDancers
 * ====================
 * Issues a command to all dancers to line up.
 */
Dancer.prototype.lineUpDancers = function() {
  this.lineUp();
};

/* lineUp
 * ====================
 * Default behavior for dancers. Picks a random location on the bottom side
 * of the dance floor and sets animation to traverse path to that location.
 */
Dancer.prototype.lineUp = function() {
  var top = $('body').height() - this.$node.width();
  var left = $('body').width() * Math.random();
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};

/* setRandomLocation
 * ====================
 * Sets location of dancer to a random spot on the floor.
 */
Dancer.prototype.setRandomLocation = function() {
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  this.$node.css({top: top, left: left});
};

/* animateRandomLocation
 * ====================
 * Animates the movement of dancer to a new random spot on the floor.
 */
Dancer.prototype.animateRandomLocation = function() {
  var top = $('body').height() * Math.random();
  var left = $('body').width() * Math.random();
  this.$node.animate({top: top, left: left},
                     {duration: FLOOR_ANIMATION_DURATION});
};

/* getClosestDancer
 * ====================
 * Returns the dancer closest to this one.
 */
Dancer.prototype.getClosestDancer = function() {
  var closestDancer
    , shortestDistance
    , dist;

  dancers.forEach(function(dancer) {

    if (this !== dancer) {
      dist = this.getDistance(dancer);
      if (typeof shortestDistance === 'undefined') {
        closestDancer = dancer;
        shortestDistance = dist;
      } else if (dist < shortestDistance) {
        closestDancer = dancer;
        shortestDistance = dist;
      }
    }
  }, this);

  return closestDancer;
};

/* pairCoordinates
 * ===============
 * Returns the coordinates of this dancer, and a second dancer if input.
 */
Dancer.prototype.coordinates = function(dancer) {
  var result = {};
  result.x1 = Math.floor(+this.$node.css('left').slice(0, -2));
  result.y1 = Math.floor(+this.$node.css('top').slice(0, -2));
  if (dancer) {
    result.x2 = Math.floor(+dancer.$node.css('left').slice(0, -2));
    result.y2 = Math.floor(+dancer.$node.css('top').slice(0, -2));
  }
  return result;
};

/* getDistance
 * ===========
 * Returns the distance between two dancers.
 */
Dancer.prototype.getDistance = function(dancer) {
  var coords = this.coordinates(dancer);
  var x1 = coords.x1;
  var x2 = coords.x2;
  var y1 = coords.y1;
  var y2 = coords.y2;
  return dist = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
  
};

/* getDirection
 * ============
 * Returns a unit vector {ux,uy} that points toward the input dancer.
 */
Dancer.prototype.getDirection = function(dancer) {
  var c = this.coordinates(dancer);
  var max = Math.abs(Math.max((c.x2 - c.x1), (c.y2 - c.y1)));
  return {ux: (c.x2-c.x1)/max, uy: (c.y2-c.y1)/max};
};












