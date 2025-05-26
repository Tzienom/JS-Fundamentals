function arguments(...args) {
  if (args.length === 0) return "No argument";
  else if (args.length === 1) return "Argument found";
  else return "Arguments found";
}

console.log(arguments("Argumment", "Another Argument"));
console.log(arguments("Argument"));
console.log(arguments());
