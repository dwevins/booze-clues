import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: ['fullWidth:carousel-slider'],
  classNames: ['carousel'],

  didInsertElement() {
    this._super(...arguments);

      this.$().carousel({
        full_width: this.fullWidth,
      });
  },

  actions: {
    next(movement = 1) {
      this.$().carousel('next', movement);
    },

    prev(movement = 1) {
      this.$().carousel('prev', movement);
    },

    set(index = 1) {
      this.$().carousel('set', index);
    },
  },
});
