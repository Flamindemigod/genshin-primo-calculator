import { Favorite, GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Footer = () => {
  const langContext = useContext(LangContext);
  return (
    <div className="w-full bg-black bg-opacity-50 text-offWhite-100 flex p-8 flex-col sm:flex-row justify-between">
      <div className="flex items-center">{langContext.footerDisclaimer}</div>
      <div>
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex items-center gap-1 flex-wrap">
            {langContext.footerThanksPart1}{" "}
            <Favorite sx={{ color: "#ff1000" }} />
            {langContext.footerThanksPart2}
          </div>
          <Button href={"https://ko-fi.com/flamindemigod"} variant="contained">
            <Image
              width={32}
              height={32}
              src="https://storage.ko-fi.com/cdn/brandasset/kofi_p_logo_nolabel.png"
              alt="Ko-fi Logo"
            />
            {langContext.footerKofi}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
