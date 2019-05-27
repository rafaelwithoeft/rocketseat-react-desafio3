/**
 * Types
 */
export const ActionTypes = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

/**
 * Reducer
 */
const initialState = {
  show: false,
  latitude: null,
  longitude: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW:
      return { ...state, show: true, ...action.payload };
    case ActionTypes.HIDE:
      return {
        ...state,
        show: false,
        latitude: null,
        longitude: null,
      };
    default:
      return state;
  }
}

/**
 * Action creators.
 */

export const Creators = {
  showModal: (latitude, longitude) => ({
    type: ActionTypes.SHOW,
    payload: { latitude, longitude },
  }),

  hideModal: () => ({
    type: ActionTypes.HIDE,
  }),
};
