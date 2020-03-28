const express = require('express');
const ongsControllers = require('./controllers/ongsControllers');
const incidentsControllers = require('./controllers/incidentsControllers');
const ProfileControllers = require('./controllers/ProfileControllers');
const sessionControllers = require('./controllers/sessionControllers');
const { celebrate, Segments, Joi} = require('celebrate');
const routes = express.Router();


  //const name = request.query.name;======== Nesse caso para buscar nomes da url idade etc 
  //const params = request.params; == Nesse caso para pegar ids e por ai vai
  //const body = request.body == Nesse retorna todo os dados do corpo;

routes.post('/session',sessionControllers.create);

routes.get('/ongs',ongsControllers.index);
routes.post('/ongs',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    whatsapp:Joi.string().required().min(10).max(11),
    city:Joi.string().required(),
    uf:Joi.string().required().length(2),
  })
}) ,ongsControllers.create);
routes.get('/profile',celebrate({
  [Segments.HEADERS]:Joi.object({
    authorization:Joi.string().required(),
  }).unknown(),
}),ProfileControllers.index);
routes.post('/incidents',incidentsControllers.create);
routes.get('/incidents', celebrate({
  [Segments.QUERY]:Joi.object().keys({
    page:Joi.number(),
  })
}),incidentsControllers.index); 
routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]:Joi.object().keys({
    id:Joi.number().required(),
  })
}),incidentsControllers.delete); 
module.exports = routes;