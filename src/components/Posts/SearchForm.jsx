import { Field, Form, Formik } from "formik";
import s from "./Posts.module.css";
const SearchForm = ({ setQuery }) => {
  const handleSubmit = (data, options) => {
    console.log(data);
    setQuery(data.query);
    options.resetForm();
  };

  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" type="text" className={"input"} />
          <button className="btn border" type="submit">
            Search
          </button>
          <button
            className="btn border"
            type="button"
            onClick={() => setQuery("")}
          >
            Reset
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchForm;
