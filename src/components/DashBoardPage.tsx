import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAuth } from "../store/feature/authSlicer";

export default function DashBoardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col">
      <div>Welcome to dashboard</div>
      <button
        className="border border-black p-2 bg-blue-400 rounded w-1/4"
        onClick={() => {
          dispatch(removeAuth());
          navigate("/signup");
        }}
      >
        Logout
      </button>
    </div>
  );
}
