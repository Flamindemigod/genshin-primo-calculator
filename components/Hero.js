import { ArrowDownward } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-around items-center gap-4 p-8">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-sans">
          Welcome to Delta&apos;s and Flamin&apos;s Genshin Primo Planner
        </div>
        <div className="text-base">
          Scroll Down to get Started{" "}
          <ArrowDownward className="animate-bounce" />
        </div>
      </div>
      <div className="">
        <img
          draggable={false}
          src="/BG.png"
          className="object-contain "
          style={{ height: "60vh" }}
        />
      </div>
    </div>
  );
};

export default Hero;
