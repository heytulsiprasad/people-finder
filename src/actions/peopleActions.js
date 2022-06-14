import * as aTypes from './types';

export const loadAllUsers = (users) => {
  return {
    type: aTypes.LOAD_ALL_USERS,
    payload: { users },
  };
};

export const loadSingleUser = (user) => {
  return {
    type: aTypes.LOAD_SINGLE_USER,
    payload: { user },
  };
};

export const setLoaderState = (state) => {
  return {
    type: aTypes.SET_LOADER_STATE,
    payload: state,
  };
};
