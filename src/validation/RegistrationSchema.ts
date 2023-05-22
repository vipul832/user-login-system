import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(15, "Must be 15 characters or More")
    .matches(/[a-zA-Z]+/, "Invalid Name")
    .required("User name is required !"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required !"),
  phoneNumber: Yup.string()
    .matches(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, "Invalid phone number")
    .required("Phone number is required !"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character(!@#$%&*)"
    )
    .required("Password is required !"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Confirm password must match with above password !"
    )
    .required("Confirm password is required !"),
  file: Yup.string().required("Photo Required"),
});
