import { useReducer, ReactNode } from "react";
import { InitState } from "./utils/type";
import StoreContext from "./context";
import Reducer from "./reducer";

// Init State
const initState: InitState = {
  job: "",
  content: "",
  jobs: [],
};

interface Props {
  children: ReactNode;
}

const StoreProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer<any>(Reducer, initState);
  const valueContext = { state, dispatch };

  return (
    <StoreContext.Provider value={valueContext}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
