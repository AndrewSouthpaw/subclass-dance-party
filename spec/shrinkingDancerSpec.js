describe("ShrinkingDancer", function() {

  var shrinkingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shrinkingDancer = new ShrinkingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shrinkingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it shrink in size", function() {
    sinon.spy(shrinkingDancer, 'newSize');
    var oldSize = shrinkingDancer.size;
    shrinkingDancer.step();
    expect(shrinkingDancer.newSize.called).to.be.true;
    expect(shrinkingDancer.size < oldSize).to.equal(true);
  });

  it('should reset after min size reached', function () {
    var times = shrinkingDancer.size - shrinkingDancer._minSize + 1;
    for (var i = 0; i < times; i++) {
      clock.tick(timeBetweenSteps);
    }
    expect(shrinkingDancer.size > shrinkingDancer._minSize).to.equal(true);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(shrinkingDancer, "step");
      expect(shrinkingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shrinkingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shrinkingDancer.step.callCount).to.be.equal(2);
    });
  });
});
