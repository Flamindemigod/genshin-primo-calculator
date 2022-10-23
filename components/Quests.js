import React from "react";
import ArchonQuests from "./ArchonQuests";
import Accordion from "./Accordian";
import StoryQuests from "./StoryQuests";
import Hangouts from "./Hangouts";
const Quests = () => {
  return (
    <Accordion title={"Quests"} icon={"/Quests.webp"}>
      <ArchonQuests />
      <StoryQuests />
      <Hangouts />
    </Accordion>
  );
};

export default Quests;
