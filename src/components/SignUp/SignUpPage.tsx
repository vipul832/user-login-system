import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthStatus } from "../../store/feature/authSlicer";
import SignUpForm from "./SignUpForm";
import SideImage from "../SideImage/SideImage";

export default function SignUpPage() {
  const { Auth } = useSelector(getAuthStatus);
  if (Auth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="flex  justify-around items-center min-h-screen mx-6">
        <SignUpForm />
        <SideImage />
      </div>
    </>
  );
}

export function CheckAuth() {
  const { Auth } = useSelector(getAuthStatus);

  return Auth ? <Outlet /> : <Navigate to={"/signup"} />;
}
