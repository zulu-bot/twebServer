const mongoose = require('mongoose');
var customId = require("custom-id");

var incidentsSchema = new mongoose.Schema({
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
    descripcion: {
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

//eventos
userSchema.pre( 'save', function(next) {
    this.idIncidente = customId({});
    next();
});

mongoose.model('Incidents', incidentsSchema);




