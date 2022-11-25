import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ReachUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      suggestion: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      suggestion: Yup.string()
        .min(3, "Please enter a valuable feedback or suggestion")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert("your feedback submitted successfuly!!!" + values);
    },
  });

  return (
    <div className="reach-out-us pt-6">
      <h2 className="font-semibold text-left text-xl">Reach out to us</h2>
      <div className="pt-4">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col p-4 bg-whiteGray rounded-2xl gap-4"
        >
          <input
            id={"name"}
            name={"name"}
            placeholder={"name"}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="p-1 rounded-lg"
          />
          {formik.touched.name && formik.errors.name ? (
            <p>{formik.errors.name}</p>
          ) : null}
          <input
            id={"email"}
            name={"email"}
            placeholder={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            className="p-1 rounded-lg"
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
          <input
            id={"suggestion"}
            name={"suggestion"}
            placeholder={"feedback/ suggestion"}
            value={formik.values.suggestion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="p-1 rounded-lg"
          />
          {formik.touched.suggestion && formik.errors.suggestion ? (
            <p>{formik.errors.suggestion}</p>
          ) : null}
          <button
            type={"submit"}
            className="p-1 rounded-lg text-white bg-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReachUs;
