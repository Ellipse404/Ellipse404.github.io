import { PLUS_ACTION, MINUS_ACTION } from "../action/actionType";
import PlusReducer from "./plusReducer";
import MinusReducer from "./minusReducer";

const initialState = {
  countNumbers: 20,
};

const CombinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ACTION:
      //  { PlusReducer(...state, state.countNumbers); }
      return {
        ...state,
        countNumbers: state.countNumbers + 1
      }

    case MINUS_ACTION: 
    // { MinusReducer(state); }
    return {
      ...state,
      countNumbers: state.countNumbers - 1
    }

    default:
      return state;
  }
};

export default CombinedReducer;
