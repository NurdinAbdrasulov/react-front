import Axios from 'axios';
import { CREATE_FOOD_FAIL, CREATE_FOOD_REQUEST, CREATE_FOOD_SUCCESS, DELETE_FOOD_FAIL, DELETE_FOOD_REQUEST, DELETE_FOOD_SUCCESS, GET_FOODS_FAIL, GET_FOODS_REQUEST, GET_FOODS_SUCCESS, GET_FOOD_FAIL, GET_FOOD_REQUEST, GET_FOOD_SUCCESS, UPDATE_FOOD_FAIL, UPDATE_FOOD_REQUEST, UPDATE_FOOD_SUCCESS } from '../constants/foodConstants';

export const getAllFoods = () => async (dispatch, getState) => {
  dispatch({
      type: GET_FOODS_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://localhost:9090/ap/disease', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_FOODS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_FOODS_FAIL, payload: error.message });
  }
};

export const getFood = (id) => async (dispatch, getState) => {
    dispatch({
        type: GET_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get(`localhost:9090/ap/disease/${id}`, {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        dispatch({ type: GET_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_FOOD_FAIL, payload: error.message });
    }
};

export const createFood = (values) => async (dispatch, getState) => {
    dispatch({
        type: CREATE_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.post(`localhost:9090/ap/disease`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        console.log(data);
        dispatch({ type: CREATE_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_FOOD_FAIL, payload: error.message });
    }
};

export const updateFood = (values, id) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(`localhost:9090/ap/disease/${id}`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        dispatch({ type: UPDATE_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_FOOD_FAIL, payload: error.message });
    }
};

export const deleteFood = (id) => async (dispatch, getState) => {
    dispatch({
        type: DELETE_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.delete(`localhost:9090/ap/disease/${id}`, {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        console.log(data);
        dispatch({ type: DELETE_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_FOOD_FAIL, payload: error.message });
    }
};
