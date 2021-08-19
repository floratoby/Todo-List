const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = ['Wake up early','Wash fash','Cook breakfast'];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public")); 

app.get('/',(req, res)=>{

   let date = new Date();
   let day;
   let options = {
     weekday: 'long',
     day: 'numeric',
     month: 'long',
     year: 'numeric'
   }

   day = date.toLocaleDateString('en-US',options);
   res.render('list',{dayOfTheWeek: day, taskItems: items});
});

app.post('/',(req,res)=>{
  let task = req.body.task;
  items.push(task); //
  res.redirect('/');
});

app.listen(3000,()=>{
  console.log("Server connected to port 3000");
})
