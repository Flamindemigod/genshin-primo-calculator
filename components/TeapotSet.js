import { Paper } from "@mui/material";
import Image from "next/future/image";
import React from "react";
import TeapotChar from "./TeapotChar";

const TeapotSet = ({ set, setPrimos }) => {
  return (
    <Paper
      elevation={1}
      className="flex flex-col md:flex-row w-full justify-between gap-4 p-4 px-16"
    >
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <Image
          src={set.image}
          width={200}
          height={200 / 2}
          alt={set.name}
          className={"rounded-sm"}
          draggable={false}
        />
        <div className="text-xl font-sans">{set.name}</div>
      </div>
      <div className="flex flex-row md:flex-col gap-2 flex-wrap justify-center">
        {set.characters.map((char) => (
          <TeapotChar
            key={`${set.name}-${char.name}`}
            char={char}
            setPrimos={setPrimos}
          />
        ))}
      </div>
    </Paper>
  );
};

export default TeapotSet;
