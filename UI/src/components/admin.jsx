import { useFormik } from "formik";

function Admin() {
  const formik = useFormik({
    initialValues: {
      Mailsubject: "",
      Mailcontent: "",
    },
  });
  return (
    <div className="App">
      <h1>Admin</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <label>Mail Subject:</label>
        <input
          name="Mailsubject"
          type={"text"}
          onChange={formik.handleChange}
          value={formik.values.Mailsubject}
          placeholder="subject"
          className="input-box"
        ></input>
        </div>
        <div>
<label>Mail Content:</label>
        <textarea
          name="Mailcontent"
          type={"textarea"}
          onChange={formik.handleChange}
          value={formik.values.Mailcontent}
          placeholder="Write your content here..."
          className="input-box"
        ></textarea>
          </div>
          <div>
        <button type="submit" className="admin-btn">
          Send
        </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
