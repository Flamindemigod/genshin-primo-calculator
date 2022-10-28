import { Box, Checkbox, Paper } from "@mui/material";
import Image from "next/future/image";
import React, { useEffect, useState } from "react";

const QuestContainer = ({
  title,
  subTitle,
  setPrimo = () => {},
  primos,
  icon,
}) => {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      if (checked) {
        setPrimo((state) => state + primos);
      } else {
        setPrimo((state) => state - primos);
      }
    }
    setClicked(false);
  }, [checked]);
  return (
    <Paper
      tabIndex={0}
      onClick={(e) => {
        setChecked((state) => !state);
        setClicked(true);
      }}
      elevation={2}
      className={`flex justify-between p-4 items-center gap-2 cursor-pointer `}
      data-checked={checked}
      sx={{
        width: "95%",
        maxWidth: "40rem",
        transition: "background-image ease 2s",
        backgroundSize: "200% 100%",
        backgroundPositionX: "30%",
        "&[data-checked=true]": { backgroundPositionX: 0 },
        "&:hover, &:focus-within": { backgroundPositionX: 0 },

        transition: "all 200ms linear",
        backgroundImage:
          "linear-gradient(90deg, var(--clr-primary-500), rgba(255, 255, 255, 0.07) 15% )",
      }}
    >
      <div className="flex gap-2 items-center">
        <Image src={icon} width={52} height={52} alt={title} />
        <div>
          <div className="font-sans text-xl">{title}</div>
          <div>{subTitle}</div>
        </div>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <div className="flex gap-1 items-center">
          <div className="text-xl">{primos}</div>
          <Image
            draggable={false}
            src={"/Item_Primogem.webp"}
            width={32}
            height={32}
            alt={"Primogem"}
          />
        </div>
      </div>
    </Paper>
  );
};

export default QuestContainer;
