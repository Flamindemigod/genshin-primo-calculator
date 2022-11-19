import { Info } from "@mui/icons-material";
import { Box, IconButton, Paper } from "@mui/material";
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
  const [showOutline, setShowOutline] = useState(false);

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
    <Paper
      elevation={3}
      tabIndex={0}
      data-clicked={checked}
      className="p-4 relative isolate flex justify-between cursor-pointer"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          setChecked((state) => !state);
          setClicked(true);
          setShowOutline(true);
          setTimeout(() => {
            setShowOutline(false);
          }, 500);
        }
      }}
      onClick={() => {
        setChecked((state) => !state);
        setClicked(true);
        setShowOutline(true);
        setTimeout(() => {
          setShowOutline(false);
        }, 500);
      }}
      sx={{
        backgroundImage: `linear-gradient(90deg,var(--clr-primary-500), transparent 65%)`,
        backgroundSize: "150%",
        backgroundPositionX: "100%",
        outline: showOutline ? "2px solid var(--clr-primary-500)" : "revert",
        transition: "all 200ms linear",
        "&:hover, &:focus-visible": {
          backgroundPositionX: "50%",
        },
        "&[data-clicked=true]": {
          backgroundPositionX: 0,
        },
      }}
    >
      <Box
        className="absolute inset-0 -z-[5]"
        sx={{
          backgroundImage: "linear-gradient(90deg, transparent 80%, #00000070)",
        }}
      />
      <div className="absolute left-3/4 right-0 top-0 bottom-0 -z-10">
        <Image
          draggable={false}
          className="object-cover object-right "
          style={{
            WebkitMask: "linear-gradient(90deg, #0000 0%, #ffff)",
          }}
          src={bgImage}
          fill
          alt={name}
        />
      </div>
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
          aria-label="More Info on Hoyolab"
        >
          <Info fontSize="large" />
        </IconButton>
      </div>
    </Paper>
  );
};

export default EventContainer;
