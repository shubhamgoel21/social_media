const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/userdata');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to data base'));

db.once('open',function()
{
           console.log('successfully connected to data base');
})
