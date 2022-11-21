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
import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
const InputForm = ({ params, dispatch }) => {
  const langContext = useContext(LangContext);
  return (
    <Paper className="p-4">
      <div className="text-xl font-sans">{langContext.inputParams}</div>
      <div className="p-4 grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-start">
        <TextField
          fullWidth
          label={langContext.primogems}
          type="number"
          sx={{
            "& .MuiInputAdornment-root": { flexShrink: 0 },
          }}
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
                  alt={langContext.primogems}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={langContext.genesisCrystals}
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
                  alt={langContext.genesisCrystals}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={langContext.intertwinedFates}
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
                  alt={langContext.intertwinedFates}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={langContext.masterlessStarglitter}
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
                  alt={langContext.masterlessStarglitter}
                />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label={langContext.currentPity}
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
          fullWidth
          label={langContext.noTestRuns}
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
          fullWidth
          label={langContext.noShopReset}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={params.numShopResets}
          onChange={(e) => {
            dispatch({ type: "setShopReset", value: e.target.value });
          }}
        />
        <TextField
          fullWidth
          label={langContext.noFuturePatch}
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
          label={langContext.endDate}
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
        <Box className="flex justify-center">
          {/* Welkin */}
          <FormControl>
            <FormControlLabel
              sx={{ height: 56 }}
              label={langContext.welkin}
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
            <Tooltip title={langContext.bpTooltip} arrow>
              <FormControlLabel
                sx={{ height: 56 }}
                label={langContext.gnosticHymn}
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

        <div className="col-span-full flex gap-4 items-center md:flex-row flex-col flex-wrap justify-center">
          <Typography>{langContext.spiralAbyssPrimos}</Typography>
          <FormControl sx={{ width: 300 }}>
            <FormControlLabel
              label={langContext.floor1to8}
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
                      backgroundColor: "var(--clr-primary-500)",
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
              label={langContext.floor9to12}
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
                      backgroundColor: "var(--clr-primary-500)",
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
          <Tooltip title={langContext.saTooltip} arrow>
            <TextField
              sx={{ width: 250 }}
              label={langContext.noSpiralAbyssResets}
              type="number"
              InputProps={{
                inputProps: { min: 0 },
              }}
              value={params.spiralAbyssResets}
              onChange={(e) => {
                dispatch({
                  type: "setSpiralAbyssReset",
                  value: e.target.value,
                });
              }}
            />
          </Tooltip>
        </div>
      </div>
    </Paper>
  );
};

export default InputForm;
