const express = require('express');
const  path  = require('path');

const app = express();

app.engine('html', require('ejs').renderFile); //renderizar do tipo html, usando ejs
app.set('view engine', 'html'); //setando view para html
app.use('/public', express.static(path.join(__dirname, 'public'))); //tudo que é estatico fica nesta pagina
app.set('views', path.join(__dirname, '/views')); //pegar diretorio completo.


app.get('/',(req, res)=>{

    /**
     * segundo parametro serve para renderizar automaticamente
     * git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

     * git usuario UidSoftware
        Run

          git config --global user.email "uidsoftwaretecnologia@gmail.com"
          git config --global user.name "UidSoftware"
     * 
     */
   res.render('index', {nome:'Luiz Eduardo G Ferreira'}); 
   

});

app.listen(3000, ()=>{
    console.log('SERVER RUN!');
})