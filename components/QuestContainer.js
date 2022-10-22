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

  useEffect(() => {
    if (checked) {
      setPrimo((state) => state + primos);
    } else {
      setPrimo((state) => state - primos);
    }
  }, [checked]);
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        setChecked((state) => !state);
      }}
    >
      <Paper
        elevation={2}
        className={`flex justify-between p-4 items-center gap-2 ${
          checked && "bg-primary-500"
        }`}
        sx={{ width: "95%", maxWidth: "40rem" }}
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
            <div class="text-xl">{primos}</div>
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
    </a>
  );
};

export default QuestContainer;
