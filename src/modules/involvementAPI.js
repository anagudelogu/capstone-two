// MBxSJyVQ8zQzuxBkwa5m
// IlF5vbTwnxZ2cdpiiJ2c
// 1OLlwvrPFTOZoc7KZ6ji
import FetchRequest from './fetchRequest';

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
}
