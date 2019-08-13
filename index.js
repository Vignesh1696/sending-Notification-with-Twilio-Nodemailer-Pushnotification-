var config = require("./config");

var email = require('./email')
var pushNotification = require('./pushNotification')
var Twilio = require('twilio')(config.twilioSecretKey.LiveSID, config.twilioSecretKey.LiveAuthToken);

function sendNotification(notificationType, data, credential) {
	if (notificationType == 'email') {


		email.sendMail(data, function(error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + JSON.stringify(info));
				return
			}
		});
	} else if (notificationType == 'pushNotification') {
		pushNotification.fire.FCMPushNotification(data.devTokens, data.payload, function(err, response) {
			if (err) {
				console.log("push Notificaiton not send", err);
			} else {
				return console.log("push Notificaiton  send successfully");
			}
		})

	} else if (notificationType == 'sms') {
		console.log(notificationType, data)

		Twilio.sendMessage(data, function(err, responseData) {
			if (err) {
				console.log('Send SMS Error::', err);
			} else {
				return console.log("SMS Send Successfully::", responseData);
			}
		});

	}

}



//For email data.......
// var data = {
// 	html: "<b>Hello viki!</b><p>hiiii</p>.",
// 	createTextFromHtml: true,
// 	from: '**************',
// 	to: "******************",
// 	subject: "Nodemail Credentials"
// };



//For sms data...........
// var data = {
// 	from: "+********",
// 	to: "+*********",
// 	body: "hiii"
// }



//For Pushnotification
// var data = {
// 	devTokens: '123456789',
// 	payload: {
// 		title: 'Notification',
// 		desc: 'Message',
// 		type: 'Individual'
// 	}
// };
var credits = null
sendNotification('pushNotification', data, credits)