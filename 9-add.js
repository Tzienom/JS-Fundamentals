function add(a, b) {
  let args = process.argv.slice(2);

  if (args.length > 1) {
    for (let i = 0; i < args.length; i++) {
      if (i === 0) a = +args[i];
      else if (i === 1) b = +args[i];
    }
  }
  console.log(a + b);
}

add();
