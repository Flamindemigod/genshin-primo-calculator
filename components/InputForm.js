import {
  Paper,
  TextField,
  InputAdornment,
  Checkbox,
  FormControl,
  FormControlLabel,
  Slider,
  Typography,
  Tooltip,
  Box,
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
            inputProps: { min: 0 },

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
            inputProps: { min: 0 },
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
            inputProps: { min: 0 },

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
            inputProps: { min: 0 },

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
        <TextField
          sx={{ width: 250 }}
          label={"Current Pity"}
          InputProps={{
            inputProps: { min: 0 },
          }}
          type="number"
          value={params.pity}
          onChange={(e) => {
            dispatch({ type: "setPity", value: e.target.value });
          }}
        />
        <TextField
          sx={{ width: 250 }}
          label={"No. of Test Runs"}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={params.numBannersTestRuns}
          onChange={(e) => {
            dispatch({ type: "setBanners", value: e.target.value });
          }}
        />
        <TextField
          sx={{ width: 250 }}
          label={"No. of Shop Resets"}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={params.numShopReset}
          onChange={(e) => {
            dispatch({ type: "setShopReset", value: e.target.value });
          }}
        />
        <TextField
          sx={{ width: 250 }}
          label={"No. of Future Patches"}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={params.patchesBetween}
          onChange={(e) => {
            dispatch({ type: "setPatches", value: e.target.value });
          }}
        />

        <DatePicker
          id="counterEndDate"
          label="End date"
          minDate={new Date()}
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
        <Box className="flex justify-center" sx={{ width: 250 }}>
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
            <Tooltip title="Paid Tier of Battle Pass" arrow>
              <FormControlLabel
                sx={{ height: 56 }}
                label={"Gnostic Hymn"}
                labelPlacement={"end"}
                control={
                  <Checkbox
                    checked={params.battlePass}
                    onChange={(e) => {
                      dispatch({
                        type: "setBattlePass",
                        value: e.target.checked,
                      });
                    }}
                  />
                }
              />
            </Tooltip>
          </FormControl>
        </Box>

        <div className="flex gap-4 items-center md:flex-row flex-col flex-wrap justify-center">
          <Typography>Spiral Abyss Primos</Typography>
          <FormControl sx={{ width: 300 }}>
            <FormControlLabel
              label={"Floor 1 to 8"}
              labelPlacement={"bottom"}
              control={
                <Slider
                  step={100}
                  min={0}
                  max={2400}
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
                  value={params.spiralAbyssValue18}
                  onChange={(e, newVal) => {
                    dispatch({ type: "setAbyss18", value: newVal });
                  }}
                  valueLabelDisplay="auto"
                />
              }
            />
          </FormControl>

          <FormControl sx={{ width: 300 }}>
            <FormControlLabel
              label={"Floor 9 to 12"}
              labelPlacement={"bottom"}
              control={
                <Slider
                  step={50}
                  min={0}
                  max={600}
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
                  value={params.spiralAbyssValue912}
                  valueLabelDisplay="auto"
                  onChange={(e, newVal) => {
                    dispatch({ type: "setAbyss912", value: newVal });
                  }}
                />
              }
            />
          </FormControl>
          <TextField
            sx={{ width: 250 }}
            label={"No. of Spiral Abyss Resets"}
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={params.spiralAbyssResets}
            onChange={(e) => {
              dispatch({ type: "setSpiralAbyssReset", value: e.target.value });
            }}
          />
        </div>
      </div>
    </Paper>
  );
};

export default InputForm;
