import {
  Paper,
  TextField,
  InputAdornment,
  Checkbox,
  FormControl,
  FormControlLabel,
  Slider,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/future/image";
import React from "react";
const InputForm = ({ params, dispatch }) => {
  return (
    <Paper className="p-4">
      <div className="text-xl font-sans">Input Parameters</div>
      <div className="p-4 flex gap-4 flex-wrap justify-center items-start">
        <TextField
          label={"Primogems"}
          type="number"
          sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
          value={params.primos}
          onChange={(e) => {
            dispatch({ type: "setPrimos", value: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  draggable={false}
                  src={"/Item_Primogem.webp"}
                  width={32}
                  height={32}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={"Genesis Crystals"}
          type="number"
          sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
          value={params.genesis}
          onChange={(e) => {
            dispatch({ type: "setGenesis", value: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  draggable={false}
                  src={"/Item_Genesis_Crystal.webp"}
                  width={32}
                  height={32}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={"Intertwined Fates"}
          type="number"
          sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
          value={params.fates}
          onChange={(e) => {
            dispatch({ type: "setFates", value: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  draggable={false}
                  src={"/Item_Intertwined_Fate.webp"}
                  width={32}
                  height={32}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={"Masterless Starglitter"}
          type="number"
          sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
          value={params.starglitter}
          onChange={(e) => {
            dispatch({ type: "setStarglitter", value: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Image
                  draggable={false}
                  src={"/Item_Masterless_Starglitter.webp"}
                  width={32}
                  height={32}
                />
              </InputAdornment>
            ),
          }}
        />
        <DatePicker
          id="counterEndDate"
          label="End date"
          inputFormat="dd/MM/yyyy"
          value={params.endDate}
          onChange={(date) => {
            dispatch({ type: "setEndDate", value: date });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={params?.inputProps?.placeholder}
            />
          )}
        />
        {/* Welkin */}
        <FormControl>
          <FormControlLabel
            sx={{ height: 56 }}
            label={"Welkin"}
            labelPlacement={"end"}
            control={
              <Checkbox
                checked={params.welkin}
                onChange={(e) => {
                  dispatch({ type: "setWelkin", value: e.target.checked });
                }}
              />
            }
          />
        </FormControl>
        {/* Battle Pass */}
        <FormControl>
          <FormControlLabel
            sx={{ height: 56 }}
            label={"Battle Pass"}
            labelPlacement={"end"}
            control={
              <Checkbox
                checked={params.battlePass}
                onChange={(e) => {
                  dispatch({ type: "setBattlePass", value: e.target.checked });
                }}
              />
            }
          />
        </FormControl>
        <div className="flex gap-4 items-center md:flex-row flex-col">
          <Typography>Spiral Abyss Primos</Typography>
          <FormControl sx={{ width: 300 }}>
            <FormControlLabel
              sx={{ height: 56 }}
              label={"Floor 1 to 7"}
              labelPlacement={"bottom"}
              control={
                <Slider
                  step={100}
                  min={0}
                  max={2100}
                  sx={{
                    "& .MuiSlider-valueLabel": {
                      lineHeight: 1.2,
                      fontSize: 12,
                      background: "unset",
                      padding: 0,
                      width: 32,
                      height: 32,
                      borderRadius: "50% 50% 50% 0",
                      backgroundColor: "#29c9e5",
                      transformOrigin: "bottom left",
                      transform:
                        "translate(50%, -100%) rotate(-45deg) scale(0)",
                      "&:before": { display: "none" },
                      "&.MuiSlider-valueLabelOpen": {
                        transform:
                          "translate(50%, -100%) rotate(-45deg) scale(1)",
                      },
                      "& > *": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                  marks
                  value={params.spiralAbyssValue17}
                  onChange={(e, newVal) => {
                    dispatch({ type: "setAbyss17", value: newVal });
                  }}
                  valueLabelDisplay="auto"
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 300 }}>
            <FormControlLabel
              sx={{ height: 56 }}
              label={"Floor 8 to 12"}
              labelPlacement={"bottom"}
              control={
                <Slider
                  step={50}
                  min={0}
                  max={300}
                  marks
                  sx={{
                    "& .MuiSlider-valueLabel": {
                      lineHeight: 1.2,
                      fontSize: 12,
                      background: "unset",
                      padding: 0,
                      width: 32,
                      height: 32,
                      borderRadius: "50% 50% 50% 0",
                      backgroundColor: "#29c9e5",
                      transformOrigin: "bottom left",
                      transform:
                        "translate(50%, -100%) rotate(-45deg) scale(0)",
                      "&:before": { display: "none" },
                      "&.MuiSlider-valueLabelOpen": {
                        transform:
                          "translate(50%, -100%) rotate(-45deg) scale(1)",
                      },
                      "& > *": {
                        transform: "rotate(45deg)",
                      },
                    },
                  }}
                  valueLabelDisplay="auto"
                  onChange={(e, newVal) => {
                    dispatch({ type: "setAbyss812", value: newVal });
                  }}
                />
              }
            />
          </FormControl>
        </div>
        <div>
          <Typography>Mondstat Statue of the Seven</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default InputForm;