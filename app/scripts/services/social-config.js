
'use strict';
var app = angular.module('quoteApp');
app.service('SocialConfig', ['appConstants','$window', 'fbUtil','gplusUtil',function (appConstants,$window, fbUtil, gplusUtil) {
	(function(){
    console.log('GPLUS');
    gapi.load('auth2',function(){
      gapi.auth2.init({
          'client_id': appConstants.GOOGLE.CLIENT_ID,
          'cookie_policy' : appConstants.GOOGLE.COOKIE_POLICY,
          'scope': appConstants.GOOGLE.SCOPE
      });

      gplusUtil.watchSignInChange();
      
    });

  })();

  $window.fbAsyncInit = function() {
    FB.init({
      appId      : appConstants.FACEBOOK.APP_ID,
      channelUrl : appConstants.FACEBOOK.CHANNEL_URL,
      xfbml      : true,
      version    : appConstants.FACEBOOK.VERSION
    });
    fbUtil.watchLoginChange();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = appConstants.FACEBOOK.SDK_URL;
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', appConstants.FACEBOOK.JSDK));
}]);
