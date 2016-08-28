import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  recipe: DS.attr('string'),
  photoUrl: DS.attr('string'),
  recipeIngredients: DS.hasMany('recipe-ingredient'),
});
