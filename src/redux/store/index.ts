import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { sagaMiddleware };

export default store;
