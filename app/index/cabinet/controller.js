import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);

    this.set('cabinet', []);
  },

  search: task(function *(name) {
    if (name) {
      yield timeout(200);
    }

    return this.get('store').query('ingredient', {
      name,
      page: {
        size: this.size,
      },
    });
  }).restartable(),

  actions: {
    filterByIngredient(param) {
      this.set('query', param);

      if (param !== '') {
        return this.get('search').perform(param);
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
    findByIngredient(drink) {
      console.log('cabinet');
    },
  },

});
