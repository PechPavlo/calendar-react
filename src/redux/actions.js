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
