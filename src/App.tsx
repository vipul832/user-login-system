import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "../src/store/store";
import SignUpPage, { CheckAuth } from "./components/SignUp/SignUpPage";
import DashBoardPage from "./components/Home/DashBoardPage";
import LoginPage from "./components/Login/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CheckAuth />}>
        <Route index element={<DashBoardPage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
