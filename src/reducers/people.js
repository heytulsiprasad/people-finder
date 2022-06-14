import * as aTypes from '../actions/types';

const initialState = {
  allUsers: [],
  currentUser: {},
  totalCount: 0,
  loading: false,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case aTypes.SET_LOADER_STATE:
      return {
        ...state,
        loading: action.payload || true,
      };
    case aTypes.LOAD_ALL_USERS:
      return {
        ...state,
        allUsers: [...action.payload.users],
        totalCount: action.payload.users.length,
        loading: false,
      };
    case aTypes.LOAD_SINGLE_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        loading: false,
      };
    default:
      return state;
  }
};

export default peopleReducer;
