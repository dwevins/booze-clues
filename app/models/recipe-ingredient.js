import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('string'),
  measure: DS.attr('string'),
  addbMeasure: DS.attr('string'),
  drink: DS.belongsTo('drink'),
  ingredient: DS.belongsTo('ingredient'),
});
