import React, { useState } from "react";
import { getSecondaryInfo } from "../helper";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateUserObj } from "db/updateUserObject";
import EditInput from "./EditInput";
import ButtonContainer from "./ButtonContainer";
import PicEmailContainer from "./PicEmailContainer";

const EditProfileForm = (props) => {
  const navigate = useNavigate();

  const { profileData, isNew } = props;
  const [isEditing, setIsEditing] = useState(true);

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
      setIsEditing(false);
      formik.resetForm();
      isNew ? navigate("/home") : navigate("/profile");
    },
  });

  if (!profileData) {
    return null;
  }

  const cancelChangesHandler = () => {
    formik.resetForm();
    setIsEditing(false);
    navigate("/profile");
  };

  const skipChangesHandler = () => {
    formik.resetForm();
    setIsEditing(false);
    navigate("/home");
  };

  return (
    <div id="form" className="pt-3 pb-10 pl-6 pr-7 w-full">
      <form onSubmit={formik.handleSubmit}>
        <PicEmailContainer
          alt={firstName[0]}
          photoURL={photoURL}
          email={email}
        />
        <div className="flex flex-col items-start md:flex-row flex-2">
          <EditInput
            id={"firstName"}
            name={"firstName"}
            placeholder={"First name"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          <div className="md:pl-2">
            <EditInput
              id={"lastName"}
              name={"lastName"}
              placeholder={"Last name"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              type="text"
            />
          </div>
        </div>

        <div
          id="inputContainer"
          className="flex flex-col items-start justify-center pr-7"
        >
          <EditInput
            id={"linkedIn"}
            name={"linkedIn"}
            placeholder={"LinkedIn profile link"}
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            type="text"
          />
          <div id="mobile" className="flex flex-row">
            <div
              id={"countryCode"}
              name={"countryCode"}
              placeholder={"+91"}
              disabled={true}
              value={"+91"}
              className="p-2 rounded-lg bg-lightGray text-typeText m-2 mr-0 w-1/6"
            >
              +91
            </div>
            <div className="w-5/6">
              <EditInput
                id={"mobile"}
                name={"mobile"}
                placeholder={"Mobile number"}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
              />
            </div>
          </div>
          {formik.touched.mobile && formik.errors.mobile ? (
            <p className="text-sm text-primary">{formik.errors.mobile}</p>
          ) : null}
          <select
            id={"gender"}
            name={"gender"}
            value={formik.values.gender}
            onChange={formik.handleChange}
            style={{ display: "block" }}
            className="p-2 rounded-lg bg-lightGray text-typeText m-2 w-[193px]"
          >
            <option value=""> Select Gender</option>
            <option value="male" label="Male" />
            <option value="female" label="Female" />
            <option value="nonBinary" label="Non-binary" />
          </select>

          <EditInput
            id={"occupation"}
            name={"occupation"}
            placeholder={"Occupation"}
            value={formik.values.occupation}
            onChange={formik.handleChange}
            type="text"
          />

          <EditInput
            id={"company"}
            name={"company"}
            placeholder={"Company"}
            value={formik.values.company}
            onChange={formik.handleChange}
            type="text"
          />
          <textarea
            id={"about"}
            name={"about"}
            placeholder={"About"}
            value={formik.values.about}
            onChange={formik.handleChange}
            type="text"
            className="p-2 rounded-lg bg-lightGray placeholder-typeText text-black m-2 h-32 w-full items-start align-top justify-start"
          />
        </div>

        <ButtonContainer
          isNew={isNew}
          isEditing={isEditing}
          cancelChangesHandler={cancelChangesHandler}
          skipChangesHandler={skipChangesHandler}
        />
      </form>
    </div>
  );
};

export default EditProfileForm;
