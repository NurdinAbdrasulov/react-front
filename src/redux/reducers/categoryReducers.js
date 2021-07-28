import { GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "../constants/categoryConstants";

export const getAllCategoriesReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_CATEGORIES_REQUEST:
            return { loadingAllCategories: true };
        case GET_CATEGORIES_SUCCESS:
            return {
                loadingAllCategories: false,
                allCategoriesData: action.payload
             };
        case GET_CATEGORIES_FAIL:
            return { loadingAllCategories: false, errorAllCategories: action.payload };
        default:
            return state;
    }
};