export const ADD_USERS = "ADD_USERS";

export const setUser = (user) => ({
  type: ADD_USERS,
  user,
});

export const getUsers = (state) => state.users;

const userReducer = (state = [], action) => {
  switch (action.type) {

    case ADD_USERS:
      return [...state, action.user];
    default:
      return state;
  }
};
export default userReducer;
