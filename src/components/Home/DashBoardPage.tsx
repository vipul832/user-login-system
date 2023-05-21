import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/feature/userSlicer";
import { removeAuth } from "../../store/feature/authSlicer";

export default function DashBoardPage() {
  const currentUserData = useSelector(getCurrentUser);
  const dispatch=useDispatch();
  return (
    <>
      <div className=" min-h-screen">
        <div className="flex justify-between px-7 items-center bg-blue-500 text-white h-12">
          <div className="text-2xl font-bold">Logo</div>
          <div>
            <button className="rounded-md bg-blue-400 p-2" onClick={()=>dispatch(removeAuth())}>LogOut</button>
          </div>
        </div>
        <div className="shadow-lg translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] absolute rounded-2xl w-[80%] md:w-[50%] h-[50%] px-2">
          
          <div className="lg:flex md:justify-evenly block items-center w-full h-full p-1">
           <div className="flex justify-center flex-col items-center mr-2">
              <img
                src={currentUserData.file}
                alt="image"
                width="150px"
                height="100px"
                className="rounded-full border border-black"
              />
              <p className="pt-6 text-xl lg:text-3xl font-bold text-">
                {currentUserData.name}
              </p>
            </div>
            <hr className=" w-1 bg-blue-400 rounded-sm h-[80%] lg:block hidden" />
            <div className="ms-2">
              <h3 className="ms-4 font-bold text-center my-3 uppercase">
                Contact Details
              </h3>
              <div className=" text-center lg:text-start">
                <p className="whitespace-nowrap">Email: <span className="text-blue-500">{currentUserData.email}</span></p>
                <p className="whitespace-nowrap">Phone.No: <span className="font-semibold">{currentUserData.phoneNumber}</span></p>
              </div>
            </div>
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
