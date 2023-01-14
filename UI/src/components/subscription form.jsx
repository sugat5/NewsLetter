import { subscriptionSchema } from "./validation";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { subscribe } from "../store/subscriptionForm/actions";
import { useEffect } from "react";
import { APILoadingStatus } from "../store/constants";
import "./subscription form.css"

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
      <div className="head">
        <h1>Subscribe to Our newsletter</h1>
        <p>We'll give you just the right amount of love! <br/> Sign up for our weekly update and be the first to know about our specials and promotions.</p>
      </div>
      
      <img className="img" src="https://media.vanityfair.com/photos/618ec1c135e0316e6b877f2d/master/w_1920,c_limit/newsletter-subscriptions-fatigue.png" alt="" />
     
     <div className="">
     </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form">
      <h2>Subscribe for exciting Newsletter's</h2>
        <div className="input-container ic1">
          {/* <label>First Name:</label> */}
          <input
            name="firstName"
            type={"text"}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="First_Name"
            className="input"
            id="firstname"
          ></input>
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">First_Name</label>

          {formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          )}
        </div>
        <div className="input-container ic2">
          <input
            name="lastName"
            type={"text"}
            onChange={formik.handleChange}
            placeholder="Last_Name"
            value={formik.values.lastName}
            className="input"
            id="lastname"
          ></input>

         <div className="cut"></div>
         <label htmlFor="lastname" className="placeholder">Last_Name</label>
         
          {formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
        </div>
        <div className="input-container ic2">
          {/* <label>Email:</label> */}
          <input
            name="email"
            type={"text"}
            onChange={formik.handleChange}
            placeholder="Enter_gmail"
            value={formik.values.email}
            className="input"
            id="email"
          ></input>
           <div className="cut"></div>
         <label htmlFor="email" className="placeholder">Enter_gmail</label>
          {formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <button type="submit" className="submit">
          Subscribe
        </button>
        </div>
      </form>
    </div>
  );
}

export default Subscriptionform;
