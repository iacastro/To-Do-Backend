const Server = require('./models/serverModel');
require('dotenv').config();
const init = new Server();
init.listen()