import * as actionType from "./actionType";

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        User: { success: true, ...action.loginAction },
      };

    case actionType.LOGOUT_SUCCESS:
      return {
        ...state,
        User: {},
      };
    default:
      return state;
  }
};

export default loginReducer;
