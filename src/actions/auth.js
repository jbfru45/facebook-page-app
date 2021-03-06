export const login = (user) => ({
  type: 'LOGIN',
  user
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const loadCurrentUser = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      FB.api('/me', (response) => {
        if(response) {
          if(response.error) {
            reject(response.error);
            return;
          }
          dispatch(login(response));
        }
        resolve();
      });
    });
  };
};

export const logoutCurrentUser = () => {
  return (dispatch) => {
    return new Promise((resolve) => {
      FB.logout(() => {
        dispatch(logout());
        resolve();
      });
    });
  };
};