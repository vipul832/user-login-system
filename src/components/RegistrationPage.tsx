import UserForm from "./UserForm";
import { useSelector } from "react-redux";
import { getAuthStatus } from "../store/feature/authSlicer";
import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";

export default function RegistrationPage() {
  return (
    <>
      <div className="flex  justify-around items-center min-h-screen mx-6">
        <UserForm />
        <div className="hidden sm:block">
          <img src="./public/photo1.png" alt="" />
        </div>
      </div>
    </>
  );
}

export function CheckAuth() {
  const { Auth } = useSelector(getAuthStatus);
  return Auth ? <Outlet /> : <Navigate to={"/signup"} />;
}
