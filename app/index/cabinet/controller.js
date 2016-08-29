import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByIngredient(param) {
      if (param !== '') {
        return this.get('store').query('ingredient', {
          name: param,
          page: {
            size: this.size,
          },
        });
      } else {
        return this.get('store').query('ingredient', {
          page: {
            number: this.page,
            size: this.size,
          },
        });
      }
      },
      },

});
