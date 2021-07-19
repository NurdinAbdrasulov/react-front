import axios from 'axios';
import { GET_STATISTICS_FAIL, GET_STATISTICS_REQUEST, GET_STATISTICS_SUCCESS } from '../constants/statisticsConstants';

export const getStatistics = () => async (dispatch, getState) => {
    dispatch({
        type: GET_STATISTICS_REQUEST
    });
    const {
        userSignin: { userInfo },
    } = getState();
    try {
        const data = await axios.all([
            axios.get('http://167.172.167.145:9090/statistics/age', {
                headers: {
                    'Authorization': `Bearer ${userInfo.jwt}`
                }
            }),
            axios.get('http://167.172.167.145:9090/statistics/diabetes', {
                headers: {
                    'Authorization': `Bearer ${userInfo.jwt}`
                }
            }),
            axios.get('http://167.172.167.145:9090/statistics/genders', {
                headers: {
                    'Authorization': `Bearer ${userInfo.jwt}`
                }
            })
        ]).then(axios.spread((...responses) => responses));
        dispatch({ type: GET_STATISTICS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_STATISTICS_FAIL, payload: error.message });
    }
}