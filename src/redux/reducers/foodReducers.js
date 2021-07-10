import { GET_FOODS_FAIL, GET_FOODS_REQUEST, GET_FOODS_SUCCESS } from "../constants/foodConstants";

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