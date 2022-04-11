const express=require('express');
const port=8000;

const app=express();

const db=require('./config/mongoose');
const user=require('./models/userdata');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());

app.use(express.static('./static'))

app.use('/',require('./routes'));





app.listen(port,function(err)
{
           if(err)
           {
                      console.log(`error starting the server ${port}`);
                      return;
           }
           console.log(`server is up and running @ ${port}`);
});