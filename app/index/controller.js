import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,

  queryParams: {
    isRegisterModalVisible: 'register',
    isLoginModalVisible: 'login',
  },

  actions: {
    toggleLoginModal: function() {
      this.toggleProperty('isLoginModalVisible');
    },

    toggleRegisterModal: function() {
      this.toggleProperty('isRegisterModalVisible');
    },

    register: function(registerValues) {
      //
    },

    login: function(loginValues) {
      //
    },
  },
});
