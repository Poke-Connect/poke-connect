import { postRequest } from "config/axiosConfig";
import { IFeedback } from "types";

const feedbackBase = "/feedback";

export const addFeedback = async (feedbackData: IFeedback) => {
  const res = await postRequest(feedbackBase, feedbackData);
  if (res?.status === 201) {
    return res?.data;
  } else {
    return null;
  }
};
