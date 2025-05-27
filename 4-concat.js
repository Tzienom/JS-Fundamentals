function concatSentence() {
  let args = process.argv.slice(2);

  if (args || !args) {
    let firstWord;
    let secondWord;

    for (let i = 0; i < args.length; i++) {
      firstWord = args[0];
      secondWord = args[1];
    }
    console.log(`${firstWord} is ${secondWord}`);
  }
}

concatSentence();
