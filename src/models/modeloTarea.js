// Partimos creando el modelo
// Luego realizaremos las funciones para realizar el CRUD

class Tarea{

    constructor(
        {
            nom_tarea,
            descripcion_tarea,
            fecha_tarea,
            realizada
        }
    ) {
        this.nom_tarea = nom_tarea,
        this.descripcion_tarea = descripcion_tarea,
        this.fecha_tarea = fecha_tarea,
        this.realizada = realizada
    }
}

module.exports = {
    Tarea
}