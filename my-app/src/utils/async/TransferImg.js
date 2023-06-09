import Ai from "../axios/Ai";

export const TransferImg = async (images) => {
  //서버에 이미지를 전달하는 함수
  const formData = new FormData();
  formData.append("image", images);
  formData.append("Intensity", localStorage.getItem("index"));
  return Ai.post("/colorization", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
//[res.data.origin_url, res.data.url]
