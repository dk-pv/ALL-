// const person = {
//     get(){
//         console.log(this)
//     }
// }
// person.get()





// const  person1 = {
//     name : "Danish",
//     age : 50,
// }

// function get(){
//         console.log(`my name is ${this.name} and i'm ${this.age} years old !`)
// }

// get.call(person1)
// get.apply(person1)

// const nn = get.bind(person1)
// nn()



// "use strict"

// function x(){
//     console.log(this)
// }
// x()
// Window.x()






                        // Object in "this Keyword"



// const obj = {
//     a:10,
//     get:this   /// this will be also access global obj
// }
// console.log(obj.get)



const person = {
    name : "sulaiman",
    age :25,
    x: function(){
        console.log(this.name);
    }
}
person.x()


const person2 = {
    name : "Danish",
    age : 25,
}

 