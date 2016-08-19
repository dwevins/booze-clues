import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,
  isLoggedIn: false,

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
      this.toggleProperty('isRegisterModalVisible');
      console.log(registerValues);
    },

    login: function(loginValues) {
      this.toggleProperty('isLoginModalVisible');
      console.log(loginValues);
    },
  },
});
