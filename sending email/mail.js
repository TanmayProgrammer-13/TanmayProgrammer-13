// Importing Nodemailer Into the mail.js
var nodemailer = require('nodemailer');

var Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'YourPasswordHere'
    }
});
var mailOptions = {
    from: 'youremail@gmail.com',
    to:   'sendersmail@gmail.com',
    subject: 'Node.Js',
    text:  'Hi this mail is Send Using Node.js',
};
Transporter.sendMail(mailOptions, function(error, info){
        if(error){
        console.log(error); 
        }else{
            console.log('Your Email was Sent!', + info.response );
        }
});