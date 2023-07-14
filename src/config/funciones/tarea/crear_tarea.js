const argumentsReplacements = require('../../../utils/argumentsReplacements')
const db = require('../../db/config')

const fnCrearTarea = async (tarea) =>{
    try{
        const result = await db.sequelize.query(`select * from fn_crear_tarea(${argumentsReplacements(tarea, true)})`,{
            type: db.Sequelize.QueryTypes.SELECT, replacements: Object.values(tarea)
        });
        return result;
    } catch (e){
        throw e;
    }
}

module.exports = {
    fnCrearTarea
}