

var TechnicolorDancer = function(top, left, timeBetweenSteps) {
  var self = this instanceof TechnicolorDancer 
  ? this 
  : Object.create(TechnicolorDancer.prototype);

  Dancer.call(self, top, left, timeBetweenSteps);
  return self;
};

TechnicolorDancer.prototype = Object.create(Dancer.prototype);
TechnicolorDancer.prototype.constructor = TechnicolorDancer;
TechnicolorDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this 
  // new version of step
  Dancer.prototype.step.call(this);

  var color = colors[Math.floor(Math.random() * colors.length)];
  this.$node.css('border', '30px solid ' + color);
};
TechnicolorDancer.prototype.lineUp = function() {
  var top = $('body').height() * Math.random();
  var left = $('body').width() - 20;
  this.$node.animate({top: top, left: left + 'px'}, 
                     {duration: FLOOR_ANIMATION_DURATION});
};