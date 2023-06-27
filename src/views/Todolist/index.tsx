import { useContext, useState } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import StoreContext from "../../store/context";
import StyleTodolist from "./styled";
import { Button, TextField } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SetJob } from "../../store/actions";

const Todolist = () => {
  const store = useContext(StoreContext);
  const { state, dispatch } = store;
  const { job, content } = state;

  return (
    <StyleTodolist>
      <Header />
      <Navigation />
      <div className="title">
        <h2>Todolist App</h2>
      </div>
      <div className="content">
        <div className="form_custom">
          <Button variant="contained" startIcon={<NoteAddIcon />}>
            Delete
          </Button>
          <div className="input">
            <TextField
              label="Công việc"
              variant="standard"
              value={job}
              onChange={(e) =>
                dispatch(SetJob({ job: e.target.value, content: "" }))
              }
            />
            <TextField
              label="Nội dung"
              variant="standard"
              value={content}
              onChange={(e) =>
                dispatch(SetJob({ content: e.target.value, job: "" }))
              }
            />
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
            <tr>
              <td style={{ textAlign: "center" }}>1</td>
              <td style={{ textAlign: "center" }}>2</td>
              <td style={{ textAlign: "center" }}>3</td>
              <td style={{ textAlign: "center" }}>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyleTodolist>
  );
};

export default Todolist;
