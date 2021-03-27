import * as actionType from "./actionType";

export const login = (param) => async (dispatch) => {
  console.log("param: ", param);
  await dispatch({ type: actionType.LOGIN_SUCCESS, loginAction: param });
};
export const logOut = () => async (dispatch) => await dispatch({ type: actionType.LOGOUT_SUCCESS, loginAction: false });
