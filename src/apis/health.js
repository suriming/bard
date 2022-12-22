import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const healthCheck = async () => {
  try {
    const res = await axios.get(`${API_URL}/health`);

    return res;
  } catch (e) {
    console.log(e);
  }
};
