    
const axios = require('axios');
const fs = require('fs').promises;
 
axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      var datos = response.data.bpi;
      var type_money = ["EUR", "USD", "GBP"]; //Se clasifica cada moneda
      var valor = [];
      //Se ordenan los datos
      type_money.forEach((money) => {
        var linea = "👉🏻" + money + ": " + datos[money].rate.toString() + " " + datos[money].description.toString();
        valor.push(linea);
      });

      var result = ["Valor Actual del Bitcoin \n"];
      console.log(result[0]);

      valor.forEach((v) => {
        console.log(v);
        result.push(v.toString() + "\n");
      });

      /* fs.writeFile("Datos_Bitcoin.csv", result, (errors) => {
            console.log(errors)
        })*/
    })