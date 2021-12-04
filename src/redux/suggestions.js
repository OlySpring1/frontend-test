import axios from "axios";
const START_LOADING = "START_LOADING";
const HANDLE_SUCCESS = "HANDLE_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";
const FINISH_LOADING = "FINISH_LOADING";

export const startLoading = () => ({ type: START_LOADING });
export const finishLoading = () => ({ type: FINISH_LOADING });
export const handleSuccess = (suggestions) => ({
  type: HANDLE_SUCCESS,
  suggestions,
});
export const handleError = () => ({
  type: HANDLE_ERROR,
});

export const getIsLoading = (state) => state.suggestions.isLoading;
export const getFinishLoading = (state) => state.suggestions.loaded;
export const getError = (state) => state.suggestions.hasError;
export const getSuggestions = (state) => state.suggestions.suggestions;

const initialState = {
  isLoading: false,
  hasError: false,
  loaded: false,
  suggestions: [],
};

const suggestionsReducer = (state = initialState, action) => {
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
        suggestions: action.suggestions,
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
export default suggestionsReducer;

export const getSuggestionsWithServer = (text) =>
  axios.get(
    `https://autocomplete.search.hereapi.com/v1/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&q=${text}`
  );

export const setSuggestions = (text) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await getSuggestionsWithServer(text);
      const suggestions = await response.data;
      dispatch(handleSuccess(suggestions.items));
    } catch (error) {
      dispatch(handleError(error));
    } finally {
      dispatch(finishLoading());
    }
  };
};
