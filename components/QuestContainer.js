import { Box, Checkbox, Paper } from "@mui/material";
import Image from "next/future/image";
import React, { useEffect, useState } from "react";

const QuestContainer = ({ title, subTitle, setPrimo = () => {}, primos }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setPrimo((state) => state + primos);
    } else {
      setPrimo((state) => state - primos);
    }
  }, [checked]);
  return (
    <Paper
      elevation={2}
      className="flex justify-between p-4 items-center"
      sx={{ width: "95%", maxWidth: "40rem" }}
    >
      <div>
        <div className="font-sans text-xl">{title}</div>
        <div>{subTitle}</div>
      </div>
      <div className="flex gap-2 items-center">
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
        <Checkbox
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
      </div>
    </Paper>
  );
};

export default QuestContainer;
