import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const uploadFiles = async files => {
  try {
    const res = await axios.post(
      `${API_URL}/files`,
      {
        files,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};
