
describe('TechnicolorDancer', function () {
  
  var technicolorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    technicolorDancer = new TechnicolorDancer(10, 10, timeBetweenSteps);
  });

  it('should have a jQuery node', function () {
    expect(technicolorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a function that changes color', function () {
    var oldColor = technicolorDancer.$node.css('border').slice(11);
    technicolorDancer.step();
    var newColor = technicolorDancer.$node.css('border').slice(11);
    expect(oldColor === newColor).to.equal(false);
  });

  it('should call step regularly', function () {
    sinon.spy(technicolorDancer, 'step');
    expect(technicolorDancer.step.callCount).to.equal(0);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(technicolorDancer.step.callCount).to.equal(1);
    clock.tick(timeBetweenSteps);
    expect(technicolorDancer.step.callCount).to.equal(2);
  });
});