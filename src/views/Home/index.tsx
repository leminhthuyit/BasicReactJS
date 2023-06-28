import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Auth from "../../pages/Auth";
import StyledHome from "./styles/HomeStyled";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Navigation />
      <div className="content">
        <h1>App Basic ReactJS</h1>
      </div>
    </StyledHome>
  );
};

export default Auth(Home);
