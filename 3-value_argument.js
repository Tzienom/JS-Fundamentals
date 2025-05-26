function arguments(...args) {
  for (let [index, firstArg] of args.entries()) {
    if (index === 0) console.log(firstArg);
  }
}

arguments("one", "two");
