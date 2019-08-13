'use strict';

var file = require('./config');
var config = require('./config');
console.log("rrrrrrr",config)
var serviceAccountFile =  './config/' + config.fireBase.FCM_JS_FILE;
var serviceAccount = require(serviceAccountFile);

var admin = require('firebase-admin');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccountFile),
	databaseURL: config.fireBase.FCM_DB_URL
});



 function FCMPushNotification(rspTokens, payload, fcmCB) {
	admin.messaging().sendToDevice(rspTokens, payload)
		.then(function(response) {
			console.log('Successfully sent message:', JSON.stringify(response));
			fcmCB(null, response);
		})
		.catch(function(error) {
			console.log('Error sending message:', JSON.stringify(error));
			fcmCB(error, null);
		});
}


module.exports.fire = FCMPushNotification;