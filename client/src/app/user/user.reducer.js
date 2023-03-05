import {
  FRIEND__LIST,
  FRIEND__LIST__FAIL,
  USER__LIST,
  USER__LIST__FAIL,
} from './userAction';

const initialState = {
  user: [],
  friend: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FRIEND__LIST:
      return { ...state, friend: payload };

    case USER__LIST:
      return { ...state, user: payload.user };
    case FRIEND__LIST__FAIL:
      return { ...state };
    case USER__LIST__FAIL:
      return { ...state };
    default:
      return state;
  }
};
