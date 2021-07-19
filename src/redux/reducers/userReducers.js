import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
};

export const getAllUsersReducer = (state = {}, action) => {
  switch(action.type) {
      case GET_USERS_REQUEST:
          return { loadingAllUsers: true };
      case GET_USERS_SUCCESS:
          return {
              loadingAllUsers: false,
              allUsersData: action.payload.content
           };
      case GET_USERS_FAIL:
          return { loadingAllUsers: false, errorAllUsers: action.payload };
      default:
          return state;
  }
};