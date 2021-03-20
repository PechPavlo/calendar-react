/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initUsers = [
  {
    id: 'a6a136dc-fd2b-4073-a1ae-214589cc73e6',
    data: { isAdmin: true, name: 'test', password: '' },
  },
];

const defaultState = {
  title: 'Custom title',
  myEvents: [],
  users: [...initUsers],
  currentUser: initUsers[0],
  filteredByUser: 'All',
  isAuthorized: true,
  eventToAdd: null,
  eventToDelete: null,
  isEventsUpdated: false,
  isUsersUpdated: false,
  error: null,
};

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  reducer,
  defaultState,
  enhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
