describe("GrowingDancer", function() {

  var growingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it grow in size", function() {
    sinon.spy(growingDancer, 'newSize');
    var oldSize = growingDancer.size;
    growingDancer.step();
    expect(growingDancer.newSize.called).to.be.true;
    expect(growingDancer.size > oldSize).to.equal(true);
  });

  it('should reset after max size reached', function () {
    var times = growingDancer._maxSize - growingDancer.size + 1;
    for (var i = 0; i < times; i++) {
      clock.tick(timeBetweenSteps);
    }
    expect(growingDancer.size < growingDancer._maxSize).to.equal(true);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(growingDancer, "step");
      expect(growingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(growingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growingDancer.step.callCount).to.be.equal(2);
    });
  });
});
