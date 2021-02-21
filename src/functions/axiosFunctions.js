import axios from "axios";

const axiosFunctions = {
  loginUser(email, password) {
    console.log(email, password);
    return axios.post("http://api-staging.joinbubble.co.uk/auth/local?web=0", {
      email: email,
      password: password,
    });
  },
  getUserDetails(access_token) {
    return axios.get("http://api-staging.joinbubble.co.uk/api/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
  getLocalSitter(access_token) {
    console.log(access_token);
    return axios.get("http://api-staging.joinbubble.co.uk/api/search", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
  getActiveBookings(access_token) {
    return axios.get(
      "http://api-staging.joinbubble.co.uk/api/booking/activesummary",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
  },
  getBooking(access_token, id) {
    return axios.get("http://api-staging.joinbubble.co.uk/api/booking/:" + id, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  },
};

export default axiosFunctions;
