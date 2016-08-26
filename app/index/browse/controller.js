import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 50,
  actions: {
    filterByDrink(param) {
      if (param !== '') {
        return this.get('store').query('drink', {
          name: param,
          page: {
            size: this.size,
          },
        });
      } else {
        return this.get('store').query('drink', {
          page: {
            number: this.page,
            size: this.size,
          },
        });
      }
    },
  },
});
