import { Link } from "react-router-dom";
import { listNav } from "../../constants/navigation";
import StyleNav from "./styled";

const Navigation = () => {
  return (
    <StyleNav>
      <ul>
        {listNav.map((item) => (
          <li key={item.id}>
            <Link to={item.path} >{item.label}</Link>
          </li>
        ))}
      </ul>
    </StyleNav>
  );
};

export default Navigation;
