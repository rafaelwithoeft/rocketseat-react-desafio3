/**
 * Types
 */
export const ActionTypes = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
  REMOVE_REQUEST: 'users/REMOVE_REQUEST',
};

/**
 * Reducer
 */
const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case ActionTypes.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case ActionTypes.REMOVE_REQUEST:
      return { ...state, data: state.data.filter(user => user.id !== action.payload.user) };
    default:
      return state;
  }
}

/**
 * Action creators.
 */

export const Creators = {
  addUserRequest: (user, latitude, longitude) => ({
    type: ActionTypes.ADD_REQUEST,
    payload: { user, latitude, longitude },
  }),

  addUserSuccess: data => ({
    type: ActionTypes.ADD_SUCCESS,
    payload: { data },
  }),

  addUserFailure: error => ({
    type: ActionTypes.ADD_FAILURE,
    payload: { error },
  }),

  removeUserRequest: user => ({
    type: ActionTypes.REMOVE_REQUEST,
    payload: { user },
  }),
};
