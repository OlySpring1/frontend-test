import { combineReducers } from "redux";

const START_LOADING = "START_LOADING";
const HANDLE_SUCCESS = "HANDLE_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";
const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });
export const handleSuccess = (user) => ({
  type: HANDLE_SUCCESS,
  user,
});
export const handleError = () => ({
  type: HANDLE_ERROR,
});

export const getIsLoading = (state) => state.userReducer.isLoading;
export const getFinishLoading = (state) => state.userReducer.loaded;
export const getError = (state) => state.userReducer.hasError;
export const getUsers = (state) => state.userReducer.users;

const initialState = {
  isLoading: false,
  hasError: false,
  loaded: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };

    case FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        loaded: true,
      };

    case HANDLE_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user],
        isLoading: false,
      };

    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ userReducer });
