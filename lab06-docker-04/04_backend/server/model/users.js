const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es válido'
}
let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Correo requerido']
        
    },
    password: {
        type: String,
        required: [true, 'Password requerido']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('User', userSchema);