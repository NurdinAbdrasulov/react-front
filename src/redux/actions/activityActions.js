import Axios from 'axios';
import { GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS } from '../constants/activityConstants';

export const getAllActivities = () => async (dispatch, getState) => {
  dispatch({
      type: GET_ACTIVITY_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://167.172.167.145:9090/activity/getAll', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_ACTIVITY_FAIL, payload: error.message });
  }
}