const initialState = {
    countries: [],
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_COUNTRIES":
        return { ...state, countries: action.countries };  
      default:
        return state;
    }
  };
  
  export default countryReducer;