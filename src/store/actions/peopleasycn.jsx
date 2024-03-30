import axios from "../../utils/Axios";
import { loadpeople } from "../reducer/PeopleSlice";

export const personasync = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`person/${id}`);
    const externalid = await axios.get(`person/${id}/external_ids`);
    const movie_credits = await axios.get(`person/${id}/movie_credits`);
    const tv_credits = await axios.get(`person/${id}/tv_credits`);
    const combined_credits = await axios.get(`person/${id}/combined_credits`);

    const alldata = {
      detail: detail.data,
      externalid: externalid.data,
      movie_credits: movie_credits.data,
      tv_credits: tv_credits.data,
      combined_credits: combined_credits.data,
    };

    dispatch(loadpeople(alldata));
  } catch (error) {
    console.log("err-->", error);
  }
};
