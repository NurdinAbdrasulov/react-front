import { ACTIVITY_CREATE_FAIL, ACTIVITY_CREATE_REQUEST, ACTIVITY_CREATE_RESET, ACTIVITY_CREATE_SUCCESS, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS } from "../constants/activityConstants";

export const getAllActivitiesReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_ACTIVITIES_REQUEST:
            return { loadingAllActivities: true };
        case GET_ACTIVITIES_SUCCESS:
            return {
                loadingAllActivities: false,
                allActivitiesData: action.payload
             };
        case GET_ACTIVITIES_FAIL:
            return { loadingAllActivities: false, errorAllActivities: action.payload };
        default:
            return state;
    }
};

export const createActivityReducer = (state = {}, action) => {
    switch (action.type) {
      case ACTIVITY_CREATE_REQUEST:
        return { loading: true };
      case ACTIVITY_CREATE_SUCCESS:
        return { loading: false, success: true, product: action.payload };
      case ACTIVITY_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ACTIVITY_CREATE_RESET:
        return {};
      default:
        return state;
    }
};

export const getActivityReducer = (state = {}, action) => {
  switch(action.type) {
      case GET_ACTIVITY_REQUEST:
          return { loadingActivity: true };
      case GET_ACTIVITY_SUCCESS:
          return {
              loadingActivity: false,
              activityData: action.payload
           };
      case GET_ACTIVITY_FAIL:
          return { loadingActivity: false, errorActivity: action.payload };
      default:
          return state;
  }
};