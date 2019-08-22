const passport = require('passport');
const localStrategy = require('passport-local');
const mongoose = require('mongoose');

var USer = mongoose.model('User');
passport.use(
    new localStrategy({usernameField: 'email'}, 
        (username, password, done) => {
            USer.findOne({ email: username}, 
                (err, user) => {
                    if (err)
                        return done(err);
                    else if (!user)
                        return done(null, false, { message: 'No se encuentra usuario con este email'}); 
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Contraseña erronea.' });
                    else
                        return done(null, user);               
                });
        })
);