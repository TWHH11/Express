var express = require('express');
var router = express.Router();
/*const users = [
  {name: "JJ", id : 1},
  {name: "JK", id : 2}
]
// GET users listing. 
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const user = users.find(u => u.id== id);
if(!user){
  res.send("Not found")
}

  res.json(user);
});
*/


router.get('/', function(req, res, next) {
  console.log('First');
  console.log(req.headers);
  //res.send('respond with a resource');
  next();
});
router.get('/', function(req, res, next) {
  console.log('Second');
  res.send('<h1>Hello</h1>');
});

router.post('/', function(req, res, next) {
  console.log('Req', req);
  res.json({
    name: "user"
  });
});
// router.get('/ab?cd', function(req, res, next) {
//   console.log('ab?cd');
//   res.send('<h1>ab?cd</h1>');
// });
// router.get('/ab+cd', function(req, res, next) {
//   console.log('ab+cd');
//   res.send('<h1>ab+cd</h1>');
// });



module.exports = router;
