import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,

  actions: {
    toggleLoginModal: function() {
      this.toggleProperty('isLoginModalVisible');
    },
  },
});
