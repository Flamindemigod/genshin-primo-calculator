import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/future/image";
import { useState } from "react";
const ExplainationDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        First time here?
      </Button>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Welcome to Genshin Primo Planner</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col ">
            <div className="flex gap-2 items-center">
              Primogems. Shiny stars every Genshin player wishes they had more
              of besides spending money to obtain.
              <Image
                src="/MonaMora.png"
                alt="Mona Finds Mora"
                width={52}
                height={52}
              />
            </div>
            <div>
              This website aims to provide players with an exact amount of
              primogems obtainable in the current patch or an estimated amount
              in future patches. Providing a tool for players to clear as much
              in-game content for their wishing needs.
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExplainationDialog;
