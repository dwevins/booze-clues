import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('index', {path:'/'}, function() {
    this.route('cabinet');
    this.route('featured', {path:'/'});
    this.route('recipe', {path:'/recipe/:drink_id'});
    this.route('browse');
    this.route('favorites');
  })
});


export default Router;
