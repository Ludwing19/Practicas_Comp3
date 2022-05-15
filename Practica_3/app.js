/*const modulo = require("./modulo");

llamando a los modulos

console.log(modulo.property);
modulo.getMessage();
*/

var tableData = [
    { a: 25, b: 32 },
    { a: 30, b: 60 }
];

console.log(tableData);
console.table(tableData);

console.group("Bloque");
console.log("Primer Elemento");
console.log("Segundo Elemento");
console.groupEnd("Bloque");