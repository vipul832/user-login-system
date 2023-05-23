import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import bcrypt from "bcryptjs";
import { UserInfo } from "../../utils/type";
import { addAuth } from "../../store/feature/authSlicer";
import { setUser } from "../../store/feature/userSlicer";
import InputTextField from "../InputTag/InputTextField";
import { LoginSchema } from "../../validation/LoginSchema";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      const useData = localStorage.getItem("userData");
      if (useData) {
        const userObject = JSON.parse(useData);
        const errorStatus = checkUser(values, userObject);
        if (errorStatus === "email") {
          toast.error("Email not Register");
        } else if (errorStatus === "password") {
          toast.error("Incorrect Password");
        }
      } else {
        toast.error("User Register");
      }
    },
    validationSchema: LoginSchema,
  });

  function checkUser(
    currentValue: {
      email: string;
      password: string;
    },
    userObject: UserInfo
  ) {
    let userStatus = "email";
    for (let i in userObject.userInfo) {
      if (userObject.userInfo[i].email === currentValue.email) {
        if (
          bcrypt.compareSync(
            currentValue.password,
            userObject.userInfo[i].password
          )
        ) {
          dispatch(setUser(userObject.userInfo[i]));
          dispatch(addAuth());
          toast.success("Login Successful");
          navigate("/home");
          userStatus = "";
        } else {
          return (userStatus = "password");
        }
      }
    }
    return userStatus;
  }

  return (
    <div className="sm:w-[40%] w-auto shadow-lg p-5 rounded-md">
      <div>
        <h1 className="text-5xl font-bold my-4">Log In</h1>
      </div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <div className="mb-4  ">
            <InputTextField
              type="text"
              name="email"
              title="Email"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              errorString={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
            <InputTextField
              type="password"
              name="password"
              title="Password"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              errorString={
                formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded mr-8 w-24"
            >
              Submit
            </button>

            <button
              type="reset"
              className="bg-blue-400 text-white p-2 rounded w-24"
            >
              Reset
            </button>
          </div>
          <div className="mt-4 text-md">
            Create an account{" "}
            <Link to="/signup" className="text-blue-500">
              SignUp Now{" "}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
