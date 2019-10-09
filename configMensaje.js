NODE_TLS_REJECT_UNAUTHORIZED = 0
const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'daniel.obando2486@gmail.com',
            pass: 'fortnite2486..'
        }
    });

const mailOptions = {
    from: `"${formulario.nombre} " <${formulario.email}>`,
    to: 'xander.david09@gmail.com',
    subject: formulario.asunto,
    htlm: `
    <strong>Nombre:</strong>${formulario.nombre} <br/>
    <strong>E-mail:</strong>${formulario.email} <br/>
    <strong>Mensaje:</strong>${formulario.mensaje}
    ` 
};

transporter.sendMail(mailOptions, function(err, info){
    NODE_TLS_REJECT_UNAUTHORIZED = 0
    if(err)
        console.log(err)
    else    
        console.log(info);
});
}

