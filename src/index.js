import './index.css';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';
import InvolvementAPI from './modules/involvementAPI.js';

const asyncEnv = async () => {
  const pasta = await MealAPI.getByCategory('Chicken');
  const allLikes = await InvolvementAPI.getAllLikes();
  const currentCategory = new CurrentCategory(pasta);
  UserInterface.displayRecipes(currentCategory.meals, allLikes);
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await InvolvementAPI.addLike(mealId);
    UserInterface.addToLikesCounterDOM(card);
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const mealId = clickedElement.parentNode.getAttribute('id');
    await InvolvementAPI.addComment(
      { username: '', comment: '' },
      mealId
    );
  }
});
