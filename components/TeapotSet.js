import { Paper } from "@mui/material";
import Image from "next/future/image";
import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import TeapotChar from "./TeapotChar";

const TeapotSet = ({ set, setPrimos }) => {
  const langContext = useContext(LangContext);
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
        <div className="text-xl font-sans">{set.name[langContext.lang]}</div>
      </div>
      <div className="flex flex-row md:flex-col gap-2 flex-wrap justify-center">
        {set.characters.map((char) => (
          <TeapotChar
            key={`${set.name[langContext.lang]}-${char.name[langContext.lang]}`}
            char={char}
            setPrimos={setPrimos}
          />
        ))}
      </div>
    </Paper>
  );
};

export default TeapotSet;
