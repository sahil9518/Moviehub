import axios from "../../utils/Axios";
import { loadmovie } from "../reducer/MovieSlice";

export const movieasync = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`movie/${id}`);
    const externalid = await axios.get(`movie/${id}/external_ids`);
    const recommendations = await axios.get(`movie/${id}/recommendations`);
    const similar = await axios.get(`movie/${id}/similar`);
    const videos = await axios.get(`movie/${id}/videos`);
    const watchprovider = await axios.get(`movie/${id}/watch/providers`);
    const translations = await axios.get(`movie/${id}/translations`);

    const alldata = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results,
      watchprovider: watchprovider.data.results.IN,
      translations: translations.data.translations.map((cv) => cv.english_name),
    };

    dispatch(loadmovie(alldata));
  } catch (error) {
    console.log("err-->", error);
  }
};
