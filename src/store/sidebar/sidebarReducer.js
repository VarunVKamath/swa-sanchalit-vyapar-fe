import { actionTypes } from "./sidebarActions";

const initialState = {
  isOpen: false,
};

export default function alert(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SHOW_SIDEBAR:
      return payload;
    case actionTypes.HIDE_SIDEBAR:
      return payload;
    default:
      return state;
  }
}
