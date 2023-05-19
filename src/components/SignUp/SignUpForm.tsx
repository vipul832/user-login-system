import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { RegistrationSchema } from "../../validation/RegistrationSchema";
import InputTextField from "../InputTag/InputTextField";
import { NewUser } from "../../utils/type";

export const values = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  file: "",
};
export default function SignUpForm() {
  const [image, setImage] = useState<string>();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: values,

    onSubmit: (values) => {
      const userData = localStorage.getItem("userData");
      console.log(userData);
      if (userData) {
        const userObject: NewUser = JSON.parse(userData);
        const { name, email, file, password, phoneNumber } = values;
        userObject.userInfo.push({ name, email, file, password, phoneNumber });
        localStorage.setItem("userData", JSON.stringify(userObject));
        navigate("/login");
      } else {
        const data: NewUser = {
          userInfo: [],
        };
        const { name, email, file, password, phoneNumber } = values;
        data.userInfo.push({ name, email, file, password, phoneNumber });
        localStorage.setItem("userData", JSON.stringify(data));
        navigate("/login");
      }
    },
    onReset: () => {
      setImage("");
    },
    validationSchema: RegistrationSchema,
  });

  function handleImageChange(file: null | File, inputTag: HTMLInputElement) {
    const reader = new FileReader();
    let imageUrl: string | ArrayBuffer | null;
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        imageUrl = reader.result;
        if (
          /^data:image\/(png|jpg)/.test(imageUrl as string) &&
          file.size < 200000
        ) {
          setImage(imageUrl as string);
          formik.setFieldValue("file", imageUrl);
        } else {
          setImage("");
          file?.size > 200000
            ? formik.setFieldError("file", "Accept only File less then 200KB")
            : formik.setFieldError("file", "Accept only PNG,JPG");
        }
      };
    }
    inputTag.value = "";
  }

  const InPutFeildValue = [
    {
      name: "name",
      type: "text",
      title: "Name",
      placeHolder: "Enter Your Name",
      value: formik.values.name,
      errorString:
        formik.errors.name && formik.touched.name ? formik.errors.name : null,
    },
    {
      name: "email",
      type: "text",
      title: "Email",
      placeHolder: "Enter Your Email",
      value: formik.values.email,
      errorString:
        formik.errors.email && formik.touched.email
          ? formik.errors.email
          : null,
    },
    {
      name: "phoneNumber",
      type: "text",
      title: "Phone Number",
      placeHolder: "Enter Your Phone Number ex:+919988443322",
      value: formik.values.phoneNumber,
      errorString:
        formik.errors.phoneNumber && formik.touched.phoneNumber
          ? formik.errors.phoneNumber
          : null,
    },
    {
      name: "password",
      title: "Password",
      type: "password",
      placeHolder: "Enter Your Password",
      value: formik.values.password,
      errorString:
        formik.errors.password && formik.touched.password
          ? formik.errors.password
          : null,
    },
    {
      name: "confirmPassword",
      type: "password",
      title: "Confirm Password",
      placeHolder: "Enter Your Confirm Password",
      value: formik.values.confirmPassword,
      errorString:
        formik.errors.confirmPassword && formik.touched.confirmPassword
          ? formik.errors.confirmPassword
          : null,
    },
  ];

  return (
    <div className="sm:w-[40%] w-auto shadow-md p-4 rounded-md">
      <div>
        <h1 className="text-5xl font-bold my-4">Sign Up</h1>
      </div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <div className="mb-4 flex justify-center">
            <label htmlFor="file" className="font-bold cursor-pointer">
              Photo +
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="absolute left-[-999px] hidden"
              onChange={(event) => {
                handleImageChange(
                  event.target.files ? event.target.files[0] : null,
                  event.target
                );
              }}
              onBlur={formik.handleBlur}
            />
          </div>
          {image && (
            <div className="flex justify-center my-2">
              <img src={image} alt="" width="100px" height="100px" />
            </div>
          )}
          {formik.errors.file ? (
            <div className="flex justify-center text-red-500">
              {formik.errors.file}
            </div>
          ) : null}

          {InPutFeildValue.map((obj, index) => {
            const { name, title, value, placeHolder, errorString, type } = obj;
            return (
              <InputTextField
                type={type}
                key={index}
                name={name}
                title={title}
                placeholder={placeHolder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={value}
                errorString={errorString}
              />
            );
          })}
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
          <div className="mt-4 text-md ">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500 ">
              {" "}
              Login Here
            </Link>{" "}
          </div>
        </div>
      </form>
    </div>
  );
}