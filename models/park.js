const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];


};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);

};

Park.prototype.noOfDinosaurs = function () {
  return this.dinosaurs.length;

};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostPopDinosaur = function () {
  const result = this.dinosaurs.guestsAttractedPerDay;
  return result;

};



module.exports = Park;
