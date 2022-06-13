
//Se tiene que instalar Express con el comando
//       <    npm install --save express    >

//motor de plantillas
// <   npm install --save jade  >

const express = require('express');

const app = express();


//definir motor de plantilla a utulizar
app.set('view engine', 'jade');


app.get('/', function (req, res) {
    res.render('index',
        {title:"Programacion Computacional IV", message: "Express con jade"});
    
        //res.send("Programacion Computacional IV")
});

app.get('/student', function (req, res) {
  res.render('student', {
    title_student: 'Mi Información',
    message_student: 'Soy Ludwing Hernandez',
    message_uni: 'Universidad Gerardo Barrios UGB',
    message_lugarcasa: "La Union, Bella Vista",
    message_texto: "Soy De El Salvador y todavia no ha llovido aqui",
  });
});

app.route('/test').get(function (req, res) {
    res.send("test page");
});

const server = app.listen(3000);