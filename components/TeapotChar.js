import { Paper } from "@mui/material";
import Image from "next/future/image";
import { useState, useEffect } from "react";

const TeapotChar = ({ char, setPrimos }) => {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      if (checked) {
        setPrimos((state) => state + 20);
      } else {
        setPrimos((state) => state - 20);
      }
    }
    setClicked(false);
  }, [checked]);
  return (
    <Paper
      elevation={6}
      tabIndex={0}
      className="flex gap-2 items-center justify-between p-4 w-72 cursor-pointer"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          setChecked((state) => !state);
          setClicked(true);
        }
      }}
      onClick={(e) => {
        setChecked((state) => !state);
        setClicked(true);
      }}
      data-checked={checked}
      sx={{
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
      <div className="flex items-center gap-2">
        <Image
          src={char.image}
          width={64}
          height={64}
          alt={char.name}
          draggable={false}
          className={"object-contain"}
        />
        <div>{char.name}</div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="text-xl">20</div>
        <Image
          draggable={false}
          src={"/Item_Primogem.webp"}
          width={32}
          height={32}
          alt={"Primogem"}
        />
      </div>
    </Paper>
  );
};

export default TeapotChar;
