import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,
  isLoggedIn: false,
  userIsOfAge: false,

  queryParams: {
    isRegisterModalVisible: 'register',
    isLoginModalVisible: 'login',
  },

  actions: {
    allowUserToEnter: function() {
        this.toggleProperty('userIsOfAge')
    },

    blockUserFromSite: function() {

    },

    toggleLoginModal: function() {
      this.toggleProperty('isLoginModalVisible');
    },

    toggleRegisterModal: function() {
      this.toggleProperty('isRegisterModalVisible');
    },

    register: function(registerValues) {
      this.toggleProperty('isRegisterModalVisible');
    },

    login: function(loginValues) {
      this.toggleProperty('isLoginModalVisible');
    },
  },
});
