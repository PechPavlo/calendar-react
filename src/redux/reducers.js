const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MY_EVENTS':
      return {
        ...state,
        myEvents: action.payload,
      };

    case 'UPDATE_FILTERED_BY':
      return {
        ...state,
        filteredByUser: action.payload,
      };

    case 'UPDATE_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'UPDATE_IS_AUTHORIZED':
      return {
        ...state,
        isAuthorized: action.payload,
      };

    case 'UPDATE_EVENT_TO_ADD':
      return {
        ...state,
        eventToAdd: action.payload,
      };

    case 'UPDATE_EVENT_TO_DELETE':
      return {
        ...state,
        eventToDelete: action.payload,
      };

    case 'UPDATE_IS_EVENTS_UPDATED':
      return {
        ...state,
        isEventsUpdated: action.payload,
      };

    case 'UPDATE_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
