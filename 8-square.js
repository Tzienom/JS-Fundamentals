function square(...sizes) {
  for (let size of sizes) {
    if (Number(size)) {
      for (let i = 0; i < size; i++) {
        let line = "";
        for (let j = 0; j < size; j++) {
          line += "x";
        }
        console.log(line);
      }
      console.log("\n");
    } else {
      console.log("Missing size");
    }
  }
}

square("5", 3, "sa");
