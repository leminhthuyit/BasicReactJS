import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers";
import StoreProvider from "./store";

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
