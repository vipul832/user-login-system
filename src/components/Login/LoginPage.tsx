import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getAuthStatus } from "../../store/feature/authSlicer";
import LoginForm from "./LoginForm";
import SideImage from "../SideImage/SideImage";

export default function LoginPage() {
  const { Auth } = useSelector(getAuthStatus);
  if (Auth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="flex  justify-around items-center min-h-screen mx-6">
        <LoginForm />
        <SideImage />
      </div>
    </>
  );
}
