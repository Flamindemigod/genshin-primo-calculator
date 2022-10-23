import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import QuestContainer from "../components/QuestContainer";
import { Box } from "@mui/material";
import Image from "next/future/image";
const Accordion = styled((props) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  paddingInline: "1rem",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
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

const CustomAccordian = ({ title, icon, children }) => {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel-content" id="panel-header">
        <div className="flex gap-2 items-center">
          <Image
            draggable={false}
            src={icon}
            width={32}
            height={32}
            alt={title}
          />
          {title}
        </div>
      </AccordionSummary>
      <div className="mt-2">{children}</div>
    </Accordion>
  );
};

export default CustomAccordian;
