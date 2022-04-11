const express=require('express');

const router=express.Router();

const signinController=require("../controls/signin");
const signupController=require("../controls/signup");

router.get('/',signupController.signup);

router.post('/createdb',signupController.createdb);

router.get('/signin',signinController.signin);

router.post('/checkdb',signinController.checkdb);

module.exports=router;
