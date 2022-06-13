import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import constants from "../constants/constants";

class AboutService {
  /**
   * This function gets the about information.
   * @returns About information
   */
  getAbout() {
    return axios.get(constants.API_URL + "about");
  }
}

export default new AboutService();
