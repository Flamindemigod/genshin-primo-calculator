import { ArrowDownward } from "@mui/icons-material";
import Image from "next/future/image";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-4 p-8">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-sans">
          Welcome to Delta and Flamin&apos;s Genshin Primo Planner
        </div>
        <div className="text-base">
          Scroll Down to get Started{" "}
          <ArrowDownward className="animate-bounce" />
        </div>
      </div>
      <div
        className="relative flex-grow"
        style={{ height: "60vh", minWidth: "30rem" }}
      >
        <Image
          draggable={false}
          src="/BG.png"
          className="object-contain "
          fill
          priority
          alt={"Zhongli and Aether Asking for Mora and Primos respectively"}
        />
      </div>
    </div>
  );
};

export default Hero;
