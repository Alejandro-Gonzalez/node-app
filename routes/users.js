var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users' });
});

router.get('/all', (req, res) => {
  return res.json({
    id: 5454,
    name: "test",
    number: 3211231314
  })
})

module.exports = router;
