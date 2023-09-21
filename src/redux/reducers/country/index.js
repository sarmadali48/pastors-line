import * as constants from '../../actions/constants';
const initialState = {
  contacts: {},
  contacts_ids: []
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.GET_COUNTRY_LIST_SUCCESS:
        return { ...state, contacts: action.countries?.contacts || {}, contacts_ids: action.countries?.contacts_ids || [] };  
        case constants.GET_COUNTRY_LIST_FAILURE:
        return { ...state,  }; 
      default:
        return state;
    }
  };
  
  export default countryReducer;