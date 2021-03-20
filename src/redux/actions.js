export const getUsersStarted = () => ({
  type: 'GET_USERS_STARTED',
});

export const getUsersSuccess = (users) => ({
  type: 'GET_USERS_SUCCESS',
  payload: users,
});

export const getUsersFailure = (error) => ({
  type: 'GET_USERS_FAILURE',
  payload: {
    error,
  },
});

export const getUsers = () => (dispatch) => {
  dispatch(getUsersStarted());

  fetch('http://158.101.166.74:8080/api/data/pavlo_pechenevskyi/users', {
    method: 'get',
  })
    .then((res) => res.json())
    .then((res) => res.map((elem) => ({ id: elem.id, data: JSON.parse(elem.data.replaceAll('\\"', '"')) })))
    .then((res) => dispatch(getUsersSuccess(res)))
    .catch((error) => dispatch(getUsersFailure(error.message)));
};

export const updateMyEvents = (events) => ({
  type: 'UPDATE_MY_EVENTS',
  payload: events,
});

export const updateCurrentUser = (user) => ({
  type: 'UPDATE_CURRENT_USER',
  payload: user,
});

export const updateUsers = (users) => ({
  type: 'UPDATE_USERS',
  payload: users,
});

export const updateIsAuthorized = (value) => ({
  type: 'UPDATE_IS_AUTHORIZED',
  payload: value,
});

export const updateEventToAdd = (value) => ({
  type: 'UPDATE_EVENT_TO_ADD',
  payload: value,
});

export const updateEventToDelete = (value) => ({
  type: 'UPDATE_EVENT_TO_DELETE',
  payload: value,
});

export const updateIsEventsUpdated = (value) => ({
  type: 'UPDATE_IS_EVENTS_UPDATED',
  payload: value,
});

export const updateFilteredBy = (user) => ({
  type: 'UPDATE_FILTERED_BY',
  payload: user,
});
