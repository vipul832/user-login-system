import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SideImage from "../SideImage/SideImage";
import { getAuthStatus } from "../../store/feature/authSlicer";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { Auth } = useSelector(getAuthStatus);
  if (Auth) {
    return <Navigate to="/home" />;
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
