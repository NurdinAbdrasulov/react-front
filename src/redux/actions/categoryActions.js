import Axios from 'axios';
import { CREATE_CATEGORY_FOOD_FAIL, CREATE_CATEGORY_FOOD_REQUEST, CREATE_CATEGORY_FOOD_SUCCESS, DELETE_CATEGORY_FOOD_FAIL, DELETE_CATEGORY_FOOD_REQUEST, DELETE_CATEGORY_FOOD_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FOOD_FAIL, GET_CATEGORY_FOOD_REQUEST, GET_CATEGORY_FOOD_SUCCESS, UPDATE_CATEGORY_FOOD_FAIL, UPDATE_CATEGORY_FOOD_REQUEST, UPDATE_CATEGORY_FOOD_SUCCESS } from '../constants/categoryConstants';

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

export const getCategoryFood = (id) => async (dispatch, getState) => {
    dispatch({
        type: GET_CATEGORY_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.get(`http://167.172.167.145:9090/food-categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        dispatch({ type: GET_CATEGORY_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CATEGORY_FOOD_FAIL, payload: error.message });
    }
};

export const createCategoryFood = (values) => async (dispatch, getState) => {
    dispatch({
        type: CREATE_CATEGORY_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.post(`http://167.172.167.145:9090/food-categories`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        console.log(data);
        dispatch({ type: CREATE_CATEGORY_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_CATEGORY_FOOD_FAIL, payload: error.message });
    }
};

export const updateCategoryFood = (values, id) => async (dispatch, getState) => {
    dispatch({
        type: UPDATE_CATEGORY_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.put(`http://167.172.167.145:9090/food-categories/${id}`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        dispatch({ type: UPDATE_CATEGORY_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_CATEGORY_FOOD_FAIL, payload: error.message });
    }
};

export const deleteCategoryFood = (id) => async (dispatch, getState) => {
    dispatch({
        type: DELETE_CATEGORY_FOOD_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const { data } = await Axios.delete(`http://167.172.167.145:9090/food-categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${userInfo.jwt}`
            }
        });
        console.log(data);
        dispatch({ type: DELETE_CATEGORY_FOOD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_CATEGORY_FOOD_FAIL, payload: error.message });
    }
};