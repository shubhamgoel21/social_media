const db = require('../config/mongoose');
const user = require('../models/userdata');


module.exports.signup = function (req, res) {
           console.log(req.cookies);
           res.cookie('user_id',100);
           return res.render('index', {
                      title: "SIGNUP",
           })
}

var check = false;

module.exports.createdb = async function (req, res) {
           const newUser = new user(req.body);
           try {
                      const saveUser = await newUser.save();
                      return res.redirect('/signin');

           } catch {
                      return res.redirect('back');
           }

           
}