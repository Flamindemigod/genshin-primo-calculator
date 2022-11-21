import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/future/image";
import { useContext, useState } from "react";
import { LangContext } from "../contexts/LangContext";
const ExplainationDialog = () => {
  const langContext = useContext(LangContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        {langContext.explainationButton}
      </Button>
      <Dialog
        disableScrollLock={true}
        fullWidth
        maxWidth={"xl"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>{langContext.explaination.title}</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              {langContext.explaination.para1line1}
              <Image
                src="/MonaMora.png"
                alt="Mona Finds Mora"
                width={52}
                height={52}
              />
            </div>
            <div>
              {langContext.explaination.para2line1}
              <span className="text-primary-500">
                {langContext.explaination.para2line1highlight}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
              <div>
                {langContext.explaination.para3line1} <br />
                {langContext.explaination.para3line2} <br />
                {langContext.explaination.para3line3} <br />
              </div>
              <Image
                src="/Annotation 2022-11-16 204609.png"
                alt="Output field view"
                width={300}
                height={150}
              />
            </div>
            <div>
              {langContext.explaination.para4line1} <br />
              {langContext.explaination.para4line2}
              <br />
              {langContext.explaination.para4line3}
              <br />
              {langContext.explaination.para4line4}
            </div>
            <div>
              {langContext.explaination.para5line1}
              <span className="text-primary-500">
                {langContext.explaination.para5line1highlight}
              </span>
            </div>
            <div className="w-full h-72 md:h-[32rem] relative">
              <Image
                fill
                src={"/BG.webp"}
                draggable={false}
                sizes={"80vw"}
                className="object-contain"
                alt={
                  "Raiden, Venti, Zhongli and Lumine asking for Dango, Wine, Mora and Primogems respectively"
                }
              />
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExplainationDialog;
