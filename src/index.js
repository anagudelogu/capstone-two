import './index.css';
import logo from './assets/burger-logo.png';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';
import CurrentMeal from './modules/currentMeal.js';
import InvolvementAPI from './modules/involvementAPI.js';
import PopUp from './modules/popUp.js';

const imageContainer = document.querySelectorAll('.image');

Array.from(imageContainer).forEach((container) => {
  const logoImg = new Image();
  logoImg.src = logo;
  logoImg.classList.add('hero__logo');
  logoImg.alt = 'Yummy Recipes Logo';
  container.appendChild(logoImg);
});

const asyncEnv = async () => {
  const categories = await MealAPI.getCategories();
  UserInterface.displayCategories(categories);
  UserInterface.counterText('Categories');
};

asyncEnv();

const LIST = document.querySelector('.recipes__list');

LIST.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('categories__button')) {
    const categoryName =
      clickedElement.parentNode.children[0].innerText;
    LIST.innerHTML = '';
    const pasta = await MealAPI.getByCategory(categoryName);
    const allLikes = await InvolvementAPI.getAllLikes();
    const currentCategory = new CurrentCategory(pasta);
    UserInterface.displayRecipes(currentCategory.meals, allLikes);

    UserInterface.counterText('Recipes');
  }

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await InvolvementAPI.addLike(mealId);
    UserInterface.addToLikesCounterDOM(card);
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await MealAPI.getRecipe(mealId);

    await InvolvementAPI.addComment(
      { username: '', comment: '' },
      mealId
    );

    let comments = await InvolvementAPI.getComments(mealId);

    comments = comments.filter((comment) => comment.username !== '');

    const currentMeal = new CurrentMeal(meal, comments);

    PopUp.pop({
      ...currentMeal,
      comments,
      type: 'Recipe',
    });
  }
});
