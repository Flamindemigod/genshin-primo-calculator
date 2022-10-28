import { Paper, Typography } from "@mui/material";
import React from "react";
import EventContainer from "../components/EventContainer";
import events from "../events";
const Events = ({ setPrimo, setFate }) => {
  return (
    <Paper elevation={3} className="p-4">
      <Typography className="text-xl font-sans">Events</Typography>
      <div className="flex flex-col gap-4 p-4">
        {events.map((event) => (
          <EventContainer
            key={event.name}
            name={event.name}
            bgImage={event.image}
            gradientColor={event.colour}
            startDate={event.start}
            endDate={event.end}
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
