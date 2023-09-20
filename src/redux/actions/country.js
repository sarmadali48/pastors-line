import * as constants from './constants';
import axios from 'axios';

export const getCountriesList = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get("https://api.dev.pastorsline.com/api/contacts.json");
        dispatch({ type: constants.GET_COUNTRY_LIST_SUCCESS, countries: response.data });
      } catch (error) {
        dispatch({ type: constants.GET_COUNTRY_LIST_SUCCESS, payload: error.response.data });
      }
    };
  };