import {
  ADD__FRIEND,
  LOGIN,
  LOGIN__FAIL,
  LOGOUT,
  REGISTER,
  REGISTER__FAIL,
  REMOVE__FRIEND,
} from './authAction';

const initialState = {
  user: JSON.parse(localStorage.getItem('social:user')) || {},
  isLogin: JSON.parse(localStorage.getItem('social:isLogin')) || false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem('social:user', JSON.stringify(payload));
      localStorage.setItem('social:isLogin', true);
      return { ...state, user: payload, isLogin: true };
    case LOGIN__FAIL:
      return { ...state };
    case REGISTER__FAIL:
      return { ...state };
    case REGISTER:
      return { ...state, user: payload, isLogin: true };

    case ADD__FRIEND:
      const { friendId } = payload;
      const addFriend = state.user;
      addFriend.friends.push(friendId);
      localStorage.setItem('social:user', JSON.stringify(addFriend));
      return { ...state, user: addFriend };

    case REMOVE__FRIEND:
      const removeFriend = state.user;
      removeFriend.friends = state.user.friends.filter(
        (id) => id !== payload.friendId,
      );
      localStorage.setItem('social:user', JSON.stringify(removeFriend));

      return { ...state, user: removeFriend };

    case LOGOUT:
      localStorage.removeItem('social:user');
      localStorage.removeItem('social:isLogin');
      return { ...state, user: {}, isLogin: false };

    default:
      return { ...state };
  }
};
