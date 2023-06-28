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

    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, { ...action.payload }],
      };

    case EDIT_JOB:
      const { id, job, content } = action.payload;
      const newJobs = [...state.jobs];
      newJobs.splice(id, 1, { job, content });
      return {
        ...state,
        jobs: newJobs,
      };
    default:
      throw new Error("Lỗi Action");
  }
};

export default Reducer;
