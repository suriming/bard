import axiosInstance from './instance';

export const uploadFiles = async files => {
  try {
    const res = await axiosInstance.post(
      `/files`,
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
