import { Favorite, GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="w-full bg-black bg-opacity-50 text-offWhite-100 flex p-8 flex-col sm:flex-row justify-between">
      <div>
        <Button href={"https://ko-fi.com/flamindemigod"} variant="contained">
          <img
            width={32}
            height={32}
            src="https://storage.ko-fi.com/cdn/brandasset/kofi_p_logo_nolabel.png"
            alt="Ko-fi Logo"
          />{" "}
          Support me on Kofi
        </Button>
      </div>
      <div>
        <div>
          Made for you with <Favorite sx={{ color: "#ff1000" }} /> by
          Flamindemigod and Delta45321
        </div>
      </div>
    </div>
  );
};

export default Footer;
