function square() {
  let args = process.argv.slice(2);

  for (let i = 0; i < args; i++) {
    let line = "";

    for (let j = 0; j < args; j++) {
      line += "x";
    }
    console.log(line);
  }

  if (!args.length) console.log("Missing size");
}

square();
