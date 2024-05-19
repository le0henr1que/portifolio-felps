import Lottie from "react-lottie";
import animationData from "../../../../../public/lotify.json";

export function FloatingImage({ image }: { image?: string }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="image-responsive w-[436px] h-[424px] rounded-[30px] flex items-center justify-center ">
        <div className="bg-brand-500 w-[246px] h-[246px] flex-shrink-0 fill-current text-brand-500 filter blur-[138px]"></div>
        <div className="absolute z-[999]">
          <Lottie
            options={defaultOptions}
            height={450}
            width={460}
            isStopped={false}
            isPaused={false}
          />
        </div>
        <img src={image} className="absolute rounded-[30px]" />
      </div>
    </>
  );
}
