function square() {
  let args = process.argv.slice(2);

  for (let i = 0; i < args; i++) {
    let line = "";

    for (let j = 0; j < args; j++) {
      line += "X";
    }
    console.log(line);
  }

  if (!Number(args)) console.log("Missing size");
}

square();
