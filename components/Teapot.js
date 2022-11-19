import { Paper, Slider, Typography } from "@mui/material";
import React from "react";
import CustomAccordian from "./Accordian";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Teapot = ({ setPrimos, trustRank, setTrustRank }) => {
  const DynamicIndoorSets = dynamic(() => import("./IndoorSets"), {
    suspense: true,
  });
  const DynamicOutdoorSets = dynamic(() => import("./OutdoorSets"), {
    suspense: true,
  });
  return (
    <>
      <Paper elevation={3} className="p-4">
        <div className="text-xl font-sans">Serenitea Teapot</div>
        <div className="p-4">
          <div className="flex gap-4 items-center">
            <Typography>Trust Rank</Typography>
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
      <CustomAccordian title={"List of Gift Sets"} icon={"/GiftSet.webp"}>
        <CustomAccordian title={"Indoor"} icon={"/GiftSet.webp"}>
          <Suspense fallback="Loading....">
            <DynamicIndoorSets setPrimos={setPrimos} />
          </Suspense>
        </CustomAccordian>
        <CustomAccordian title={"Outdoor"} icon={"/GiftSet.webp"}>
          <Suspense fallback="Loading....">
            <DynamicOutdoorSets setPrimos={setPrimos} />
          </Suspense>
        </CustomAccordian>
      </CustomAccordian>
    </>
  );
};

export default Teapot;
