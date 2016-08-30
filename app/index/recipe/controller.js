import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveFave() {
      const attrs = {
        user_id: this.get('session'),
        drink_id: this.get('model.id'),
      }
      console.log(attrs);
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
