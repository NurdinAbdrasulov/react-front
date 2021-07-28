import { CREATE_CATEGORY_FOOD_FAIL, CREATE_CATEGORY_FOOD_REQUEST, CREATE_CATEGORY_FOOD_RESET, CREATE_CATEGORY_FOOD_SUCCESS, DELETE_CATEGORY_FOOD_FAIL, DELETE_CATEGORY_FOOD_REQUEST, DELETE_CATEGORY_FOOD_RESET, DELETE_CATEGORY_FOOD_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FOOD_FAIL, GET_CATEGORY_FOOD_REQUEST, GET_CATEGORY_FOOD_SUCCESS, UPDATE_CATEGORY_FOOD_FAIL, UPDATE_CATEGORY_FOOD_REQUEST, UPDATE_CATEGORY_FOOD_RESET, UPDATE_CATEGORY_FOOD_SUCCESS } from "../constants/categoryConstants";

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

export const getCategoryFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_CATEGORY_FOOD_REQUEST:
            return { loadingCategoryFood: true };
        case GET_CATEGORY_FOOD_SUCCESS:
            return {
                loadingCategoryFood: false,
                categoryFoodData: action.payload
             };
        case GET_CATEGORY_FOOD_FAIL:
            return { loadingCategoryFood: false, errorCategoryFood: action.payload };
        default:
            return state;
    }
};

export const createCategoryFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_CATEGORY_FOOD_REQUEST:
            return { loadingCreateCategoryFood: true };
        case CREATE_CATEGORY_FOOD_SUCCESS:
            return {
                loadingCreateCategoryFood: false,
                createdCategoryFoodData: action.payload
             };
        case CREATE_CATEGORY_FOOD_FAIL:
            return { loadingCreateCategoryFood: false, errorCreatedCategoryFood: action.payload };
        case CREATE_CATEGORY_FOOD_RESET:
            return {};
        default:
            return state;
    }
};

export const updateCategoryFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_CATEGORY_FOOD_REQUEST:
            return { loadingUpdateCategoryFood: true };
        case UPDATE_CATEGORY_FOOD_SUCCESS:
            return {
                loadingUpdateCategoryFood: false,
                updatedCategoryFoodData: action.payload
             };
        case UPDATE_CATEGORY_FOOD_FAIL:
            return { loadingUpdateCategoryFood: false, errorUpdatedCategoryFood: action.payload };
        case UPDATE_CATEGORY_FOOD_RESET:
            return {};
        default:
            return state;
    }
};

export const deleteCategoryFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_CATEGORY_FOOD_REQUEST:
            return { loadingDeleteCategoryFood: true };
        case DELETE_CATEGORY_FOOD_SUCCESS:
            return {
                loadingDeleteCategoryFood: false,
                deletedCategoryFoodData: action.payload
             };
        case DELETE_CATEGORY_FOOD_FAIL:
            return { loadingDeleteCategoryFood: false, errorDeletedCategoryFood: action.payload };
        case DELETE_CATEGORY_FOOD_RESET:
            return {};
        default:
            return state;
    }
};