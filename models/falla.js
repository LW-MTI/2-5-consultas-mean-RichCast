
/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const computadoraSchema = new mongoose.Schema({

    id_pc: {
        type: String,
        required: true
    },
    
});

const computadoraModel = mongoose.model('Computadora', computadoraSchema, 'computadora');

module.exports = switchModel;