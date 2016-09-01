import Ember from 'ember';
import {
  task,
  timeout,
} from 'ember-concurrency';

export default Ember.Controller.extend({
  flashMessages: Ember.inject.service(),

  init() {
    this._super(...arguments);

    this.set('cabinet', []);
  },

  search: task(function*(name) {
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

    findByIngredient() {
      let ingredientIds = this.cabinet.mapBy('id');
      if (!ingredientIds.includes("1")) {
        ingredientIds = [...ingredientIds, "1"]
      }

      const hasIce = ingredientIds.reduce((soFar, id) => {
        return id === "1" || soFar;
      }, false);

      // if (!hasIce) {
      //   this.get('flashMessages').warning({
      //     icon: 'glass',
      //     message: 'Did you forget to add ice?',
      //   });
      // }

      const queryString = ingredientIds.join(',' );

      this.store.query('drink', {
        ingredients: queryString,
      }).then((drinks) => {
        this.set('results', drinks);
      })
    },
  },

});
