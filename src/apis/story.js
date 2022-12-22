import axios from 'axios';

const API_URL = `process.env.REACT_APP_API_URL/stories`;

export const getStories = async () => {
  try {
    const res = await axios.get(`${API_URL}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getStoryById = async story_id => {
  try {
    const res = await axios.get(`${API_URL}/${story_id}`);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updateStoryTitle = async (story_id, title) => {
  try {
    const res = await axios.put(`${API_URL}/${story_id}/title`, {
      title: title,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const createStory = async payload => {
  try {
    const res = await axios.post(`${API_URL}`, {
      characters: payload.characters,
      image_ids: payload.image_ids,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
