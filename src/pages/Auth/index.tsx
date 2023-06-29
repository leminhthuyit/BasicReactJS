import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import TestComponent from "../../components/TestComponent";

const Auth = (Component: any) => {
  return function () {
    const token = window.localStorage.getItem("token") ?? null;
    if (token) {
      return <Component />;
    } else {
      return <Navigate to="/login" />;
      // return <TestComponent />;
    }
  };
};

export default Auth;
