import Axios from 'axios';
import { ACTIVITY_CREATE_FAIL, ACTIVITY_CREATE_REQUEST, ACTIVITY_CREATE_SUCCESS, ACTIVITY_UPDATE_FAIL, ACTIVITY_UPDATE_REQUEST, ACTIVITY_UPDATE_SUCCESS, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS } from '../constants/activityConstants';

export const getAllActivities = () => async (dispatch, getState) => {
  dispatch({
      type: GET_ACTIVITIES_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://167.172.167.145:9090/activities', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_ACTIVITIES_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_ACTIVITIES_FAIL, payload: error.message });
  }
}

export const createActivity = (bodyFormData) => async (dispatch, getState) => {
    dispatch({ type: ACTIVITY_CREATE_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        'http://167.172.167.145:9090/activities',
        bodyFormData,
        {
            'Content-Type': 'multipart/form-data',
            headers: { Authorization: `Bearer ${userInfo.jwt}` },
        }
      );
      console.log(data);
      dispatch({
        type: ACTIVITY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ACTIVITY_CREATE_FAIL, payload: message });
    }
};

export const updateActivity = (bodyFormData, activityId) => async (dispatch, getState) => {
  dispatch({ type: ACTIVITY_UPDATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `http://167.172.167.145:9090/activities/${activityId}`,
      bodyFormData,
      {
          'Content-Type': 'multipart/form-data',
          headers: { Authorization: `Bearer ${userInfo.jwt}` },
      }
    );
    console.log(data);
    dispatch({
      type: ACTIVITY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACTIVITY_UPDATE_FAIL, payload: message });
  }
};

export const getActivity = (id) => async (dispatch, getState) => {
  dispatch({
      type: GET_ACTIVITY_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get(`http://167.172.167.145:9090/activities/${id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_ACTIVITY_FAIL, payload: error.message });
  }
};