import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveFave() {
      const attrs = {
        user_id: this.get('secure.user_id'),
        drink_id: this.get('model.id'),
      }
      const favorite = this.store.createRecord('favorite', attrs);
      favorite.save().then(() => {
        this.get('flashMessages').success('Bill Murray likes that drink too.');
      })
      .catch(() => {
        this.get('flashMessages').warning('duh, already know that.');
      })
    },
  },
});
