var express = require('express');
var router = express.Router();

const selfmoti= require('../models/Selfmoti'); //including the contents from models to here
const positive=require('../models/Positive');
// const multer= require('multer');

// image upload
// var storage = multer.diskStorage({
//   destination:function(req, file, cb)
//   {
//     cb(null,'./uploads');
//   },
//   filename: function(req,file,cb)
//   {
//     cb(null, file.fieldname + "_" + Date.now() + "_"+ file.originalname);
//   },
// })
// var upload = multer({
//   storage:storage,
// }).single("image");

// // insert an image 
// router.post('/add',upload,(req,res)=>{
//   const img=new image({
//     images: req.file.filename,
//     videos:req.file.filename,
//   });


// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'ExpressA' });
});

router.get('/home', function(req, res, next) {
  res.render('home')
})

router.get('/motivation',function(req, res, next ){
  res.render('motivation')
})

router.get('/vent',function(req, res, next ){
  res.render('vent')
})
router.get('/positiveAff',function(req, res, next ){
  res.render('positiveAff')
})
router.get('/motivationImg',function(req, res, next ){
  res.render('motivationImg')
})
router.get('/motivationVideo',function(req, res, next ){
  res.render('motivationVideo')
})
router.get('/positiveAffImg',function(req, res, next ){
  res.render('positiveAffImg')
})
router.get('/positiveAffVideo',function(req, res, next ){
  res.render('positiveAffVideo')
})



 
module.exports = router;
