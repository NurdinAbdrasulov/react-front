import Axios from 'axios';
import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from '../constants/categoryConstants';

export const getAllCategories = () => async (dispatch, getState) => {
    dispatch({
        type: GET_CATEGORIES_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get('http://167.172.167.145:9090/food-categories', {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CATEGORIES_FAIL, payload: error.message });
    }
};