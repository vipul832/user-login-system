import { useFormik } from "formik";
import { useState } from "react";

export default function UserForm() {
  const [image, setImage] = useState<string>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      file: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  function handleImageChange(file: null | File) {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
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
                  event.target.files ? event.target.files[0] : null
                );
              }}
              value={formik.values.file}
            />
            {image && (
              <div>
                <img src={`${image}`} alt="" width="100px" height="100px" />
              </div>
            )}
          </div>
          <div className="mb-4">
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
              value={formik.values.name}
            />
          </div>
          <div className="mb-4">
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
              value={formik.values.email}
            />
          </div>
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
              value={formik.values.phoneNumber}
            />
          </div>
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
              value={formik.values.password}
            />
          </div>
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
              value={formik.values.confirmPassword}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-500 text-white p-2 rounded mr-8"
            >
              Submit
            </button>

            <button type="reset" className="bg-blue-400 text-white p-2 rounded">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
