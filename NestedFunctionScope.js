let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let d= 30;
      console.log(a, b, d)
  }
    inner();
}
 

outer();
