import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    login(formValues) {
      const authenticator = 'authenticator:application';

      this.get('session').authenticate(authenticator, {
          identification: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          this.transitionToRoute('/cabinet');
                    // flashMessages.success('Successfully saved!');

        })
        .catch(() => {

          window.alert('Username/Password incorrect.');
        });
    },
  },
})
