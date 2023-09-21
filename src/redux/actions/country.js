import * as constants from './constants';
import axios from 'axios';

export const getCountriesList = (data) => {
    return async (dispatch) => {
      try {
        let response;
        if(data.countryId){
          response = await axios.get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=${data.companyId}&page=${data.page}&countryId=${data.countryId}&noGroupDuplicates=${data.noGroupDuplicates}`);
        }
        else{
          response = await axios.get(`https://api.dev.pastorsline.com/api/contacts.json?companyId=${data.companyId}&page=${data.page}&noGroupDuplicates=${data.noGroupDuplicates}`);
        }
        dispatch({ type: constants.GET_COUNTRY_LIST_SUCCESS, countries: response.data });
      } catch (error) {
        dispatch({ type: constants.GET_COUNTRY_LIST_SUCCESS, payload: error.response.data });
      }
    };
};
