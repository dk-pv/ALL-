const Fruits = ["Apple" , "Banana" , "Cherry" , "Dragon Fruit" , "Orange"]
console.log(Fruits);
Fruits[2] = "Pappaya"
console.log(Fruits[2]);
console.log(Fruits)
console.log(Fruits.length);


// dynamic array in js (meaning  they can grow or shrink in size as needed)

// addding elements
Fruits.push("Kiwi")      // add in array last  
console.log(Fruits);

Fruits.unshift("stawberry")   // add in first position in array
console.log(Fruits)


// remove array element
Fruits.pop()
console.log(Fruits)    // remove last elements ina array
Fruits.shift()                    /// remove First 
console.log(Fruits);




// common algorithms
//Traversing