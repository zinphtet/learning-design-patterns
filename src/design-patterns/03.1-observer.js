
const observers = []

const Subject = Object.freeze({
     subscribe : function(observer){
          observers.push(observer)
     },
     notify : function(data){
         observers.forEach(observer => {
             observer(data)
         })
     },
     unsubscribe : (fun)=>{
          [...observers].forEach((obs, idx)=>{
            if(obs === fun){
                 observers.splice(idx, 1)
            }
          })
     }
     
})


function Logger (data){
     console.log(`I am logging ${data}`)
}


Subject.subscribe(Logger)

Subject.notify("Hello")