const calcular = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

calcular.question("Escriba una numero: \n", (n1) => {
  calcular.question("Escriba otro numero; \n", (n2) => {
    calcular.question(
      "Que Operación desea hacer? \n 1. -suma, \n 2. -resta, \n 3. -división, \n 4. -multiplicacion \n \n",
        (seleccion) => {
          
        if (seleccion == 1) {
          let sumar = Number(n1) + Number(n2);
          console.log(`\n La Suma es de: ${sumar}`);
          process.exit();
        }

        if (seleccion == 2) {
          let resta = Number(n1) - Number(n2);
          console.log(`\n La Resta es de: ${resta}`);
          process.exit();
        }

        if (seleccion == 3) {
          let division = Number(n1) / Number(n2);
          console.log(`\n La División es de: ${division}`);
          process.exit();
        }

        if (seleccion == 4) {
          let multiplicacion = Number(n1) * Number(n2);
          console.log(`\n La Multiplicacion es de: ${multiplicacion}`);
          process.exit();
        }
          else{
            console.log(`Operación incorrecta!, Vuelva a intentarlo `);
            process.exit()
        }    
        }); //pertenece a seleccion
      
  }); //pertenece a n2
    
}); //pertenece a n1
