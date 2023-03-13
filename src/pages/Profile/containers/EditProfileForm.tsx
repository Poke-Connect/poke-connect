import React, { FC, useState } from "react";
import { getSecondaryInfo } from "../helper";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateProfile } from "db/dbUpdate";
import { TOAST_STRINGS } from "appConstants";
import {
  ButtonContainer,
  EditInput,
  ErrorString,
  PicEmailContainer,
} from "../components";

interface IProps {
  profileData: any;
  isNew: any;
}

const EditProfileForm: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const { EDIT_PROFILE_SUCCESS, ERROR } = TOAST_STRINGS;

  const { profileData, isNew } = props;
  const [isEditing, setIsEditing] = useState(true);

  const {
    firstName = "",
    lastName = "",
    email = "",
    photoURL = "",
    _id: userId = "",
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
      try {
        updateProfile(values, userId, email, photoURL);
        setIsEditing(false);
        formik.resetForm();
        toast.success(EDIT_PROFILE_SUCCESS);
        isNew ? navigate("/home") : navigate(`/user/${userId}`);
      } catch (e) {
        toast.error(ERROR);
      }
    },
  });

  if (!profileData) {
    return null;
  }

  const cancelChangesHandler = () => {
    formik.resetForm();
    setIsEditing(false);
    navigate(`/user/${userId}`);
  };

  const skipChangesHandler = () => {
    formik.resetForm();
    setIsEditing(false);
    navigate("/home");
  };

  return (
    <div id="form" className="pt-3 pb-10 pl-6 pr-7 w-full">
      <form onSubmit={formik.handleSubmit} className=" w-full">
        <PicEmailContainer photoURL={photoURL} email={email} />
        <div className="flex flex-col items-start w-full pr-7 justify-center">
          <EditInput
            id={"firstName"}
            name={"firstName"}
            placeholder={"First name"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
          />
          <EditInput
            id={"lastName"}
            name={"lastName"}
            placeholder={"Last name"}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            type="text"
          />
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
          <div id="mobile" className="flex flex-row w-full">
            <div
              id={"countryCode"}
              placeholder={"+91"}
              className="p-2 rounded-lg bg-lightGray text-typeText m-2 mr-0 w-1/6"
            >
              +91
            </div>
            <div className="w-full">
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
            <ErrorString text={formik.errors.mobile} />
          ) : null}
          <select
            id={"gender"}
            name={"gender"}
            value={formik.values.gender}
            onChange={formik.handleChange}
            style={{ display: "block" }}
            className="p-2 rounded-lg bg-lightGray  m-2 w-full h-10"
          >
            <option>Select Gender</option>
            <option value="Male" label="Male">
              Male
            </option>
            <option value="Female" label="Female">
              Female
            </option>
            <option value="Non-binary" label="Non-binary">
              Non-binary
            </option>
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
