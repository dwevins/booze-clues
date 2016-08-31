import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    saveFave() {
      const attrs = {
        drink: this.get('model'),
      };
      const favorite = this.store.createRecord('favorite', attrs);
      favorite.save().then(() => {
        this.get('flashMessages').success('Bill Murray likes that drink too.');
      })
      .catch(() => {
        this.get('flashMessages').warning('duh, already know that.');
      })
    },

    removeFave(favoritesPromise) {
      favoritesPromise.then((favorites) => {
        favorites.get('firstObject').destroyRecord();
      })
    },
  },
});
