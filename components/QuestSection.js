import { Box } from "@mui/material";
import React from "react";

const QuestSection = ({ title }) => {
  return <Box sx={{ gridColumn: "1/-1" }}>{title}</Box>;
};

export default QuestSection;
