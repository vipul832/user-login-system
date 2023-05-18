import SideImage from "../SideImage/SideImage";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="flex  justify-around items-center min-h-screen mx-6">
        <LoginForm />
        <SideImage />
      </div>
    </>
  );
}
