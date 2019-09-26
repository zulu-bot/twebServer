const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('Incidents');

module.exports.register = (req, res, next) =>{
    var Incidents = new Incidents();
    Incidents.idIncidente = req.body.idIncidente;
    Incidents.nivelImpacto = req.body.nivelImpacto;
    Incidents.idEmpleado = req.body.idEmpleado;
    Incidents.idInvestigador = req.body.idInvestigador;
    Incidents.Descripcion = req.body.Descripcion;
    Incidents.fechaInicio = req.body.fechaInicio;
    Incidents.fechaFinal = req.body.fechaFinal;
    Incidents.estado = req.body.estado;
    Incidents.save((err, doc) => {
        if (!err)
        res.send(doc);
    });
}

