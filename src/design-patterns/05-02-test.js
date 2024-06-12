// Mediator / Middleware pattern

//  user -> chatroom -> where to send

// class ChatRoom {
//     logMessage (user , message){
//          const time = new Date();
//          const sender = user.getName();

//        //   where you need to show this message

//         const toAlice = message.includes('alice')
//         const toMike = message.includes('mike')
//         if(toAlice){
//             console.log(`ToAlice : ${message}`)
//             return;
//         }
//         if(toMike){
//             console.log(`ToMike : ${message}`)
//             return;
//         }
//         console.log(`All : ${message}`)
//     }
// }

class User {
   constructor(name ){
        this.name = name;
   }
   send(message){
       this.message = message;
       return this;
   }

   to(receiver){
        receiver.receive(this.message)
        return this;
   }

   receive (message){ 
     console.log(`${message}`)
     return this;
   }
}


const Mgmg = new User('Mgmg');

const April = new User('April');

Mgmg.send('Mgmg send to April : Hello April').to(April);

April.send('April send to Mgmg : Hello  Mgmg').to(Mgmg)