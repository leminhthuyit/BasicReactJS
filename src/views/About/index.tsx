import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Auth from "../../pages/Auth";
import StyleAbout from "./styled";

const About = () => {
  return (
    <StyleAbout>
      <Header />
      <Navigation />
      <div className="title">
        <h2>Về chúng tôi</h2>
      </div>
      <div className="content"></div>
    </StyleAbout>
  );
};

export default Auth(About);
