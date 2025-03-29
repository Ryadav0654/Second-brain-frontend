import apiClient from "../apiClient";
const getUser = async () => {
  try {
    const res = await apiClient.get("/api/v1/user");
    if (res.status !== 200) {
      console.error("error occured while getting user details: ", res);
    }
    const user = await res.data.data;
    // console.log("user", user);
    return user;
  } catch (error) {
    console.error("error occured while getting user details: ", error);
  }
};

export default getUser;
