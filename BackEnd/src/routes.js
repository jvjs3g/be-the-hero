const express = require('express');
const ongsControllers = require('./controllers/ongsControllers');
const incidentsControllers = require('./controllers/incidentsControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const sessionControllers = require('./controllers/sessionControllers');
const routes = express.Router();


  //const name = request.query.name;======== Nesse caso para buscar nomes da url idade etc 
  //const params = request.params; == Nesse caso para pegar ids e por ai vai
  //const body = request.body == Nesse retorna todo os dados do corpo;

routes.post('/session',sessionControllers.create);

routes.get('/ongs',ongsControllers.index);
routes.post('/ongs' ,ongsControllers.create);

routes.get('/profile',ProfileControllers.index);

routes.post('/incidents',incidentsControllers.create);
routes.get('/incidents',incidentsControllers.index); 
routes.delete('/incidents/:id',incidentsControllers.delete); 
module.exports = routes;