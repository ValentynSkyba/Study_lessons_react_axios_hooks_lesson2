import { Puff } from "react-loader-spinner";
import s from "./Posts.module.css";
const Loader = () => {
  return (
    <div>
      <Puff
        visible={true}
        height="120"
        width="120"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
