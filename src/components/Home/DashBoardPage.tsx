import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/feature/userSlicer";

export default function DashBoardPage() {
  const currentUserData = useSelector(getCurrentUser);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-green-500 w-1/2 h-1/2 absolute rounded-2xl">
          <h1>DashBoard Page</h1>
          <div className="flex justify-center mt-4">
            <img
              src={currentUserData.file}
              alt=""
              width="100px"
              height="100px"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
