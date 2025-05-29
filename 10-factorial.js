let args = process.argv.slice(2);
let num = Number(args[0]);

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

if (isNaN(num)) {
  console.log(1);
} else {
  console.log(factorial(num));
}
