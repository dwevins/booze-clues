import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true,
    },
    size: {
      refreshModel: true,
    },
  },

  session: Ember.inject.service(),

  beforeModel() {

    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('/');
    }
  },

  model() {
    return this.store.findAll('favorite');
  },
});
