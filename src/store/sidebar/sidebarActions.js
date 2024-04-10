export const actionTypes = {
  SHOW_SIDEBAR: "SHOW_SIDEBAR",
  HIDE_SIDEBAR: "HIDE_SIDEBAR",
};

export function showSidebar() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SHOW_SIDEBAR,
      payload: {
        isOpen: true,
      },
    });
  };
}
export function hideSidebar() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.HIDE_SIDEBAR,
      payload: {
        isOpen: false,
      },
    });
  };
}
