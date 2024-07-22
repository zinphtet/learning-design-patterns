
//class that offers functionality to the subclasses or group of subclassses

const MyMixin = (superclass) => {
    return class extends superclass {
        constructor(...args) {
            super(...args);
            this.myMixinProperty = "myMixinProperty";
        }

        myMixinMethod() {
            console.log("this is mixin method", this.myMixinProperty);
        }
   
        showInfo (){
             console.log(this.model , this.name)
        }
        moveDown() {
            console.log("move down");
        }

        moveLeft() {
            console.log("move left");
        }

        stop() {
            console.log("stop");
        }
    }
}

class Car  {
      constructor(model , name){
        this.model = model;
        this.name = name;
      }

      moveUp (){
         console.log("move up");
      }
}

const CarFactory = MyMixin(Car)

const myCar = new CarFactory("BMW", "MyCar");

myCar.moveUp();
myCar.showInfo();
myCar.myMixinMethod();
myCar.moveDown();
myCar.moveLeft();
myCar.stop();