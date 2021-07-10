import Axios from 'axios';
import { GET_FOODS_FAIL, GET_FOODS_REQUEST, GET_FOODS_SUCCESS } from '../constants/foodConstants';

export const getAllFoods = () => async (dispatch, getState) => {
  dispatch({
      type: GET_FOODS_REQUEST
  });
  const {
      userSignin: { userInfo },
  } = getState();
  try {
      const { data } = await Axios.get('http://167.172.167.145:9090/food/getAll', {
          headers: {
              'Authorization': `Bearer ${userInfo.jwt}`
          }
      });
      dispatch({ type: GET_FOODS_SUCCESS, payload: data });
  } catch (error) {
      dispatch({ type: GET_FOODS_FAIL, payload: error.message });
  }
}