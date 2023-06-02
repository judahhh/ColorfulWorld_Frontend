import { api } from "../SubmitUrl";
import axios from "axios";
//Intensity
export const TransferImg = async (images) => {
  //서버에 이미지를 전달하는 함수
  const formData = new FormData();
  console.log(images);
  formData.append("image", images);
  formData.append("Intensity", localStorage.getItem("index"));
  return axios
    .post("http://172.16.97.206:5200/colorization", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
//[res.data.origin_url, res.data.url]
