import './index.css';
import UserInterface from './modules/userInterface';

const asyncEnv = async () => {
  await UserInterface.displayRecipes();
};

asyncEnv();
