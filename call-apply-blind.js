// const RealName = {
//     FirstName : "Danish",
//     SecondName : "kukku",
//     FullName : function(){
//         console.log(this.FirstName+" "+this.SecondName)
//     }
// }
// RealName.FullName()

// const RealName2 ={
//     FirstName : "Sulaiman",
//     SecondName : "Koya"
// }
// RealName.FullName.call(RealName2)
// RealName.FullName.apply(RealName2)
// const BindName =RealName.FullName.bind(RealName2)
// BindName()



const person1 = {
    name : "Danish",
    age : 22
}
const person2 = {
    name : "Kukku",
    age : 24
}
function getObj( DOB , Status){
    console.log(this.name);
    console.log(this.age);    
    // console.log(homeTown);    
    // console.log(state);  
    console.log(DOB) 
    console.log(Status) 
}
// call
// getObj.call(person1 , "Manjeri", "Malappuram")
// getObj.call(person2 , "Pala" , "Kottayam")

// apply
getObj.apply(person1 , ["14/10/2011" , "Single"])
getObj.apply(person2 , ["58/15/8588" , "Married"])
