'use strict'
//prueba

//....
var mongoose = require('mongoose');
var app = require('./app');
var user = require('./controllers/user.controller')
// var port = 3800;
var teamInit = require('./controllers/team.controller')


mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://torneofutbol:root@torneofutbol.bwrbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        user.initAdmin();
        teamInit.teamdefault();
        console.log('Conexion correcta a la base de datos');
        app.listen(process.env.PORT || 3000, function (){
            console.log('EL servidor esta corriendo en el puerto 3000')
        })
    }).catch((err)=>console.log('connection error to database', err))