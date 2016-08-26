import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  // Runs everytime a new version of this component is created
  init() {
    // Does the setup or the normal version of "init" so we don't have to rewrite that...
    this._super(...arguments);

    // Gets data when the component first is created with an empty search
    this.get('filter')('').then((drinks) => this.set('drinks', drinks));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('drinks', filterResults));
    },
  },

});
