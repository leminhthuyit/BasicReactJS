import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import StyleLayout from "./styled";

const LayoutMain = () => {
  return (
    <StyleLayout>
      <Header />
      <Navigation />
      <Outlet />
    </StyleLayout>
  );
};

export default LayoutMain;
