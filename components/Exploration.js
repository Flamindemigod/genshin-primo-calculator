import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import Image from "next/future/image";
import React from "react";
import OfferingProgressionSystems from "./OfferingProgressionSystems";
import StatueOfTheSeven from "./StatueOfTheSeven";

const Exploration = ({ params, dispatch }) => {
  return (
    <Paper elevation={3} className="p-4">
      <Typography className="font-sans text-xl">Exploration</Typography>
      <Box className="p-4">
        <Typography>Unlockables</Typography>
        <Box className="py-4 grid lg:grid-cols-3 gap-4">
          <TextField
            label={"Teleports"}
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
                    alt={"Teleport Waypoints"}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label={"Statues of the Seven"}
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
                    alt={"Statues of the Seven"}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Tooltip title="Including Resin and One-time Domains" arrow>
            <TextField
              label={"Domains"}
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
                      alt={"Domain Waypoints"}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Tooltip>
        </Box>
        <Box>
          <Typography>Completion</Typography>
          <Box className="py-4 grid ">
            <Tooltip title="Only One-time Domains" arrow>
              <TextField
                label={"Domains"}
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
                        alt={"Domains Completed"}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
          </Box>
        </Box>
        <Box>
          <Typography>Statue of The Seven Progression</Typography>
          <StatueOfTheSeven params={params} dispatch={dispatch} />
        </Box>
        <Box>
          <Typography>Offering Progression Systems</Typography>
          <OfferingProgressionSystems params={params} dispatch={dispatch} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Exploration;
