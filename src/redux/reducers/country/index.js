import * as constants from '../../actions/constants';
const initialState = {
    countries: [],
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.GET_COUNTRY_LIST_SUCCESS:
        return { ...state, countries: action.countries };  
        case constants.GET_COUNTRY_LIST_FAILURE:
        return { ...state,  }; 
      default:
        return state;
    }
  };
  
  export default countryReducer;