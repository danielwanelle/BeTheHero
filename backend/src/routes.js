const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ong.controller');
const incidentController = require('./controllers/incident.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');

routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.list);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.list);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.list);

routes.post('/session', sessionController.create);

module.exports = routes;