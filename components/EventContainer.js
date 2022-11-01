import { Info } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Image from "next/future/image";
import { useState, useEffect } from "react";
const EventContainer = ({
  name,
  bgImage,
  gradientColor,
  hoyolabLink,
  startDate,
  endDate,
  primos,
  fates,
  setPrimo,
  setFate,
}) => {
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (clicked) {
      if (checked) {
        setPrimo((state) => state + primos);
        setFate((state) => state + fates);
      } else {
        setPrimo((state) => state - primos);
        setFate((state) => state - fates);
      }
    }
    setClicked(false);
  }, [checked]);
  return (
    <Box
      tabIndex={0}
      data-clicked={checked}
      className="p-4 relative isolate flex justify-between cursor-pointer"
      onClick={() => {
        setChecked((state) => !state);
        setClicked(true);
      }}
      sx={{
        backgroundImage: `linear-gradient(90deg,var(--clr-primary-500), ${gradientColor}, transparent 70%)`,
        backgroundSize: "150%",
        backgroundPositionX: "50%",
        transition: "all 200ms linear",
        "&[data-clicked=true], &:hover": { backgroundPositionX: 0 },
      }}
    >
      <Image
        draggable={false}
        className="object-none object-right -z-[1]"
        style={{
          WebkitMask: "linear-gradient(90deg, #0000 70%, #ffff)",
        }}
        src={bgImage}
        fill
      />
      <div className="flex flex-col">
        <div className="text-xl font-sans">{name}</div>
        <div>
          {startDate} - {endDate}
        </div>
      </div>
      <div className="flex gap-2 items-center flex-shrink-0">
        <div className="flex gap-1 items-center">
          {primos ? (
            <>
              <div className="text-xl">{primos}</div>
              <Image
                draggable={false}
                src={"/Item_Primogem.webp"}
                width={32}
                height={32}
                alt={"Primogem"}
              />
            </>
          ) : (
            <></>
          )}
          {fates ? (
            <>
              <div className="text-xl">{fates}</div>
              <Image
                draggable={false}
                src={"/Item_Intertwined_Fate.webp"}
                width={32}
                height={32}
                alt={"Interwined Fate"}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            window.open(hoyolabLink);
          }}
        >
          <Info fontSize="large" />
        </IconButton>
      </div>
    </Box>
  );
};

export default EventContainer;
