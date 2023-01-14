import * as Yup from "yup";

export const subscriptionSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Should be only English characters")
    .max(50)
    .required("Please enter your first name"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Should be only English characters")
    .max(50)
    .required("Please enter your last name"),

  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
});
