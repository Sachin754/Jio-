import { combineReducers } from "@reduxjs/toolkit";
import { kycDetails } from "./action";

const initialState = {
  bikeData: { quoteDetails: [], permanentAddress: {} },
  kycDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        bikeData: action.fieldKey === 'address_line_1' || 
        action.fieldKey === 'pin_code' ||
        action.fieldKey === 'city'||
        action.fieldKey === 'communicationAddress' ||
        action.fieldKey === 'pin_code_1' ||
        action.fieldKey === 'city_1' ?
          {
            ...state.bikeData,
            permanentAddress: { ...state.bikeData.permanentAddress, [action.fieldKey]: action.value, }
          } : {
            ...state.bikeData,
            [action.fieldKey]: action.value,
          },
      };
    case 'KYC_DETAILS':
      return {
        ...state,
        kycDetails: {
          ...state.kycDetails,
          [action.fieldKey]: action.value,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  insuranceDetails: reducer,
});

export default rootReducer;