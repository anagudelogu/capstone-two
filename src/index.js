import './index.css';
import UserInterface from './modules/userInterface.js';

const asyncEnv = async () => {
  await UserInterface.displayRecipes();
};

asyncEnv();
