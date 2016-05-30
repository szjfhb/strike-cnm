import Ember from 'ember';

export default Ember.Component.extend({
	isShowQRCode: null,
	actions:{
		ToggleQRCode(){
			this.toggleProperty('isShowQRCode');
		},
		hideQRCode(param)
		{
			alert(param);
			this.set('isShowQRCode', false);
		}
	}
});
