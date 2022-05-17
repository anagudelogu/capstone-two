import FetchRequest from './fetchRequest.js';

const urlMap = {
  random: 'https://www.themealdb.com/api/json/v1/1/random.php',
  categories:
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  byCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
};

export default class MealAPI {
  static async getRandomRecipe() {
    const fetchRequest = new FetchRequest({ url: urlMap.random });
    const data = await fetchRequest.call();
    return data.meals[0];
  }

  static async getCategories() {
    const fetchRequest = new FetchRequest({ url: urlMap.categories });
    const categories = await fetchRequest.call();
    return categories.categories;
  }

  static async getByCategory(category) {
    const fetchRequest = new FetchRequest({
      url: `${urlMap.byCategory}${category}`,
    });
    const recipes = await fetchRequest.call();
    return recipes.meals;
  }
}
