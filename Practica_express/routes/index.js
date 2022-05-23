var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Prueba  page. */
router.get('/Ludwing', function(req, res, next) {
  res.render('prueba', { title: ' Ludwing' });
}); 




module.exports = router;
