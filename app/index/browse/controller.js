import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 200,
  actions: {
    filterByDrink(param) {
      if (param !== '') {
        return this.get('store').query('drink', { name: param });
      } else {
        return this.get('store').findAll('drink');
      }
    },
  },
});
