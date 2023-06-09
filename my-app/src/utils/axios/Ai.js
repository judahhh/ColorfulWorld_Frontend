import axios from "axios";
import server from "../../config.js";

const Ai = axios.create({
  baseURL: server.ai_server,
});

export default Ai;
