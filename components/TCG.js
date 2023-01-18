import React, { useContext } from "react";
import { Paper, Typography, Slider } from "@mui/material";
import { LangContext } from "../contexts/LangContext";

const TCG = ({
  playerLevel,
  setPlayerLevel,
  handbookLevel,
  setHandbookLevel,
}) => {
  const langContext = useContext(LangContext);
  return (
    <Paper elevation={3} className="p-4">
      <div className="text-xl font-sans">{langContext.TCG}</div>
      <div className="p-4">
        <div className="flex gap-4 items-center">
          <Typography>{langContext.TCGRank}</Typography>
          <Slider
            min={0}
            step={1}
            max={10}
            value={playerLevel}
            onChange={(e, newVal) => {
              setPlayerLevel(newVal);
            }}
            marks
            sx={{
              width: 250,
              "& .MuiSlider-valueLabel": {
                lineHeight: 1.2,
                fontSize: 12,
                background: "unset",
                padding: 0,
                width: 32,
                height: 32,
                borderRadius: "50% 50% 50% 0",
                backgroundColor: "var(--clr-primary-500)",
                transformOrigin: "bottom left",
                transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                "&:before": { display: "none" },
                "&.MuiSlider-valueLabelOpen": {
                  transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                },
                "& > *": {
                  transform: "rotate(45deg)",
                },
              },
            }}
            valueLabelDisplay="auto"
          />
        </div>
        <div className="flex gap-4 items-center">
          <Typography>{langContext.TCGHandbook}</Typography>
          <Slider
            min={0}
            step={1}
            max={4}
            value={handbookLevel}
            onChange={(e, newVal) => {
              setHandbookLevel(newVal);
            }}
            marks
            sx={{
              width: 250,
              "& .MuiSlider-valueLabel": {
                lineHeight: 1.2,
                fontSize: 12,
                background: "unset",
                padding: 0,
                width: 32,
                height: 32,
                borderRadius: "50% 50% 50% 0",
                backgroundColor: "var(--clr-primary-500)",
                transformOrigin: "bottom left",
                transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                "&:before": { display: "none" },
                "&.MuiSlider-valueLabelOpen": {
                  transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                },
                "& > *": {
                  transform: "rotate(45deg)",
                },
              },
            }}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
    </Paper>
  );
};

export default TCG;
