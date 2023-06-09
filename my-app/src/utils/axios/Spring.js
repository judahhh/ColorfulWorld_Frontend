import axios from "axios";
import server from "../../config.js";

const Spring = axios.create({
  baseURL: server.spring_server,
});

export default Spring;
