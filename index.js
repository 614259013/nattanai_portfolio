const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine','hbs');

//router
app.use('/',router);

//Middleware
app.use(express.static(path.join(__dirname,'public')));

/**app.get('/profile',(req,res) =>{
    res.send("<h1>My Portfolio</h1>");
});**/

app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  