import Axios from 'axios';
import { CREATE_ACTIVITY_FAIL, CREATE_ACTIVITY_REQUEST, CREATE_ACTIVITY_SUCCESS, DELETE_ACTIVITY_FAIL, DELETE_ACTIVITY_REQUEST, DELETE_ACTIVITY_SUCCESS, GET_ACTIVITIES_FAIL, GET_ACTIVITIES_REQUEST, GET_ACTIVITIES_SUCCESS, GET_ACTIVITY_FAIL, GET_ACTIVITY_REQUEST, GET_ACTIVITY_SUCCESS, UPDATE_ACTIVITY_FAIL, UPDATE_ACTIVITY_REQUEST, UPDATE_ACTIVITY_SUCCESS } from '../constants/activityConstants';

export const getAllActivities = () => async (dispatch, getState) => {
  dispatch({
      type: GET_ACTIVITIES_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://localhost:9090/open/statistics/', {
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
    dispatch({ type: CREATE_ACTIVITY_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    try {
      const { data } = await Axios.post(
        'http://localhost:9090/open/statistics/',
        bodyFormData,
        {
            'Content-Type': 'multipart/form-data',
            headers: { Authorization: `Bearer ${userInfo.jwt}` },
        }
      );
      console.log(data);
      dispatch({
        type: CREATE_ACTIVITY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CREATE_ACTIVITY_FAIL, payload: message });
    }
};

export const updateActivity = (bodyFormData, activityId) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_ACTIVITY_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(
      `http://localhost:9090/open/statistics//${activityId}`,
      bodyFormData,
      {
          'Content-Type': 'multipart/form-data',
          headers: { Authorization: `Bearer ${userInfo.jwt}` },
      }
    );
    dispatch({
      type: UPDATE_ACTIVITY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: UPDATE_ACTIVITY_FAIL, payload: error.message });
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
      const { data } = await Axios.get(`http://localhost:9090/open/statistics//${id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_ACTIVITY_FAIL, payload: error.message });
  }
};

export const deleteActivity = (id) => async (dispatch, getState) => {
  dispatch({
      type: DELETE_ACTIVITY_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.delete(`http://localhost:9090/open/statistics//${id}`, {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: DELETE_ACTIVITY_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: DELETE_ACTIVITY_FAIL, payload: error.message });
  }
};
