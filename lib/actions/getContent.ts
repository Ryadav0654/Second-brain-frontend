import toast from "react-hot-toast";
import apiClient from "../apiClient";

const getContent = async () => {
  // console.log("getting content");
  try {
    const content = await apiClient.get("/api/v1/content/all", {
      withCredentials: true,
    });
    if (content.status !== 200) {
      toast.error("Failed to get content");
      console.error("error occured while getting content: ", content);
    }
    const allContents = await content.data.contents;
    toast.success("Content fetched successfully");
    return allContents;
  } catch (error) {
    toast.error("Failed to get content");
    console.error("error occured while getting content: ", error);
  }
};

export default getContent;
