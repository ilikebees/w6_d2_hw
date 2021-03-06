const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park('Jurassic Park', 5.00);
    dinosaur1 = new Dinosaur('T-Rex', 'Herbivore', 34);
    dinosaur2 = new Dinosaur('ManBearPig', 'Carnivore', 100);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 5.00);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur1);
    const actual = park.noOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const expected = [dinosaur1]
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    // park.addDinosaur(dinosaur1);
    // park.addDinosaur(dinosaur2);
    // const expected = [dinosaur2]
    // const actual = park.mostPopDinosaur();
    // assert.strictEqual(actual,expected);


  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
