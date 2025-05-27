function toInteger() {
  let args = process.argv.slice(2);

  for (let [index, arg] of args.entries()) {
    if (Number(arg)) {
      if (index === 0) console.log(Math.floor(arg));
    }
  }

  if (!Number(...args[0])) console.log("Not a number");
}

toInteger();
