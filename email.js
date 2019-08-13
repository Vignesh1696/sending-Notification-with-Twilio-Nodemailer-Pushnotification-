var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');



const env = {
	SMTP_HOST: '*********',
	SMTP_PORT: 587,
	SMTP_AUTH_USER: '*******',
	SMTP_AUTH_PASS: '******',
	SMTP_FROM: '**********'
}


var transporter = nodemailer.createTransport(smtpTransport({
	host: env.SMTP_HOST,
	port: env.SMTP_PORT,
	tls: {
		rejectUnauthorized: false
	},
	auth: {
		user: env.SMTP_AUTH_USER,
		pass: env.SMTP_AUTH_PASS
	}
}));

module.exports = env;
module.exports = transporter;