import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAuth } from "../store/feature/authSlicer";

export default function DashBoardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-green-500 w-1/2 h-1/2 absolute rounded-2xl">
          <div className="flex justify-center mt-4">
            <img
              src={state?.file}
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
