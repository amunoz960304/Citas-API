const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//crear servidor
const app = express();

//Limitar quien puede ver la API
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whiteList.some( dominio => dominio === origin);
        if(existe){
            callback(null, true )
        } else {
            callback(new Error('No Permitido por CORS'))
        }
    }
}

//habilitar CORS
//app.use(cors(corsOptions));
app.use(cors());

//conectar mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));
//habilitar routing
app.use('/', routes());


//puderto y servidor
app.listen(4000, () => {
    console.log('servidor funcionando');
});