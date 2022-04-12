import { PLUS_ACTION, MINUS_ACTION } from "../action/actionType";
import PlusReducer from "./plusReducer";
import MinusReducer from "./minusReducer";

const initialState = {
  countNumbers: 20,
};

const CombinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ACTION: {
      PlusReducer(state);
    }

    case MINUS_ACTION: {
      MinusReducer(state);
    }

    default:
      return state;
  }
};

export default CombinedReducer;
