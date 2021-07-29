import { CREATE_FOOD_FAIL, CREATE_FOOD_REQUEST, CREATE_FOOD_RESET, CREATE_FOOD_SUCCESS, DELETE_FOOD_FAIL, DELETE_FOOD_REQUEST, DELETE_FOOD_RESET, DELETE_FOOD_SUCCESS, GET_FOODS_FAIL, GET_FOODS_REQUEST, GET_FOODS_SUCCESS, GET_FOOD_FAIL, GET_FOOD_REQUEST, GET_FOOD_SUCCESS, UPDATE_FOOD_FAIL, UPDATE_FOOD_REQUEST, UPDATE_FOOD_RESET, UPDATE_FOOD_SUCCESS } from "../constants/foodConstants";

export const getAllFoodsReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_FOODS_REQUEST:
            return { loadingAllFoods: true };
        case GET_FOODS_SUCCESS:
            return {
                loadingAllFoods: false,
                allFoodsData: action.payload
             };
        case GET_FOODS_FAIL:
            return { loadingAllFoods: false, errorAllFoods: action.payload };
        default:
            return state;
    }
};

export const getFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_FOOD_REQUEST:
            return { loadingFood: true };
        case GET_FOOD_SUCCESS:
            return {
                loadingFood: false,
                foodData: action.payload
             };
        case GET_FOOD_FAIL:
            return { loadingFood: false, errorFood: action.payload };
        default:
            return state;
    }
};

export const createFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_FOOD_REQUEST:
            return { loadingCreateFood: true };
        case CREATE_FOOD_SUCCESS:
            return {
                loadingCreateFood: false,
                createdFoodData: action.payload
             };
        case CREATE_FOOD_FAIL:
            return { loadingCreateFood: false, errorCreatedFood: action.payload };
        case CREATE_FOOD_RESET:
            return {};
        default:
            return state;
    }
};

export const updateFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_FOOD_REQUEST:
            return { loadingUpdateFood: true };
        case UPDATE_FOOD_SUCCESS:
            return {
                loadingUpdateFood: false,
                updatedfoodData: action.payload
             };
        case UPDATE_FOOD_FAIL:
            return { loadingUpdateFood: false, errorUpdatedFood: action.payload };
        case UPDATE_FOOD_RESET:
            return {};
        default:
            return state;
    }
};

export const deleteFoodReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_FOOD_REQUEST:
            return { loadingDeleteFood: true };
        case DELETE_FOOD_SUCCESS:
            return {
                loadingDeleteFood: false,
                deletedfoodData: action.payload
             };
        case DELETE_FOOD_FAIL:
            return { loadingDeleteFood: false, errorDeletedFood: action.payload };
        case DELETE_FOOD_RESET:
            return {};
        default:
            return state;
    }
};