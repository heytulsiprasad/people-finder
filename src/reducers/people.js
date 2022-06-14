import * as aTypes from '../actions/types';

const initialState = {
  allUsers: [],
  currentUser: {},
  totalCount: 0,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case aTypes.FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: [...action.payload],
      };
    default:
      return state;
  }
};

export default peopleReducer;
