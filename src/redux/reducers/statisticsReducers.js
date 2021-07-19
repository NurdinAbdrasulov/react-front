import { GET_STATISTICS_FAIL, GET_STATISTICS_REQUEST, GET_STATISTICS_SUCCESS } from "../constants/statisticsConstants";

export const getStatisticsReducer = ( state = {}, action ) => {
    switch (action.type) {
        case GET_STATISTICS_REQUEST:
            return { loadingStatistics: true };
        case GET_STATISTICS_SUCCESS:
            return {
                loadingStatistics: false,
                statistics: action.payload
            };
        case GET_STATISTICS_FAIL:
            return { loadingStatistics: false, errorStatistics: action.payload };
        default:
            return state;
    }
};