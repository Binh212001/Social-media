import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import auth from './auth/auth.reducer';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import post from './post/post.reducer';
import user from './user/user.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ auth, post, user });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
