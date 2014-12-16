describe('Dancer', function () {
  
  describe('distance', function () {
    it('should calculate distances', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(3, 4, 1);
      expect(dancer1.getDistance(dancer2)).to.equal(5);
    });
    it('should find the closest dancer', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(3, 4, 2);
      var dancer3 = new Dancer(4, 4, 3);
      window.dancers = [dancer1, dancer2, dancer3];
      expect(dancer1.getClosestDancer()).to.eql(dancer2);
    });
    it('should work with negative distances', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(3, 4, 2);
      var dancer3 = new Dancer(-1, -1, 3);
      window.dancers = [dancer1, dancer2, dancer3];
      expect(dancer1.getClosestDancer()).to.eql(dancer3);
    });
  });

  describe('direction', function () {
    it('should work in when y is less', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(3, 4, 2);
      console.dir(dancer1.getDirection(dancer2))
      expect(dancer1.getDirection(dancer2).ux).to.equal(1);
      expect(dancer1.getDirection(dancer2).uy).to.equal(0.75);
    });
    it('should work in when x is less', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(4, 3, 2);
      expect(dancer1.getDirection(dancer2).ux).to.equal(0.75);
      expect(dancer1.getDirection(dancer2).uy).to.equal(1);
    });
    it('should work in when both are equal', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(4, 4, 2);
      expect(dancer1.getDirection(dancer2).ux).to.equal(1);
      expect(dancer1.getDirection(dancer2).uy).to.equal(1);
    });
    it('should work in negative direction', function () {
      var dancer1 = new Dancer(0, 0, 1);
      var dancer2 = new Dancer(-4, -4, 2);
      expect(dancer1.getDirection(dancer2).ux).to.equal(-1);
      expect(dancer1.getDirection(dancer2).uy).to.equal(-1);
    });
  });

});