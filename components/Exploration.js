import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import Image from "next/future/image";
import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import OfferingProgressionSystems from "./OfferingProgressionSystems";
import StatueOfTheSeven from "./StatueOfTheSeven";

const Exploration = ({ params, dispatch }) => {
  const langContext = useContext(LangContext);
  return (
    <Paper elevation={3} className="p-4">
      <Typography className="font-sans text-xl">
        {langContext.exploration}
      </Typography>
      <Box className="p-4">
        <Typography>{langContext.unlockables}</Typography>
        <Box className="py-4 grid lg:grid-cols-3 gap-4">
          <TextField
            label={langContext.teleports}
            type="number"
            sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
            value={params.numTeleports}
            onChange={(e) => {
              dispatch({ numTeleports: e.target.value });
            }}
            InputProps={{
              inputProps: { min: 0 },
              endAdornment: (
                <InputAdornment position="end">
                  <Image
                    draggable={false}
                    src={"/Teleport.webp"}
                    width={32}
                    height={32}
                    alt={langContext.teleports}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={langContext.sos}
            type="number"
            sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
            value={params.numSOS}
            onChange={(e) => {
              dispatch({ numSOS: e.target.value });
            }}
            InputProps={{
              inputProps: { min: 0 },
              endAdornment: (
                <InputAdornment position="end">
                  <Image
                    draggable={false}
                    src={"/StatueOfTheSeven.webp"}
                    width={32}
                    height={32}
                    alt={langContext.sos}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip title={langContext.do} arrow>
            <TextField
              label={langContext.domain}
              type="number"
              sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
              value={params.numDomains}
              onChange={(e) => {
                dispatch({ numDomains: e.target.value });
              }}
              InputProps={{
                inputProps: { min: 0 },
                endAdornment: (
                  <InputAdornment position="end">
                    <Image
                      draggable={false}
                      src={"/Domain.webp"}
                      width={32}
                      height={32}
                      alt={langContext.domain}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Tooltip>
        </Box>
        <Box>
          <Typography>{langContext.completion}</Typography>
          <Box className="py-4 grid ">
            <Tooltip title={langContext.domaintooltip2} arrow>
              <TextField
                label={langContext.domain}
                type="number"
                sx={{ "& .MuiInputAdornment-root": { flexShrink: 0 } }}
                value={params.numDomainOneTime}
                onChange={(e) => {
                  dispatch({ numDomainOneTime: e.target.value });
                }}
                InputProps={{
                  inputProps: { min: 0 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Image
                        draggable={false}
                        src={"/DomainOneTime.webp"}
                        width={32}
                        height={32}
                        alt={langContext.domain}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box>
          <Typography>{langContext.sosProgression}</Typography>
          <StatueOfTheSeven params={params} dispatch={dispatch} />
        </Box>
        <Box>
          <Typography>{langContext.ops}</Typography>
          <OfferingProgressionSystems params={params} dispatch={dispatch} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Exploration;
