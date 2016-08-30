import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);

    this.set('cabinet', []);
  },

  actions: {
    filterByIngredient(param) {
      this.set('query', param);

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
    addIngredient(ingredient) {
      this.set('cabinet', [...this.cabinet, ingredient]);
    },
  },

});
