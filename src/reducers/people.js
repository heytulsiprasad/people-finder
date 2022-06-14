import * as aTypes from '../actions/types';

const initialState = {
  allUsers: [],
  currentUser: {},
  totalCount: 0,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case aTypes.LOAD_ALL_USERS:
      return {
        ...state,
        allUsers: [...action.payload.users],
        totalCount: action.payload.users.length,
      };
    case aTypes.LOAD_SINGLE_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    default:
      return state;
  }
};

export default peopleReducer;
