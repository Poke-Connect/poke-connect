import { postRequest } from "config/axiosConfig";

const feedbackBase = "/feedback";

export const addFeedback = async (feedbackData) => {
  const res = await postRequest(feedbackBase, feedbackData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};
