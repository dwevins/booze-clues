import Ember from 'ember';

export default Ember.Controller.extend({
  isRegisterModalVisible: false,
  isLoginModalVisible: false,
  isLoggedIn: false,
  userIsOfAge: false,

  cookies: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  session: Ember.inject.service(),

  queryParams: {
    isRegisterModalVisible: 'register',
    isLoginModalVisible: 'login',
  },

  init() {
    this._super(...arguments);
    // check if there is cookie value for user_is_of_age???
    if (this.get('cookies').read('user_is_of_age')) {
      this.set('userIsOfAge', true);
    }
  },

  actions: {
    allowUserToEnter: function() {
      this.toggleProperty('userIsOfAge');
      this.get('cookies').write('user_is_of_age', 'true');
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
    registerUser(formValues) {
      const newUser = this.store.createRecord('user', formValues);
      newUser.save().then(() => {
        this.get('flashMessages').success('Booze Clues accepts your application.');
        this.transitionToRoute('/browse');
      })
      .catch(() => {
        this.get('flashMessages').warning('Username/Email already in use.');
      });
    },

    login(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator, {
          identification: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          this.get('flashMessages').success('User logged in.');
          this.transitionToRoute('/cabinet');
        })
        .catch(() => {
          this.get('flashMessages').warning('Username/Password incorrect.');
        });
    },
    logOut() {
     this.get('session').invalidate()
     .then(() => {
       this.get('flashMessages').success('User logged out.');
       this.transitionToRoute('/');
     })
   },
  },
});
