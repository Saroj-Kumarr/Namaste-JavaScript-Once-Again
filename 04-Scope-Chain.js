var x = 20;

function fun() {
  console.log(x);
  gun();
  function gun() {
    console.log(x);
    test();
    function test() {
      console.log(x);
    }
  }
}

fun();

// When we are printing the value of x insite the test function, so first of all the interpreter will find the value of x inside the test function's scope, then gun function's scope, then fun function's scope and then finally in global scope. this is called scope chaining.
