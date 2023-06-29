import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers";
import StoreProvider from "./store";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </Provider>
  );
}

export default App;
