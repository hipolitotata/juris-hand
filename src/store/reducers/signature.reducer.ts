import { HANDLE_SIGNATURE, HANDLE_MODAL } from '../actions/action-types';

const initialState = {
    signature: false,
    isVisible: false
};

export const signatureReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HANDLE_SIGNATURE:
      return {
        ...state,
        signature: action.payload
      };

      case HANDLE_MODAL:
        return {
          ...state,
          isVisible: !state.isVisible
        };
    default:
      return state;
  }
}