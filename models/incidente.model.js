const mongoose = require('mongoose');

var incidents = new mongoose.Schema({
    idIncidente:{
        type: String
    },
    nivelImpacto: {
        type: String
    },
    idEmpleado: {
        type: String
    },
    idInvestigador: {
        type: String
    },
    Descripcion: {
        type: String
   },
   fechaInicio: {
       type: String

   },
   fechaFinal: {
        type: String
   },
   estado: {
        type: String
   }
});


