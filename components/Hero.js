import { ArrowDownward } from "@mui/icons-material";
import ExplainationDialog from "./ExplainationDialog";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
const Hero = () => {
  const langContext = useContext(LangContext);
  return (
    <div className="flex flex-wrap justify-start items-center gap-2 p-8 h-[30vh] md:h-[60vh]">
      <div className="flex flex-col gap-1">
        <div className="text-3xl font-sans">{langContext.title}</div>
        <div>
          <ExplainationDialog />
        </div>
        <div className="flex gap-2 text-base items-center px-2">
          {langContext.scrollDown} <ArrowDownward className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
