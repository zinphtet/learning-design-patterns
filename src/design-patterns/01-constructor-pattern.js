
// Basic Constructor Design Pattern

function Car (model  , year , miles ){
   
    this.model = model;
    this.year = year;
    this.miles = miles;

   
}

Car.prototype.toString = function(){
    return `${this.model} has done at ${this.year} year ${this.miles} miles`
}

const myCar = new Car("BMW", 2000, 100)

console.log(myCar.toString());