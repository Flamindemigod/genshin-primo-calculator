import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import Image from "next/future/image";
import { useState } from "react";
const ExplainationDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        First time here? Click me!
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
        <DialogTitle>Welcome to Genshin Primo Planner</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-2">
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
              in-game content to fullfil their wishing desires.
              <span className="text-primary-500">
                This tool however does not account for primogems from Redeemable
                Codes, Achievements and Chests.
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
              <div>
                For Desktop Users, The site has an Input Column and an Output
                Column. <br />
                For Mobile Users, the Output is situated at the bottom of the
                page. <br />
                The Output column contains information such as how many primos
                collected, total fates collected, total number of wishes, and
                probabilites of geting featured 5 star. <br />
              </div>
              <Image
                src="/Annotation 2022-11-16 204609.png"
                alt="Output field view"
                width={300}
                height={150}
              />
            </div>
            <div>
              The Input column is split into categories such as Input
              Parameters, Events, Exploration, Serenitea Teapot, List of Gift
              Sets, and Quests. <br />
              The Output panel automatically updates when you update the Input
              Column.
              <br />
              When inputting data into Input Parameters most of the parameters
              can be found either in the wishing menu or in the shop. For the
              End Date param, it assumes you&apos;ve done your dailies for the
              day and starts counting from the next day on.
              <br />
              As for the rest of the Input column, you can select events, quests
              and gift sets you&apos;re going to do. And for text fields and
              sliders you should be inputting how many you are going to do. Most
              of the sliders allow you to set a minimum value (What you&apos;ve
              done) and a maximum value (What you&apos;re going to do).
            </div>
            <div>
              And thats about it. If you got any questions or suggestions feel
              free to hit me up on Discord at{" "}
              <span className="text-primary-500">FlaminDemigod#2754</span>
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
