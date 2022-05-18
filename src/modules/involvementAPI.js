// MBxSJyVQ8zQzuxBkwa5m
// IlF5vbTwnxZ2cdpiiJ2c
import FetchRequest from './fetchRequest.js';

const appId = 'IlF5vbTwnxZ2cdpiiJ2c';
const urlMAP = {
  main: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  likes: `${appId}/likes/`,
  comments: `${appId}/comments`,
  byComment: `${appId}/comments?item_id=`,
};

export default class InvolvementAPI {
  static async addLike(meal) {
    try {
      const fetchRequest = new FetchRequest({
        method: 'POST',
        body: { item_id: meal },
        url: `${urlMAP.main}${urlMAP.likes}`,
      });
      await fetchRequest.call();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getLikes(meal) {
    try {
      const fetchRequest = new FetchRequest({
        url: `${urlMAP.main}${urlMAP.likes}`,
      });
      const allLikes = await fetchRequest.call();
      const mealLikes = allLikes.filter((x) => x.item_id === meal)[0];
      if (!mealLikes) return 0;
      return mealLikes.likes;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async addComment({ username, comment }, meal) {
    try {
      const fetchRequest = new FetchRequest({
        method: 'POST',
        body: {
          item_id: meal,
          username,
          comment,
        },
        url: `${urlMAP.main}${urlMAP.comments}`,
      });
      await fetchRequest.call();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getComments(meal) {
    try {
      const fetchRequest = new FetchRequest({
        url: `${urlMAP.main}${urlMAP.byComment}${meal}`,
      });
      const comments = await fetchRequest.call();
      return comments;
    } catch (error) {
      throw new Error(error);
    }
  }
}