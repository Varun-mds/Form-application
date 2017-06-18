var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('example')
});

router.post('/myAction', function(req, res, next) {
 res.render('Formr',{ data: req.body.name, data1:req.body.age, data2:req.body.city })
 });

module.exports = router;
