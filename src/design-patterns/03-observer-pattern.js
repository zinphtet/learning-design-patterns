// The Observer is a design pattern in which an object (aka a subject) maintains a list of objects depending on it (observers),
// automatically notifying them of any changes to state.

function ObserverList() {
  this.observerList = [];
  console.log("this", this);
}

ObserverList.prototype.Add = function (obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.Count = function () {
  return this.observerList.length;
};

ObserverList.prototype.Empty = function () {
  this.observerList = [];
};

ObserverList.prototype.Get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.Insert = function(obj , idx){
     let pointer = -1;
     if(idx === 0){
         this.observerList.unshift(obj);
         pointer = idx
     }

     if(idx === this.observerList.length){
         this.observerList.push(obj);
         pointer = idx
     }


     return pointer;
}

ObserverList.prototype.IndexOf = function(obj , startIndex){
   let i = startIndex  ; let pointer = -1;

    while(i < this.observerList.length){

         if(this.observerList[i]===obj){
             pointer = i;
             break;
         }
         
        i ++;
    }
    return pointer;
}

ObserverList.prototype.RemoveIndexAt  = function (index){
     if(index ===0){
         this.observerList.shift();
     }
     if(index === this.observerList.length -1){
          this.observerList.pop();
     }
}

// Extend an object with an extension

function extend(obj , extension){
    for(let key in extension){
        obj[key] = extension[key];
    }
    return obj;
}


// Subject

function Subject(){
     this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer){
    this.observers.Add(observer);
}

Subject.prototype.RemoveObserver = function(observer){
     this.observers.RemoveIndexAt(this.observers.IndexOf(observer ,0))
}

Subject.prototype.Notify = function(context){
     let observerCount = this.observers.Count();
     for(let i = 0 ; i < observerCount ; i++){
         this.observers.Get(i).Update(context);
     }
}

// Observer

function Observer(){
     this.Update  = function (context){
        //  console.log("context")
     }
}