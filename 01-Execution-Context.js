console.log("Namaste Javascript 🙏");

// Global Execution context -> 1. Memory creation phase
//                          -> 2. Code exution phase

const x = 5;

function fun(num) {
  const ans = num * num;
  return ans;
}

const y = fun(x);
const z = fun(10);

console.log(y);
console.log(z);
