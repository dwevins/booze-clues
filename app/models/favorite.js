import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('number'),
  drink: DS.attr('number'),
});
