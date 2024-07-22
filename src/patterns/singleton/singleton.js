
let instance ;

class MySingleton {
      constructor () {
        if(!instance){
             this.publicProperty = "this is public property"
             instance = this;
        }  
        return instance
      }
      getRandomNum (){
          return Math.random();
      }

      publicMehod (){
         console.log("This is public method")
      }

}

export  default MySingleton;