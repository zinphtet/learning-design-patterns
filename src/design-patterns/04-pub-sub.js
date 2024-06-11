

// Pub sub implementation
let pubsub = {};

( 
 function (q){
      let topics = {};
      let subUid = -1;

      q.publish = function(topic, args){
         if(!topics[topic]){
             return false;
         }
         let subscribers = topics[topic];
         let len = subscribers? subscribers.length : 0;

         while(len --){
              subscribers[len].fun(topic , args)
         }
         return this;
      }
      q.subscribe = function(topic, fun){
         if(!topics[topic]){
             topics[topic] = [];
         }

         let token = (++ subUid).toString();
         topics[topic].push({
             token : token,
             fun : fun
         })

         return token;

      }

      q.unsubscribe = function(token){
          for(let m in topics){
             if(topics[m]){
                 for(let i = 0 ; i < topics[m].length ; i++){
                     if(topics[m][i].token === token){
                         topics[m].splice(i, 1)
                         return token;
                     }
                 }
             }
          } 
          return  this;
      }
 }(pubsub)
)

// Using our implementation


const messageLogger = function (topic , data){
      console.log(`Logging - ${topic} : ${data}`)
}

pubsub.subscribe("newMessage" , messageLogger)


// pubsub.publish("newMessage", "Hello World")
// pubsub.publish("helloworld", "Hello World")

// Example : Stock price update

const getCurrentTime = function (){
      let date  = new Date();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let y = date.getFullYear();
      let  t = date.toLocaleTimeString().toLocaleLowerCase();

      return `${m}/${d}/${y} ${t}`
}

const addGridRow  = (data)=> console.log(`Updated grid component : ` + data)

const updateCounter = data => console.log(`data last updated at: ` + getCurrentTime() + ` with ` + data)

const gridUpdate = (topic,data)=>{
     if(data){
        addGridRow(data)
        updateCounter(data)
     }
}


pubsub.subscribe('newData', gridUpdate)

pubsub.publish('newData', 100)