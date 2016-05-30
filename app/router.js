import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('starter');
  this.route('missing', {path: '/*wildcard'});
});

export default Router;
