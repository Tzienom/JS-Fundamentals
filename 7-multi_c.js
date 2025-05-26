function printC(...num) {
  for (let [index, value] of num.entries()) {
    if (index === 0 && Number(value)) {
      for (let i = 1; i <= num; i++) {
        console.log("C is fun");
      }
    } else {
      console.log("Missing number of occurrences");
    }
  }
}

printC(3);
printC("5");
printC("");
printC("num");
