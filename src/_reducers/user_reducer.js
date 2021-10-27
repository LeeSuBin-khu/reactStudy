import { SET_USER, CLEAR_USER } from "../_actions/type.js";

const initialUserState = {
  userData: null,
  isLoading: true,
};

export default function (state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        ...state,
        userData: null,
        isLoading: false,
      };
    default:
      return state;
  }
}