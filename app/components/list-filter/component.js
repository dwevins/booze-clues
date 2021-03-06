import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  // Runs everytime the attributes for this component change
  didReceiveAttrs() {
    // Does the setup or the normal version of "init" so we don't have to rewrite that...
    this._super(...arguments);

    // Gets data when the component first is created with an empty search
    this.get('filter')(this.query, this.get('page')).then((drinks) => this.setProperties({
      drinks, loading: false,
    }));

    this.set('value', this.query);
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      let page = this.get('page');
      this.set('loading', true);
      console.log('loading')

      filterAction(filterInputValue, page).then((drinks) => this.setProperties({
        drinks, loading: false,
      }));
    },
  },

});
