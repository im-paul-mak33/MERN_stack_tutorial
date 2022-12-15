const { Router } = require('express');
const index = require('./prisma/index');

const route = Router();

route.post('/register_user', index.addUser);
route.get('/register_user/:id', index.fetchOneUser);
route.get('/register_user', index.fetchAllUsers);

module.exports = route;
