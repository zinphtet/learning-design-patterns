// Mediator / Middleware pattern

//  user -> chatroom -> where to send

class ChatRoom {
     logMessage (user , message){
          const time = new Date();
          const sender = user.getName();

        //   where you need to show this message

         const toAlice = message.includes('alice')
         const toMike = message.includes('mike')
         if(toAlice){
             console.log(`ToAlice : ${message}`)
             return;
         }
         if(toMike){
             console.log(`ToMike : ${message}`)
             return;
         }
         console.log(`All : ${message}`)
     }
}

class User {
    constructor(name , chatroom){
         this.chatroom = chatroom;
         this.name = name;
    }
    getName() {
         return this.name
    }
    send(message){
         this.chatroom.logMessage(this, message)
    }
}

const mgmg = new User('mgmg' , new ChatRoom());

mgmg.send("mike i am here")
mgmg.send("hello all welcome to my chat room")