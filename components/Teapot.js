import { Paper, Slider, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomAccordian from "./Accordian";
import sets from "../teapot";
import TeapotSet from "./TeapotSet";
import { LangContext } from "../contexts/LangContext";
const Teapot = ({ setPrimos, trustRank, setTrustRank }) => {
  const langContext = useContext(LangContext);
  return (
    <>
      <Paper elevation={3} className="p-4">
        <div className="text-xl font-sans">{langContext.teapot}</div>
        <div className="p-4">
          <div className="flex gap-4 items-center">
            <Typography>{langContext.trustRank}</Typography>
            <Slider
              min={0}
              step={1}
              max={10}
              value={trustRank}
              onChange={(e, newVal) => {
                setTrustRank(newVal);
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
      <CustomAccordian
        title={langContext.listOfGiftSets}
        icon={"/GiftSet.webp"}
      >
        <CustomAccordian title={langContext.indoor} icon={"/GiftSet.webp"}>
          <div className="flex flex-col gap-4 p-4">
            {sets.indoor.map((set) => (
              <TeapotSet set={set} key={set.name} setPrimos={setPrimos} />
            ))}
          </div>
        </CustomAccordian>
        <CustomAccordian title={langContext.outdoor} icon={"/GiftSet.webp"}>
          <div className="flex flex-col gap-4 p-4">
            {sets.outdoor.map((set) => (
              <TeapotSet set={set} key={set.name} setPrimos={setPrimos} />
            ))}
          </div>
        </CustomAccordian>
      </CustomAccordian>
    </>
  );
};

export default Teapot;
