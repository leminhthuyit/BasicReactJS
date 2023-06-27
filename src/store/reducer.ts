import { Actions, InitState } from "./utils/type";
import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB } from "./utils/constant";

// Reducer
const Reducer = (state: InitState, action: Actions) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload.job,
        content: action.payload.content,
      };
    default:
      break;
  }
};

export default Reducer;
