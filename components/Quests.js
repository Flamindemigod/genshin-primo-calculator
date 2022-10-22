import React from "react";
import ArchonQuests from "./ArchonQuests";
import Accordion from "./Accordian";
import StoryQuests from "./StoryQuests";
const Quests = () => {
  return (
    <Accordion title={"Quests"} icon={"/Quests.webp"}>
      <ArchonQuests />
      <StoryQuests />
    </Accordion>
  );
};

export default Quests;
