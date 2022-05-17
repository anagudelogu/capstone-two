import './index.css';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';
import InvolvementAPI from './modules/involvementAPI';

const asyncEnv = async () => {
  const pasta = await MealAPI.getByCategory('Pasta');
  const currentCategory = new CurrentCategory(pasta);
  UserInterface.displayRecipes(currentCategory.meals);
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('fa-heart')) {
    const mealName = clickedElement.parentNode.children[0].innerText;
    await InvolvementAPI.addLike(mealName);
  }
});
