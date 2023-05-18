import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputTextField from "../InputTag/InputTextField";
import { LoginSchema } from "../../validation/LoginSchema";
import { addAuth } from "../../store/feature/authSlicer";
import { setUser } from "../../store/feature/userSlicer";
import { UserInfo } from "../../utils/type";

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
        checkUser(values, userObject);
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
    for (let i in userObject.userInfo) {
      if (
        userObject.userInfo[i].email === currentValue.email &&
        userObject.userInfo[i].password === currentValue.password
      ) {
        dispatch(setUser(userObject.userInfo[i]));
        dispatch(addAuth());
        navigate("/home");
        console.log("Found you");
        return;
      }
    }
  }

  return (
    <div className="sm:w-[40%] w-auto">
      <div>
        <h1 className="text-5xl font-bold my-4">Login Up</h1>
      </div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <div className="mb-4  ">
            <InputTextField
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
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
