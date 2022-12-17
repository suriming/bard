export const googleSignIn = async ({ clientId, credential }) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/google`, {
    method: 'POST',
    body: JSON.stringify({ clientId, credential }),
  });

  console.log(res);

  if (res.ok) {
    const response = await res.json();
    return response;
  } else {
    throw new Error('Failed to sign in');
  }
};
