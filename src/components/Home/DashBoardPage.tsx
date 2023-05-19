import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/feature/userSlicer";

export default function DashBoardPage() {
  const currentUserData = useSelector(getCurrentUser);

  return (
    <>
      <div className=" min-h-screen">
        <div className="flex justify-between px-7 items-center bg-blue-500 text-white h-12">
          <div className="text-2xl font-bold">Logo</div>
          <div>
            <button className="rounded-md bg-blue-400 p-2">LogOut</button>
          </div>
        </div>
        <div className="shadow-lg translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] absolute rounded-2xl w-[80%] sm:w-[40%] h-[40%]">
          <div className="flex justify-center items-center">
            <div>left</div>
            <hr className="bg-blue-400 w-full h-full" />
            <div>right</div>
          </div>

          {/* <div className="shadow-lg translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] absolute rounded-2xl w-[80%] sm:w-[40%] flex flex-col justify-start">
            <div className="flex justify-center flex-col items-center">
              <img
                src={currentUserData.file}
                alt="image"
                width="200px"
                height="100px"
                className="rounded-full border border-black"
              />
              <p className="pt-6 text-5xl font-bold text-">
                {currentUserData.name}
              </p>
            </div>
            <div>
              <h3 className="ms-4 font-semibold text-center sm:text-start my-3 uppercase">
                Contact Details
              </h3>
              <div className="sm:flex sm:justify-around text-center block">
                <p className="text-blue-500">{currentUserData.email}</p>
                <p className="font-semibold">{currentUserData.phoneNumber}</p>
              </div>
            </div>
            <div className="pb-4">
              <h3 className="ms-4 font-semibold text-center sm:text-start my-3 uppercase">
                Bio
              </h3>
              <div className="text-center px-7 text-[20px] text-gray-500">
                <span className="text-4xl text-black">"</span>Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Voluptatum, corporis.
                <span className="text-4xl text-black">"</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
