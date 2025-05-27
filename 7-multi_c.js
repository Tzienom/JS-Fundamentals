function printC() {
  let args = process.argv.slice(2);

  for (let i = 0; i < args; i++) {
    console.log("C is fun");
  }

  if (!args.length) console.log("Missing number of occurrences");
}

printC();
