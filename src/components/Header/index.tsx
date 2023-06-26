import StyleHeader from "./styled";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <StyleHeader>
      <img src={logo} alt="logo" width={'50px'} height={'50px'}/>
      <h1>Basic ReactJS</h1>
    </StyleHeader>
  );
};

export default Header;
