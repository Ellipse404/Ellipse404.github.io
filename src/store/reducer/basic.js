import { PLUS_ACTION, MINUS_ACTION } from "../action/actionType";

const initialState = {
  countNumbers: 20,
};

const Reducer = (state = initialState, action) => {
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

export default Reducer;
