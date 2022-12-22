import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const signupUser = async payload => {
  try {
    const res = await axios.post(`${API_URL}/users`, {
      email: payload.email,
      name: payload.name,
      social_id: payload.social_id,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
