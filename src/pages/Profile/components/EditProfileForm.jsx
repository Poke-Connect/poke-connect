import React from "react";
import { getSecondaryInfo } from "../helper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserObj } from "db/updateUserObject";

const EditProfileForm = (props) => {
  const { profileData } = props;

  const {
    firstName = "",
    lastName = "",
    email = "",
    photoURL = "",
    uid = "",
  } = profileData;

  const secondaryInfo = getSecondaryInfo(profileData);

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      linkedIn: secondaryInfo.linkedIn,
      mobile: secondaryInfo.mobile,
      gender: secondaryInfo.gender,
      occupation: secondaryInfo.occupation,
      company: secondaryInfo.company,
      about: secondaryInfo.about,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      mobile: Yup.string()
        .max(10, "Invalid Mobile number")
        .min(10, "Invalid Mobile number"),
    }),
    onSubmit: (values) => {
      updateUserObj(values, uid, email, photoURL);
      alert("user updated");
      //Save profile data
      //navigate?
    },
  });

  if (!profileData) {
    return null;
  }

  return (
    <div id="form">
      EditProfile
      <form onSubmit={formik.handleSubmit}>
        <div id="pic&email" className="flex-row flex-2">
          <div className="icon flex-none w-10 h-10 bg-lightGray rounded-lg flex items-center justify-center pl-2">
            <img
              src={photoURL}
              alt={"P"}
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <div className="flex-1">coco.chanel@gmail.com</div>
        </div>

        <div id="inputContainer" className="flex-col">
          <div id="name" className="flex-2 flex-row">
            <input
              id={"firstName"}
              name={"firstName"}
              placeholder={"First name"}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className="flex-1"
            />

            {formik.touched.firstName && formik.errors.firstName ? (
              <p>{formik.errors.firstName}</p>
            ) : null}

            <input
              id={"lastName"}
              name={"lastName"}
              placeholder={"Last name"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              type="text"
            />
          </div>
          <div>
            <input
              id={"linkedIn"}
              name={"linkedIn"}
              placeholder={"linkedin"}
              value={formik.values.linkedIn}
              onChange={formik.handleChange}
              type="text"
            />

            <div id="mobile">
              <input
                id={"countryCode"}
                name={"countryCode"}
                placeholder={"+91"}
                disabled={true}
                value={"+91"}
              />
              <input
                id={"mobile"}
                name={"mobile"}
                placeholder={"mobile"}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
              />
            </div>

            {formik.touched.mobile && formik.errors.mobile ? (
              <p>{formik.errors.mobile}</p>
            ) : null}

            <select
              id={"gender"}
              name={"gender"}
              value={formik.values.gender}
              onChange={formik.handleChange}
              style={{ display: "block" }}
            >
              <option value="">Gender</option>
              <option value="male" label="Male" />
              <option value="female" label="Female" />
              <option value="nonBinary" label="Non-binary" />
            </select>

            <input
              id={"occupation"}
              name={"occupation"}
              placeholder={"Occupation"}
              value={formik.values.occupation}
              onChange={formik.handleChange}
              type="text"
            />

            <input
              id={"company"}
              name={"company"}
              placeholder={"Company"}
              value={formik.values.company}
              onChange={formik.handleChange}
              type="text"
            />

            <input
              id={"about"}
              name={"about"}
              placeholder={"About"}
              value={formik.values.about}
              onChange={formik.handleChange}
              type="text"
            />
          </div>
        </div>

        <div id="button">
          <button type={"submit"}>Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
