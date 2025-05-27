function toInteger() {
  let args = process.argv.slice(2);

  if (Number(args.length)) {
    for (let [index, arg] of args.entries()) {
      if (index === 0) console.log(`My number: ${Math.floor(arg)}`);
    }
  } else console.log("Not a number");
}

toInteger();
