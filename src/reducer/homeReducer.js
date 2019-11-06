const LOGIN_OUT = 'USER_LOGOUT';
const initialState = {};

export const home = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function logout() {
  return {type: LOGIN_OUT};
}
