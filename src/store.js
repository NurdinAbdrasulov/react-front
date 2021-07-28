import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getActivityReducer, getAllActivitiesReducer } from './redux/reducers/activityReducers';
import { getAllCategoriesReducer } from './redux/reducers/categoryReducers';
import { createFoodReducer, deleteFoodReducer, getAllFoodsReducer, getFoodReducer, updateFoodReducer } from './redux/reducers/foodReducers';
import { getStatisticsReducer } from './redux/reducers/statisticsReducers';
import { getAllUsersReducer, userSigninReducer } from './redux/reducers/userReducers';

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
  activity: getActivityReducer,
  food: getFoodReducer,
  allCategories: getAllCategoriesReducer,
  updatedFood: updateFoodReducer,
  deletedFood: deleteFoodReducer,
  createdFood: createFoodReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;