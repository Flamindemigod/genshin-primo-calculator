import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/future/image";
import { useContext, useState } from "react";
import Link from "./Link";
import { LangContext, langs } from "../contexts/LangContext";
const Header = ({ setLang }) => {
  const langContext = useContext(LangContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between px-4 items-center">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            draggable={false}
            src="/PaimonGivingPrimo.png"
            width={64}
            height={64}
            alt={"GPP Logo"}
          />
          <div className="text-2xl font-sans">{langContext.siteTitle}</div>
        </div>
      </Link>
      <div>
        <Button
          variant="contained"
          id="Language Toggle"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {langContext.langFull}
        </Button>
        <Menu
          id="Language Selection Menu"
          anchorEl={anchorEl}
          disableScrollLock={true}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "Language Toggle",
          }}
        >
          {Object.keys(langs).map((lang) => (
            <MenuItem
              key={lang}
              onClick={() => {
                setLang(lang);
                localStorage.setItem("lang", lang);
                handleClose();
              }}
            >
              {langs[lang].langFull}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
