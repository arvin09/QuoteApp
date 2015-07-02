var app = angular.module('quoteApp');
app.constant('appConfig', { 
	FACEBOOK : {
		APP_ID : '385777114947643',
		CHANNEL_URL : 'app/channel.html',
		VERSION : 'v2.3',
		SDK_URL : '//connect.facebook.net/en_US/sdk.js',
		JSDK    : 'facebook-jssdk'
	},

	GOOGLE : {
		CLIENT_ID : '696470903530-hd0ffdiqvrpfqvnkhoi6an077db8qd3k.apps.googleusercontent.com',
		COOKIE_POLICY : 'single_host_origin',
		SCOPE : 'https://www.googleapis.com/auth/plus.login' 	
	}
});

