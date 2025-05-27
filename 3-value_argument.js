function valueArgument() {
  let args = process.argv.slice(2);

  if (args == "") console.log("No argument");
  else if (args) {
    for (let [index, arg] of args.entries()) {
      if (index === 0) console.log(arg);
    }
  }
}

valueArgument();
