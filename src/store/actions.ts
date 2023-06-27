import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB } from "./utils/constant";
import { PayloadAction } from "./utils/type";

const SetJob = (payload: PayloadAction) => ({ type: SET_JOB, payload });
const AddJob = (payload: PayloadAction) => ({ type: ADD_JOB, payload });
const EditJob = (payload: PayloadAction) => ({ type: EDIT_JOB, payload });
const DeleteJob = (payload: PayloadAction) => ({ type: DELETE_JOB, payload });

export { SetJob, AddJob, EditJob, DeleteJob };
