import FetchRequest from './fetchRequest';

const urlMap = {
  random: 'https://www.themealdb.com/api/json/v1/1/random.php',
  categories:
    'https://www.themealdb.com/api/json/v1/1/categories.php',
};

export default class MealAPI {
  static async getRandomRecipe() {
    const fetchRequest = new FetchRequest({ url: urlMap.random });
    const data = await fetchRequest.call();
    return data.meals[0];
  }
}
