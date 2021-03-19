/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
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
};

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
