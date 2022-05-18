import './index.css';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';
import InvolvementAPI from './modules/involvementAPI.js';

const asyncEnv = async () => {
  const pasta = await MealAPI.getByCategory('Seafood');
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

  if (clickedElement.classList.contains('recipes__comments')) {
    const mealName = clickedElement.parentNode.children[0].innerText;
    await InvolvementAPI.addComment(
      { username: '', comment: '' },
      mealName,
    );
  }
});
