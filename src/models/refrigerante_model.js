const db = require("../db.js")

const Schema = db.Schema

const refrigeranteSchema = new Schema({
    porcentagemSuco: {
        type: Number, 
        required: true
    },
    kcal200ml: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        required: true
    },
    tamanhoMl: {
        type: Number,
        required: true
    }
})

const Refrigerante = db.model("Refrigerante", refrigeranteSchema)

module.exports = Refrigerante;