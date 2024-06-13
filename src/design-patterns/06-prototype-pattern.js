// Object.create(prototype , optionalDescriptorObjects)

let Car = {
  name: "BMW",
  drive: () => {
    console.log("Driving");
  },
  panic: () => {
    console.log("Wait . How do you sto this thing?");
  },
};

let myCar = Object.create(Car, {
  name: {
    value: "Mercedes",
  },
});

// console.dir(myCar.name);

// console.dir(myCar.panic());

// ANOTHER EXAMPLE

let vehicalePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },
  getModel : function (){
     console.log("The model of vechicle is .." , this.model)
  }
};


function  vehicle(model){
     function F(){}
     F.prototype = vehicalePrototype;

     let f = new F();

     f.init(model);
     return  f;
}
const car = vehicle('AUDI')

car.getModel();