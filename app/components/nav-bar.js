import Ember from 'ember';

export default Ember.Component.extend({
	isShowQRCode: null,
	actions:{
		showQRCode(){
			this.toggleProperty('isShowQRCode');
		}
	}
});
