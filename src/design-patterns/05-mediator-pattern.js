
// Mediator Pattern implementation
let mediator = (function () {
  let topics = {};
  let subscribe = function (topic, fn) {
    if (!topics[topic]) {
      topics[topic] = [];
    }
    topics[topic].push({ context: this, callback: fn });
    return this;
  };
  let publish = function (topic) {
    let args;

    if (!topics[topic]) {
      return false;
    }
    args = Array.prototype.slice.call(arguments, 1);
    for (let i = 0, l = topics[topic].length; i < l; i++) {
      let subscription = topics[topic][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  };

  return {
    publish,
    subscribe,
    installTo: function (obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
      return obj;
    },
  };
})();


const hello = {
     sayHello : function(){
          console.log("Hello World")
     }
}

const hi = {
     sayHi : function(){
          console.log("Hi World")
     }
}


mediator.installTo(hello)
mediator.installTo(hi)

mediator.subscribe('greet' , hello.sayHello)
mediator.subscribe('greet' , hi.sayHi)

mediator.publish('greet')

