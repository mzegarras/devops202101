
const express = require('express');
const app = express();
const hbs = require('hbs');



app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine','hbs');


//helpers
hbs.registerHelper("getAnio",()=>{
  return new Date().getFullYear();
});

hbs.registerHelper("upperCase",(text)=>{
  return new String(text).toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs',{
      nombre: 'Manuel'
  });
})

app.get('/about', (req, res) => {
  res.render('about.hbs');
})

// app.get('/', (req, res) => {
//   //res.send('Hello World')
//   let data = {
//       nombre: 'Manuel',
//       edad: 32,
//       url: req.url
//   }

//   res.send(data);
// })

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`start server ${ port}.......`);
})
