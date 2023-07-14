

/**
 * 
 * @param {Object} object Objeto para obtener el largo
 * @param {Boolean} isCreate Parametro para identificar la query Update y Create | 0 = Update | 1 = Create
 * @returns {String} Cadena con los argumentos para la funcion 
 */

const argumentsReplacements = (object,isCreate) =>{
    if(!object){
        throw new Error ("Body Invalido")
    }
    const objectLenght = Object.keys(object).length; 
    const argumento = "?,"
    const result = (isCreate)? 0 : 1
    const cadenaRealizada = argumento.repeat(objectLenght + result).slice(0,-1)
    return cadenaRealizada
}

module.exports = argumentsReplacements;