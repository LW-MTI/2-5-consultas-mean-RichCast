
/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const switchSchema = new mongoose.Schema({

    id_switch: {
        type: String,
        required: true
    },
    
    nombre_switch: {
        type: String,
        required: true
    },
    
    ip_switch: {
        type: String,
        required: true
    },

    mac_switch: {
        type: String,
        required: true
    },

    marca_pc: {
        type: String,
        required: true
    },

    depto_pc: {
        type: String,
        required: true
    },

    tipo_switch: {
        type: String,
        required: true
    },

    puertos_switch: {
        type: String,
        required: true
    },
    
});

const switchModel = mongoose.model('Computadora', switchSchema, 'computadora');

module.exports = ruteadorModel;