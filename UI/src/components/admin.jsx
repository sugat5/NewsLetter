
import { useFormik } from "formik";
import "./admin.css"
// import "./subscription form.css"





function Admin() {
  const formik = useFormik({
    initialValues: {
      Mailsubject: "",
      Mailcontent: "",
    },
  });
  return (
    <div className="App1">
      <h1>Admin</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form2">
        {/* <label id="placeholder">Mail Subject:</label> */}
        <h3>Mail Subject:</h3>
        <input
          name="Mailsubject"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.Mailsubject}
          placeholder="Subject"
          className="input2"
        ></input>
        </div>
        <div>
{/* <label >Mail Content:</label> */}
<h3>Mail Content:</h3>
        <textarea
          name="Mailcontent"
          type={"textarea"}
          onChange={formik.handleChange}
          value={formik.values.Mailcontent}
          placeholder="Write your content here..."
          className="input2"
        ></textarea>
          </div>
          <div>
        <button type="submit" className="submit">
          Send Subject
        </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
