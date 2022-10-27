import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";

const OfferingProgressionSystems = ({ params, dispatch }) => {
  return (
    <Box className="p-4 grid md:grid-cols-4 justify-center gap-4 gap-y-12">
      <div>
        <Typography>Frostbearing Tree&apos;s Gratitude</Typography>
        <Box className="px-4 flex flex-col gap-4">
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 6"}
              control={
                <Checkbox
                  checked={params.opsFBT6}
                  onChange={(e) => {
                    dispatch({ opsFBT6: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
        </Box>
      </div>

      <div>
        <Typography>Enhance The Lumestone Adjuvant</Typography>
        <Box className="px-4 flex flex-col gap-4">
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 8"}
              control={
                <Checkbox
                  checked={params.opsLA8}
                  onChange={(e) => {
                    dispatch({ opsLA8: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
        </Box>
      </div>
      <div>
        <Typography>Sacred Sakura&apos;s Favor</Typography>
        <Box className="px-4 flex flex-col gap-4">
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 10"}
              control={
                <Checkbox
                  checked={params.opsSSF10}
                  onChange={(e) => {
                    dispatch({ opsSSF10: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 20"}
              control={
                <Checkbox
                  checked={params.opsSSF20}
                  onChange={(e) => {
                    dispatch({ opsSSF20: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 30"}
              control={
                <Checkbox
                  checked={params.opsSSF30}
                  onChange={(e) => {
                    dispatch({ opsSSF30: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 40"}
              control={
                <Checkbox
                  checked={params.opsSSF40}
                  onChange={(e) => {
                    dispatch({ opsSSF40: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 50"}
              control={
                <Checkbox
                  checked={params.opsSSF50}
                  onChange={(e) => {
                    dispatch({ opsSSF50: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
        </Box>
      </div>
      <div>
        <Typography>Vanarana&apos;s Favor</Typography>
        <Box className="px-4 flex flex-col gap-4">
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 10"}
              control={
                <Checkbox
                  checked={params.opsVF10}
                  onChange={(e) => {
                    dispatch({ opsVF10: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 20"}
              control={
                <Checkbox
                  checked={params.opsVF20}
                  onChange={(e) => {
                    dispatch({ opsVF20: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 30"}
              control={
                <Checkbox
                  checked={params.opsVF30}
                  onChange={(e) => {
                    dispatch({ opsVF30: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 40"}
              control={
                <Checkbox
                  checked={params.opsVF40}
                  onChange={(e) => {
                    dispatch({ opsVF40: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
          <FormControl sx={{ width: 250 }}>
            <FormControlLabel
              label={"Level 50"}
              control={
                <Checkbox
                  checked={params.opsVF50}
                  onChange={(e) => {
                    dispatch({ opsVF50: e.target.checked });
                  }}
                />
              }
            />
          </FormControl>
        </Box>
      </div>
    </Box>
  );
};

export default OfferingProgressionSystems;
