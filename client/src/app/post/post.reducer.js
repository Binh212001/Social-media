import {
  NEW__POST,
  NEW__POST__FAIL,
  GET__LIST__POST,
  GET__LIST__POST__PAGE,
  LIKE,
  GET__MY__POST,
  GET__MY__POST__PAGE,
  REMOVE__POST,
} from './postAction';

const initialState = {
  post: [],
  message: '',
  myPost: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW__POST:
      const postAfterCreate = [payload, ...state.post];
      return {
        ...state,
        post: postAfterCreate,
        message: 'create Post Success',
      };

    case NEW__POST__FAIL:
      return {
        ...state,
        message: payload,
      };

    case GET__LIST__POST:
      return { ...state, post: payload };

    case GET__MY__POST:
      return { ...state, myPost: payload };

    case GET__LIST__POST__PAGE:
      return { ...state, post: [...state.post, ...payload] };

    case GET__MY__POST__PAGE:
      return { ...state, myPost: [...state.myPost, ...payload] };

    case LIKE:
      const index = state.post.findIndex((item) => item._id === payload.postId);

      if (state.post[index]?.likes?.includes(payload.userId)) {
        state.post[index].likes = state.post[index].likes.filter(
          (id) => id !== payload.userId,
        );
      } else {
        state.post[index]?.likes.push(payload.userId);
      }

      return {
        ...state,
      };

    case REMOVE__POST:
      const postBeforeRemove = state.myPost.filter(
        (post) => post._id !== payload,
      );
      return {
        ...state,
        myPost: postBeforeRemove,
      };

    default:
      return state;
  }
};
