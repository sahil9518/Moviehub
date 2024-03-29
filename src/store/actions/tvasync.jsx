import axios from "../../utils/Axios";
import { loadtv } from "../reducer/TvSlice";

export const tvasync = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`tv/${id}`);
    const externalid = await axios.get(`tv/${id}/external_ids`);
    const recommendations = await axios.get(`tv/${id}/recommendations`);
    const similar = await axios.get(`tv/${id}/similar`);
    const videos = await axios.get(`tv/${id}/videos`);
    const watchprovider = await axios.get(`tv/${id}/watch/providers`);
    const translations = await axios.get(`tv/${id}/translations`);

    const alldata = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results,
      watchprovider: watchprovider.data.results.IN,
      translations: translations.data.translations.map((cv) => cv.english_name),
    };

    dispatch(loadtv(alldata));
  } catch (error) {
    console.log("err-->", error);
  }
};
