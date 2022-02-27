const types = {
  MODAL_HIDE: "MODAL_HIDE",
  MODAL_SHOW: "MODAL_SHOW",
};

export const initialState = {
  error: {},
  modal: {
    show: false,
  },
};

export const showModal = () => ({
  type: types.MODAL_SHOW,
  payload: {
    show: true,
  },
});

export const hideModal = () => ({
  type: types.MODAL_HIDE,
  payload: {
    show: false,
  },
});

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_SHOW:
    case types.MODAL_HIDE:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
