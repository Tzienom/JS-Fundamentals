function toInteger(...args) {
  for (let [index, int] of args.entries()) {
    if (index === 0 && Number(int)) return `My number: ${int}`;
    else return "Not a number";
  }
}

console.log(toInteger("4", "5sdf"));
console.log(toInteger("3ds"));
