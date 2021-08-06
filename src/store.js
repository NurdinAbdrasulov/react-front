import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createActivityReducer, deleteActivityReducer, getActivityReducer, getAllActivitiesReducer, updateActivityReducer } from './redux/reducers/activityReducers';
import { createCategoryFoodReducer, deleteCategoryFoodReducer, getAllCategoriesReducer, getCategoryFoodReducer, updateCategoryFoodReducer } from './redux/reducers/categoryReducers';
import { createFoodReducer, deleteFoodReducer, getAllFoodsReducer, getFoodReducer, updateFoodReducer } from './redux/reducers/foodReducers';
import { getStatisticsReducer } from './redux/reducers/statisticsReducers';
import { getAllUsersReducer, getUserAgreementReducer, putUserAgreementReducer, userSigninReducer } from './redux/reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  }
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  allStatistics: getStatisticsReducer,
  allUsers: getAllUsersReducer,
  allFoods: getAllFoodsReducer,
  allActivities: getAllActivitiesReducer,
  createdActivity: createActivityReducer,
  activity: getActivityReducer,
  deletedActivity: deleteActivityReducer,
  updatedActivity: updateActivityReducer,
  food: getFoodReducer,
  updatedFood: updateFoodReducer,
  deletedFood: deleteFoodReducer,
  createdFood: createFoodReducer,
  allCategories: getAllCategoriesReducer,
  categoryFood: getCategoryFoodReducer,
  updatedCategoryFood: updateCategoryFoodReducer,
  deletedCategoryFood: deleteCategoryFoodReducer,
  createdCategoryFood: createCategoryFoodReducer,
  userAgreement: getUserAgreementReducer,
  updatedUserAgreement: putUserAgreementReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;