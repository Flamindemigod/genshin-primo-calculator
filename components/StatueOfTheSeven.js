import { Box, Typography, Slider } from "@mui/material";
import React from "react";
function valuetext(value) {
  return `Level ${value}`;
}

const StatueOfTheSeven = ({ params, dispatch }) => {
  return (
    <Box className="p-4 grid grid-rows-8 grid-flow-col items-center gap-x-2 gap-y-0">
      <Typography>Mondstat</Typography>
      <Slider
        step={1}
        min={1}
        max={10}
        marks
        getAriaLabel={() => {
          "Mondstat Statue of the Seven Level";
        }}
        getAriaValueText={valuetext}
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
        value={params.sosMond}
        valueLabelDisplay="auto"
        onChange={(e, newVal) => {
          dispatch({ sosMond: newVal });
        }}
      />
      <Typography>Liyue</Typography>
      <Slider
        step={1}
        min={1}
        max={10}
        marks
        getAriaLabel={() => {
          "Liyue Statue of the Seven Level";
        }}
        getAriaValueText={valuetext}
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
        value={params.sosLiyue}
        valueLabelDisplay="auto"
        onChange={(e, newVal) => {
          dispatch({ sosLiyue: newVal });
        }}
      />
      <Typography>Inazuma</Typography>
      <Slider
        step={1}
        min={1}
        max={10}
        getAriaLabel={() => {
          "Inazuma Statue of the Seven Level";
        }}
        getAriaValueText={valuetext}
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
        value={params.sosInazuma}
        valueLabelDisplay="auto"
        onChange={(e, newVal) => {
          dispatch({ sosInazuma: newVal });
        }}
      />
      <Typography>Sumeru</Typography>
      <Slider
        step={1}
        min={1}
        max={10}
        marks
        getAriaLabel={() => {
          "Sumeru Statue of the Seven Level";
        }}
        getAriaValueText={valuetext}
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
        value={params.sosSumeru}
        valueLabelDisplay="auto"
        onChange={(e, newVal) => {
          dispatch({ sosSumeru: newVal });
        }}
      />
    </Box>
  );
};

export default StatueOfTheSeven;
