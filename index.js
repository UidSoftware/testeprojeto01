const express = require('express');
const  path  = require('path');

const app = express();

app.engine('html', require('ejs').renderFile); //renderizar do tipo html, usando ejs
app.set('view engine', 'html'); //setando view para html
app.use('/public', express.static(path.join(__dirname, 'public'))); //tudo que é estatico fica nesta pagina
app.set('views', path.join(__dirname, '/views')); //pegar diretorio completo.


var tarefas = [ 'Arrumar o quarto',
                'Compras no supermercado',
                'Arrumar a casa',
                'Estudar'];

app.get('/',(req, res)=>{

    /**
     * segundo parametro'{}', serve para renderizar automaticamente
     * nome:'Luiz Eduardo G Ferreira',
     */
   res.render('index', { tarefasList:tarefas}); 
   
});

app.get('/deletar/:id',(req,res)=>{

    tarefas = tarefas.filter((val,index)=>{
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index',{tarefasList:tarefas});
})

app.listen(3000, ()=>{
    console.log('SERVER RUN!');
})