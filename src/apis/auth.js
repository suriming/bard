export const googleSignIn = async ({ clientId, credential }) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/google`, {
    method: 'POST',
    body: JSON.stringify({ clientId, credential }),
    credentials: 'include',
  });

  if (res.ok) {
    return res;
  } else {
    throw new Error('Failed to sign in');
  }
};

export const Logout = async () => {
  const res = await fetch('http://localhost:8080/api/v1/auth/logout', {
    method: 'GET',
    credentials: 'include',
  });
  if (res.ok) {
    const response = await res.json();
    console.log(response);
    return response;
  } else {
    throw new Error('Failed to authenticate');
  }
};
