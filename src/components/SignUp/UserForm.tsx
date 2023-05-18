import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegistrationSchema } from "../../validation/RegistrationSchema";
import InputTextField from "../InputTag/InputTextField";
import { UserInfo, NewUser } from "../../utils/type";

export const values = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  file: "",
};
export default function UserForm() {
  const [image, setImage] = useState<string>();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: values,

    onSubmit: (values) => {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const userObject: NewUser = JSON.parse(userData);
        const data: NewUser = {
          userInfo: [],
        };
        const { name, email, file, password, phoneNumber } = values;
        data.userInfo.push({ name, email, file, password, phoneNumber });
        localStorage.setItem("userData", JSON.stringify(userObject));
      } else {
        const data: NewUser = {
          userInfo: [],
        };
        const { name, email, file, password, phoneNumber } = values;
        data.userInfo.push({ name, email, file, password, phoneNumber });
        localStorage.setItem("userData", JSON.stringify(data));
      }
      navigate("/login");
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

  return (
    <div className="sm:w-[40%] w-auto">
      <div>
        <h1 className="text-5xl font-bold my-4">Sign Up</h1>
      </div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <div className="mb-4 flex justify-center">
            <label htmlFor="file" className="font-bold">
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

          <InputTextField
            name="name"
            title="Name"
            placeholder="Enter your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            errorString={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : null
            }
          />
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
            name="phoneNumber"
            title="Phone Number"
            placeholder="Enter your Phone Number ex: +919595662030"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            errorString={
              formik.errors.phoneNumber && formik.touched.phoneNumber
                ? formik.errors.phoneNumber
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
          <InputTextField
            name="confirmPassword"
            title="Confirm Password"
            placeholder="Enter your Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            errorString={
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
          />
          {/* <div className="mb-4">
            <label htmlFor="name" className="mb-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
              placeholder="Enter your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          {formik.errors.name && formik.touched.name ? (
            <div className="text-red-500 mb-2">{formik.errors.name}</div>
          ) : null} */}

          {/* <div className="mb-4">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500 mb-2">{formik.errors.email}</div>
          ) : null}

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="mb-2 block">
              Phone No.
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
              placeholder="Enter your Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
          </div>
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <div className="text-red-500 mb-2">{formik.errors.phoneNumber}</div>
          ) : null}

          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500 mb-2">{formik.errors.password}</div>
          ) : null}

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="mb-2 block">
              Confirm Password
            </label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="bg-orange-200 outline-none rounded p-2 border border-gray-400 w-full"
              placeholder="Enter your Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className="text-red-500 mb-2">
              {formik.errors.confirmPassword}
            </div>
          ) : null} */}

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
}
