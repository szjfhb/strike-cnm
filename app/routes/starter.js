import Ember from 'ember';

export default Ember.Route.extend({
	getLanguage:function (argument) {
		// body...
		alert(window.navigator.language);
alert(window.navigator.browserLanguage);
alert(window.navigator.userLanguage);
alert(window.navigator.systemLanguage);
alert(window.navigator.userAgent);
	}
});
