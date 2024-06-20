import { IoIosSearch } from "react-icons/io";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface SearchBarProps {
  onSearch: (query: string) => void
}
export default function SearchBar({ onSearch }: SearchBarProps) {
  const validationSchema = Yup.object().shape({
    query: Yup.string().min(3, "Too Short").max(50, "Too Long"),
  });

  return (
    <div className={css.div}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Search query cannot be empty or just spaces");
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.divButton}>
            <button className={css.btn} type="submit">
              <IoIosSearch />
            </button>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage className={css.span} name="query" component="span" />
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}
