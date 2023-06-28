import { useContext, useRef, useState } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import StoreContext from "../../store/context";
import StyleTodolist from "./styled";
import { Button, IconButton, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SetJob, AddJob, EditJob } from "../../store/actions";
import { InitState, Jod } from "../../store/utils/type";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import SaveIcon from "@mui/icons-material/Save";

interface Context {
  state: InitState;
  dispatch: (e?: any) => void;
}

const Todolist = () => {
  const store = useContext<Context>(StoreContext);
  const { state, dispatch } = store;
  const { job, content, jobs } = state;

  const inputRef = useRef<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [idJob, setIdJob] = useState<number | null>(null);

  const handleAddJob = () => {
    dispatch(AddJob({ job, content }));
    dispatch(SetJob({ job: "", content: "" }));
    inputRef.current.focus();
  };

  const handleEditJob = (data: Jod, index: number) => {
    dispatch(SetJob({ ...data }));
    setIsEdit(true);
    setIdJob(index);
  };

  const handleSaveEdit = () => {
    console.log("idJob", idJob);
    if (!idJob && idJob !== 0) {
      alert("Không tìm thấy ID công việc");
      return;
    }

    dispatch(EditJob({ id: idJob, job, content }));
    dispatch(SetJob({ job: "", content: "" }));
    setIsEdit(false);
    setIdJob(null);
  };

  const handleClearEdit = () => {
    dispatch(SetJob({ job: "", content: "" }));
    setIsEdit(false);
    setIdJob(null);
  };

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
                dispatch(SetJob({ job: e.target.value, content }))
              }
              sx={{ width: "30%" }}
            />
            <TextField
              label="Nội dung"
              variant="standard"
              value={content}
              onChange={(e) =>
                dispatch(SetJob({ content: e.target.value, job }))
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

export default Todolist;
