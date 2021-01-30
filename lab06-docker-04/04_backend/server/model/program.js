const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let programSchema = new Schema({

    nombre_copy: {
        type: String,
        required: [true, 'Nombre copy requerido']
    },

    programa: {
        type: String,
        required: [true, 'Programa requerido']
    },

    funcionalidad: {
        type: String,
        required: [true, 'Funcionalidad requerido']
    },

    entrada: {
        type: String,
        required: [true, 'Entrada requerido']
    },

    salida: {
        type: String,
        required: [true, 'Salida requerido']
    },


    bus_codigo: {
        type: String,
        required: [true, 'Bus_codigo requerido']
    },

    bus_version: {
        type: String,
        required: [true, 'Bus_version requerido']
    },

    bus_framework: {
        type: String,
        required: [true, 'Bus_framework requerido']
    },

    bus_identificador: {
        type: String,
        required: [true, 'Bus_identificador requerido']
    },

    api: {
        type: String,
        required: [true, 'Api requerido']
    }
});



programSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Program', programSchema);

