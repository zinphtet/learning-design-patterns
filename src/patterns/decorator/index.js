

class Macbook {
     constructor () {
          this.cost = 997;
          this.screenSize = 11.6;
     }

     getCost() { return this.cost}
     getScreenSize() { return this.screenSize}
}

class Memory extends Macbook {
     constructor (macbook) {
          super();
          this.mac = macbook;
     }
     getCost () {
         return this.mac.getCost() + 75;
     }
}

class Casing extends Macbook {
    constructor (macbook) {
         super();
         this.mac = macbook;
    }
    getCost () {
        return this.mac.getCost() + 100;
    }
}
const memMac =new Memory(new Macbook());
const withCase = new Casing(memMac)
console.log(withCase)
console.dir(withCase.getCost())