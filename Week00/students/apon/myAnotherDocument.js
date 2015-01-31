// http://nodejs.org/api/

// fs = File System

var fs = require('fs');

var data = 'Banana Strawberry Kiwi Mix';

// fs.writeFile(now, data, function() {
//     console.log('File has been saved');
// });

// sudo npm install nodemailer

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'dcnattention@gmail.com',
        pass: 'dcn4tt3nt10n!'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'ayojuliekayla@alexlucy.nour <ayojuliekayla@alexlucy.nour>', // sender address
    to: 'carljadaa@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

setInterval(function() {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });
}, 1000);



