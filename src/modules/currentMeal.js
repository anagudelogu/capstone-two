export default class CurrentMeal {
  id;

  name;

  image;

  recipe;

  comments;

  constructor(currentMeal) {
    this.id = currentMeal.idMeal;
    this.name = currentMeal.strMeal;
    this.image = currentMeal.strMealThumb;
    this.recipe = currentMeal.strInstructions;
  }
}
