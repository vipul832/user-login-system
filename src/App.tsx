import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import RegistrationPage, {
  CheckAuth,
} from "./components/SignUp/RegistrationPage";
import DashBoardPage from "./components/Home/DashBoardPage";
import LoginPage from "./components/Login/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<CheckAuth />}>
        <Route path="/home" element={<CheckAuth />}>
          <Route index element={<DashBoardPage />} />
        </Route>
      </Route> */}
      <Route path="/signup" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<DashBoardPage />} />
    </>
  )
);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
