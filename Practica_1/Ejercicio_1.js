const edad = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

edad.question("Ingrese Su edad: ", (edad) => {
  if (edad > 18) {
      console.log(`usted es mayor de edad`);
      process.exit()
  } else {
      console.log(`Usted es menor todavia`);
      process.exit();
  }
});
