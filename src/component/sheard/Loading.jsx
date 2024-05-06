import Lottie from "react-lottie";
import okay from "../../../public/loading.json"

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: okay,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className=" items-center flex justify-center h-screen">
        <Lottie options={defaultOptions} width={200} height={200} />
        </div>
    );
};

export default Loading;