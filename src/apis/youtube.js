import axios from "axios";

const KEY = "AIzaSyCDEOc2nuW2VnB2QhHbeGIvOLBu62PGwpQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
