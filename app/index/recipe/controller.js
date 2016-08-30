import Ember from 'ember';

export default Ember.Controller.extend({
session: Ember.inject.service(),
  actions: {

    saveFave() {
      console.log(this.get('session').store);
      const attrs = {
        user: this.get('session'),
        drink: this.get('model.id'),
      }
      // console.log(attrs);
      const favorite = this.store.createRecord('favorite', attrs);
      // favorite.save().then(() => {
      //   this.get('flashMessages').success('Bill Murray likes that drink too.');
      // })
      // .catch(() => {
      //   this.get('flashMessages').warning('duh, already know that.');
      // })
    },
  },
});
