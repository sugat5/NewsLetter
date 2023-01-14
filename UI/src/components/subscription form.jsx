import { subscriptionSchema } from "./validation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { subscribe } from "../store/subscriptionForm/actions";
import { useEffect } from "react";
import { APILoadingStatus } from "../store/constants";

function Subscriptionform() {
  const dispatch = useDispatch();
  const subscribeState = useSelector((store) => store.subscribe);
  useEffect(() => {
    if (subscribeState.loadingState === APILoadingStatus.SUCCESS) {
      alert("You have subscribed successfully");
    } else if (subscribeState.loadingState === APILoadingStatus.FAILED) {
      alert("Already subscribed,try new email");
    }
  },[subscribeState]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: subscriptionSchema,
    onSubmit: (value) => {
      dispatch(subscribe(value));
      console.log(value);
    },
  });
  return (
    <div className="subscribe-form">
      <h1>Subscribe for exciting Newsletter's</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            name="firstName"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="input-box"
          ></input>

          {formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            name="lastName"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="input-box"
          ></input>
          {formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.email}
            className="input-box"
          ></input>
          {formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <button type="submit" className="subscribe-btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscriptionform;
