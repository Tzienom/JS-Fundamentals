function printArguments() {
  let args = process.argv.slice(2);

  if (args.length > 1) {
    console.log("Arguments found");
    for (let i = 0; i < args.length; i++);
  } else if (args.length === 1) console.log("Argument found");
  else console.log("No argument");
}

printArguments();
