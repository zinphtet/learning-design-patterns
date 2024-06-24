// Decorators offered the ability to add  behavior to existing clases in a system dynamically.
// Subclassing
// It would be baked into the super class itselt.

function vehicle(vehicleType) {
  this.vehicleType = vehicleType || "car";
  this.model = "default";
  this.license = "00000-000";
}

let testInstance = new vehicle("BMW");

// console.log(testInstance)

function MacBook() {
  this.cost = function () {
    return 997;
  };
  this.screenSize = function () {
    return 11.6;
  };
}

// Decorator one

function Memory(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 75;
  };
}

// Decorator two

function Engraving(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 200;
  };
}

// Decorator three
function Insurance(macbook) {
  let v = macbook.cost();
  macbook.cost = function () {
    return v + 250;
  };
}


let mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);

console.log(mb.cost());
// accept object and modify the object


// Abstract Decorators