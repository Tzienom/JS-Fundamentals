function printArguments() {
  let args = process.argv.slice(2);

  if (args.length === 0) console.log("No argument");
  else {
    for (let i = 0; i < args.length; i++) {
      if (args.length === 1) console.log("Argument found");
      else console.log("Arguments found");
    }
  }
}

printArguments();
