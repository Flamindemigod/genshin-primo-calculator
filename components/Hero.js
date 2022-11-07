import { ArrowDownward } from "@mui/icons-material";
import Image from "next/future/image";
import ExplainationDialog from "./ExplainationDialog";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-2 p-8">
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-sans">
          Welcome to Delta and Flamin&apos;s Genshin Primo Planner
        </div>
        <div>
          <ExplainationDialog />
        </div>
        <div className="flex gap-2 text-base items-center px-2">
          Scroll Down to get Started{" "}
          <ArrowDownward className="animate-bounce" />
        </div>
      </div>
      <div
        className="relative flex-grow h-[30vh] md:h-[60vh]"
        style={{ minWidth: "320px" }}
      >
        <Image
          draggable={false}
          src="/BG.png"
          style={{ filter: "blur(5px)" }}
          className="object-contain"
          fill
          priority
          image
          alt={"Blur"}
        />
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
