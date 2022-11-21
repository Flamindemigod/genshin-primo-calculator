import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import EventContainer from "../components/EventContainer";
import { LangContext } from "../contexts/LangContext";
import events from "../events";
const Events = ({ setPrimo, setFate }) => {
  const langContext = useContext(LangContext);
  return (
    <Paper elevation={3} className="p-4">
      <Typography className="text-xl font-sans">
        {langContext.events}
      </Typography>
      <div className="flex flex-col gap-4 p-4">
        {events.map((event) => (
          <EventContainer
            key={event.name[langContext.lang]}
            name={event.name[langContext.lang]}
            bgImage={event.image}
            startDate={event.start[langContext.lang]}
            endDate={event.end[langContext.lang]}
            hoyolabLink={event.link}
            primos={event.primos}
            fates={event.fates}
            setPrimo={setPrimo}
            setFate={setFate}
          />
        ))}
      </div>
    </Paper>
  );
};

export default Events;
