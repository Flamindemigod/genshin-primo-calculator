import { ArrowDownward } from "@mui/icons-material";
import Image from "next/future/image";
import ExplainationDialog from "./ExplainationDialog";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-start items-center gap-2 p-8 h-[30vh] md:h-[60vh]">
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
    </div>
  );
};

export default Hero;
