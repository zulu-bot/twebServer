const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) =>{
    var user = new User();
    user.idUsuario = req.body.idUsuario;
    user.nombre = req.body.nombre;
    user.rol = req.body.rol;
    user.email = req.body.email;
    user.password = req.body.password;
    console.log(String(user.idUsuario));
    user.save((err, doc) => {
        if (!err)
        res.send(doc);
    });
}

module.exports.authenticate = (req, res, next) => {
    //llamada para passport authentication
    passport.authenticate('local', (err, user, info) => {
        //error del middleware
        if (err) 
            return res.status(400).json(err);
        //usuario registrado
        else if (user) 
            return res.status(200).json({ "token": user.generateJwt() });
        //usuario o contraseña equivocados
        else
            return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({_id: req._id},
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false , message: 'historial de usuario no encontrado.'});
            else {
                return res.status(200).json({status: true, user : _.pick(user,['nombre','email']) });            
            }
        });
}
module.exports.update = (req, res, next) => {
    User.findByIdAndUpdate({_id: req._id},{$set:req.body},
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false , message: 'historial de usuario no encontrado.'});
            else {
                return res.status(200).json({status: true, message : "Actualizado con exito" });            
            }
        });
}