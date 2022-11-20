import { Box } from "@mui/material";
import React from "react";

const QuestSection = ({ title }) => {
  return (
    <Box
      className="bg-black bg-opacity-50 p-2 rounded-md
    "
      sx={{ gridColumn: "1/-1" }}
    >
      {title}
    </Box>
  );
};

export default QuestSection;
