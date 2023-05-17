import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { store } from "../src/store/store";
import RegistrationPage, { CheckAuth } from "./components/RegistrationPage";
import DashBoardPage from "./components/DashBoardPage";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CheckAuth />}>
        <Route index element={<DashBoardPage />} />
      </Route>
      {/* <Route path="/" element={<DashBoardPage />} /> */}
      <Route path="/signup" element={<RegistrationPage />} />
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
