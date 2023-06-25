// import { Link } from "react-router-dom";
import StyledHome from "./styles/HomeStyled";

const listNav = [
  { id: 1, label: "Trang chủ", path: "#" },
  { id: 2, label: "Todolist", path: "#" },
  { id: 3, label: "Về chúng tôi", path: "#" },
];

const Home = () => {
  return (
    <StyledHome>
      <div className="title_home">
        <h1>Basic ReactJS</h1>
      </div>
      
      <div className="nav_home">
        <ul>
          {listNav.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </div>
    </StyledHome>
  );
};

export default Home;
