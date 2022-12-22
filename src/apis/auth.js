import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const googleSignIn = async ({ clientId, credential }) => {
  try {
    const res = await axios.post(
      `${API_URL}/auth/google`,
      {
        clientId,
        credential,
      },
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(`${API_URL}/auth/logout`, {
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getSession = async () => {
  try {
    const res = await axios.get(`${API_URL}/auth/user`, {
      withCredentials: true,
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
