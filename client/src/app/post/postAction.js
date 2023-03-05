import postApi from '../../api/postApi';

export const NEW__POST = 'NEW__POST';

export const NEW__POST__FAIL = 'NEW__POST__FAIL';

export const GET__LIST__POST = 'GET__LIST__POST';

export const GET__MY__POST = 'GET__MY__POST';

export const GET__POST__FAIL = 'GET__POST__FAIL';

export const GET__LIST__POST__PAGE = 'GET__LIST__POST__PAGE';

export const LIKE = 'LIKE';

export const REMOVE__POST = 'REMOVE__POST';
export const UNLIKE = 'UNLIKE';

export const LIKE__FAIL = 'LIKE__FAIL';

export const GET__MY__POST__PAGE = 'GET__MY__POST__PAGE';
export const UNLIKE__FAIL = 'UNLIKE__FAIL';

export const create = (post) => {
  return {
    type: NEW__POST,
    payload: post,
  };
};

export const getListPost = (params) => {
  return async (dispatch) => {
    try {
      const value = await postApi.getPost(params);
      console.log('🚀 ~ file: postAction.js:31 ~ return ~ value:', value);
      dispatch({
        type: GET__LIST__POST,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: GET__POST__FAIL,
        message: 'Fail',
      });
    }
  };
};

export const getListPostFromPage2 = (params) => {
  return async (dispatch) => {
    try {
      const value = await postApi.getPost(params);
      console.log('🚀 ~ file: postAction.js:31 ~ return ~ value:', value);
      dispatch({
        type: GET__LIST__POST__PAGE,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: GET__POST__FAIL,
        message: 'Fail',
      });
    }
  };
};

export const like = (data) => {
  return {
    type: LIKE,
    payload: data,
  };
};

export const getMyPost = (params) => {
  return async (dispatch) => {
    try {
      const value = await postApi.getMyPost(params);
      dispatch({
        type: GET__MY__POST,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: GET__POST__FAIL,
        message: 'Fail',
      });
    }
  };
};

export const getMyPostFromPage2 = (params) => {
  return async (dispatch) => {
    try {
      const value = await postApi.getPost(params);
      dispatch({
        type: GET__MY__POST__PAGE,
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: GET__POST__FAIL,
        message: 'Fail',
      });
    }
  };
};

export const remove = (data) => {
  return { type: REMOVE__POST, payload: data };
};
