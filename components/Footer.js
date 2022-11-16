import { Favorite, GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/future/image";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-50 text-offWhite-100 flex p-8 flex-col sm:flex-row justify-between">
      <div className="flex items-center">
        Genshin Primo Planner is not affiliated with or endorsed by HoYoverse.
      </div>
      <div>
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex items-center gap-1">
            Made for you with <Favorite sx={{ color: "#ff1000" }} /> by
            Flamindemigod and Delta45321.
          </div>
          <Button href={"https://ko-fi.com/flamindemigod"} variant="contained">
            <Image
              width={32}
              height={32}
              src="https://storage.ko-fi.com/cdn/brandasset/kofi_p_logo_nolabel.png"
              alt="Ko-fi Logo"
            />
            Support me on Kofi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
