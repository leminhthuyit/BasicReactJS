import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import StyleTodolist from "./styled";

const Todolist = () => {
  return (
    <StyleTodolist>
      <Header />
      <Navigation />
      <div className="title">
        <h2>Todolist App</h2>
      </div>
      <div className="content"></div>
    </StyleTodolist>
  );
};

export default Todolist;
