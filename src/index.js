import './index.css';
import logo from './assets/burger-logo.png';
import UserInterface from './modules/userInterface.js';
import MealAPI from './modules/mealAPI.js';
import CurrentCategory from './modules/currentCategory.js';
import CurrentMeal from './modules/currentMeal.js';
import InvolvementAPI from './modules/involvementAPI.js';
import PopUp from './modules/popUp.js';
import Menu from './modules/menu.js';

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
  Menu.displayCategories(categories);
  UserInterface.displayCategories(categories);
  UserInterface.counterText('Categories');
};

asyncEnv();

const LIST = document.querySelector('.list');

const toggleMenu = () => {
  document.body.classList.toggle('noScroll');
  document.querySelector('.menu').classList.toggle('active');
};

const goBackToCommonParent = (node, a, b) => {
  if (node.getAttribute(a.type).includes(a.item)
      !== node.parentNode.getAttribute(b.type).includes(b.item)
  ) return node;
  return goBackToCommonParent(node.parentNode, a, b);
};

document.addEventListener('click', async (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('navbar')) return;

  if (clickedElement.classList.contains('menu-toggle')) {
    toggleMenu();
    return;
  }

  if (clickedElement.getAttribute('class').includes('menu__item')) {
    const parent = goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'menu__item' },
      { type: 'class', item: 'menu__item' },
    );
    const categoryName = parent.children[1].innerText;
    LIST.innerHTML = '';
    const categories = await MealAPI.getByCategory(categoryName);
    const allLikes = await InvolvementAPI.getAllLikes();
    const currentCategory = new CurrentCategory(categories);
    UserInterface.displayRecipes(currentCategory.meals, allLikes);
    UserInterface.counterText('Recipes');
    document.querySelector('.hero').classList.add('hidden');
    toggleMenu();
    return;
  }

  if (clickedElement.getAttribute('class').includes('category')) {
    const parent = goBackToCommonParent(
      clickedElement,
      { type: 'class', item: 'category' },
      { type: 'class', item: 'category' },
    );
    const categoryName = parent.children[1].innerText;
    LIST.innerHTML = '';
    const categories = await MealAPI.getByCategory(categoryName);
    const allLikes = await InvolvementAPI.getAllLikes();
    const currentCategory = new CurrentCategory(categories);
    UserInterface.displayRecipes(currentCategory.meals, allLikes);
    UserInterface.counterText('Recipes');
    document.querySelector('.hero').classList.add('hidden');
    return;
  }

  if (clickedElement.classList.contains('hero__logo')) {
    LIST.innerHTML = '';
    const categories = await MealAPI.getCategories();
    UserInterface.displayCategories(categories);
    UserInterface.counterText('Categories');
    document.body.classList.remove('noScroll');
    document.querySelector('.menu').classList.remove('active');
    document.querySelector('.hero').classList.remove('hidden');
    return;
  }

  if (clickedElement.classList.contains('fa-heart')) {
    const card = clickedElement.parentNode.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    await InvolvementAPI.addLike(mealId);
    UserInterface.addToLikesCounterDOM(card);
    return;
  }

  if (clickedElement.classList.contains('recipes__comments')) {
    const card = clickedElement.parentNode.parentNode;
    const mealId = card.getAttribute('id');
    const meal = await MealAPI.getRecipe(mealId);

    await InvolvementAPI.addComment(
      { username: '', comment: '' },
      mealId,
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
