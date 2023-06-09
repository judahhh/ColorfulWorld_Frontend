import { TransferImg } from "./TransferImg";
import { wrapPromise } from "./WrapPromise";
import { GetImgUrlToFile } from "./GetImgUrlToFile";
import server from "../../config";
//전체적인 서버통신 코드(딥러닝 서버에 보낸후 url을 파일로 바꿔준다.)
const ImageChange = (image) => {
  const userPromise = TransferImg(image).then((new_url) =>
    GetImgUrlToFile(server.ai_server + new_url.url).then((file) => file)
  );
  return {
    image: wrapPromise(userPromise),
  };
};

export default ImageChange;
//GetImgUrlToFile(new_url).then((file) => file);
