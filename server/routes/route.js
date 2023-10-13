const express = require('express');

const route = express.Router();

const renderfile = require('../services/render');
const controllerfile = require('../controller/controller')

route.get('/',renderfile.indexcode);
route.get('/form',renderfile.formcode);
route.post('/api/users',controllerfile.create);
route.get("/api/users",controllerfile.find);
module.exports = route;
