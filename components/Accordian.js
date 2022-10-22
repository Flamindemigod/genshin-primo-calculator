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
    marginRight: "0px",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const CustomAccordian = ({ title, icon, children }) => {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div class="flex gap-2 items-center">
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
      <Box className="p-8 flex flex-row justify-evenly"></Box>
    </Accordion>
  );
};

export default CustomAccordian;
