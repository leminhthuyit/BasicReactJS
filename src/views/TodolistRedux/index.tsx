import ClearIcon from "@mui/icons-material/Clear";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import SaveIcon from "@mui/icons-material/Save";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Auth from "../../pages/Auth";
import { InitState, Jod } from "../../store/utils/type";
import StyleTodolist from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  setJobAction,
  addJobAction,
  editJobAction,
  deleteJobAction,
  fetchTodos,
} from "../../redux/slice/todolistSlice";
import { InitialState } from "../../redux/utils/type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/reduxHooks";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { helloSaga } from "../../redux/sagas";
import { sagaMiddleware } from "../../redux/store";

const TodolistRedux = () => {
  const state = useAppSelector((state) => state.todolist);
  const todos = useAppSelector((state) => state.todolist.todos);

  const { job, content, jobs } = state;
  const dispatch = useAppDispatch();

  const inputRef = useRef<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    // dispatch(fetchTodos());
    sagaMiddleware.run(helloSaga);
  }, []);

  const handleAddJob = () => {
    dispatch(addJobAction({ job, content }));
    dispatch(setJobAction({ job: "", content: "" }));
    inputRef.current.focus();
  };

  const handleEditJob = (data: Jod, index: number) => {};

  const handleSaveEdit = () => {};

  const handleClearEdit = () => {};

  return (
    <StyleTodolist>
      <Header />
      <Navigation />
      <div className="title">
        <h2>Todolist App</h2>
      </div>
      <div className="content">
        <div className="form_custom">
          <Button
            variant="contained"
            startIcon={<NoteAddIcon />}
            onClick={handleAddJob}
          >
            Add
          </Button>
          <div className="input_form">
            <TextField
              inputRef={inputRef}
              label="Công việc"
              variant="standard"
              value={job}
              onChange={(e) =>
                dispatch(setJobAction({ job: e.target.value, content }))
              }
              sx={{ width: "30%" }}
            />
            <TextField
              label="Nội dung"
              variant="standard"
              value={content}
              onChange={(e) =>
                dispatch(setJobAction({ content: e.target.value, job }))
              }
              sx={{ ml: 5, width: "40%" }}
            />

            {isEdit && (
              <div className="action_edit">
                <IconButton onClick={handleSaveEdit}>
                  <SaveIcon />
                </IconButton>

                <IconButton>
                  <ClearIcon onClick={handleClearEdit} />
                </IconButton>
              </div>
            )}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style={{ width: "10%", textAlign: "center" }}>STT</th>
              <th style={{ width: "40%", textAlign: "center" }}>Công việc</th>
              <th style={{ width: "40%", textAlign: "center" }}>Nội dung</th>
              <th style={{ width: "10%", textAlign: "center" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{item.job}</td>
                <td style={{ textAlign: "center" }}>{item.content}</td>
                <td style={{ textAlign: "center" }}>
                  <IconButton
                    disabled={isEdit}
                    onClick={() =>
                      handleEditJob(
                        {
                          job: item.job,
                          content: item.content,
                        },
                        index
                      )
                    }
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton disabled={isEdit}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyleTodolist>
  );
};

export default Auth(TodolistRedux);
