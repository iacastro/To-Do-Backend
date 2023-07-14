const {fnCrearTarea} = require("../config/funciones/tarea/crear_tarea")
const {sendOk, internalError} = require('../utils/https')
const {Tarea} = require('../models/modeloTarea')


const crearTarea = async (req,res) => {
    try{

        const tar = new Tarea(req.body);
        const [{id_tarea}] = await fnCrearTarea(tar);

        sendOk(res, `Tarea con el id ${id_tarea} creada correctamente `, {id_tarea});

    }catch (error){
        internalError(res, `${error.message || 'error no controlado'}`, error)
    }
}

module.exports = {
    crearTarea
}