const express = require('express')
const {tareaController} = require('../controller')
const {validBodyLength} = require('../middlewares')

const router = express.Router();

const defaultPath = process.env.DEFAULT_PATH_API;

router.post(`/${defaultPath}/tarea/crearTarea`, [validBodyLength],tareaController.crearTarea)

module.exports = router