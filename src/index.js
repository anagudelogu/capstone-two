import './index.css';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';

const asyncEnv = async () => {
  const pasta = await MealAPI.getByCategory('Pasta');
  const currentCategory = new CurrentCategory(pasta);
  UserInterface.displayRecipes(currentCategory.meals);
};

asyncEnv();
