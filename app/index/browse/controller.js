import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size', 'query'],
  page: 1,
  size: 10,
  query: '',

  resetQuery(query) {
    this.setProperties({
      page: 1,
      query,
    });
  },

  actions: {
    filterByDrink(query, page) {
      page = page || this.page;

      if (query !== this.query) {
        this.resetQuery(query);
      }
      if (query !== '') {
        return this.get('store').query('drink', {
          name: query,
          page: {
            number: page,
            size: this.size,
          },
        });
      } else {
        return this.get('store').query('drink', {
          page: {
            number: page,
            size: this.size,
          },
        });
      }
    },

    getNextPage() {
      this.incrementProperty('page');
    },
    getLastPage() {
      this.decrementProperty('page');
    },
  },
});
