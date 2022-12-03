import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import QuestContainer from "../components/QuestContainer";
import { Box, Button } from "@mui/material";
import Image from "next/future/image";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
const Accordion = styled((props) => (
  <MuiAccordion
    // TransitionProps={{ unmountOnExit: true }}
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  "&:before": {
    display: "none",
  },
  "& > .MuiCollapse-root": {
    backgroundColor: "transparent",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#121212",
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    marginLeft: theme.spacing(1),
  },
}));

const CustomAccordian = ({ title, icon, isMain, children }) => {
  const langContext = useContext(LangContext);
  return (
    <Accordion>
      <AccordionSummary aria-controls={`${title}-content`} id={title}>
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <Image
              className="object-contain"
              draggable={false}
              src={icon}
              width={32}
              height={32}
              alt={title}
            />
            {title}
          </div>
          {/* <Button
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {isMain ? langContext.resetAll : langContext.reset}
          </Button> */}
        </div>
      </AccordionSummary>
      <div className="mt-2 bg-transparent">{children}</div>
    </Accordion>
  );
};

export default CustomAccordian;
