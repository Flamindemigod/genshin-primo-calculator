import React from "react";
import ArchonQuests from "./ArchonQuests";
import Accordion from "./Accordian";
import StoryQuests from "./StoryQuests";
import Hangouts from "./Hangouts";
import WorldQuestSeries from "./WorldQuestsSeries";
import WorldQuest from "./WorldQuest";
const Quests = () => {
  return (
    <Accordion title={"Quests"} icon={"/Quests.webp"}>
      <ArchonQuests />
      <StoryQuests />
      <Hangouts />
      <WorldQuestSeries />
      <WorldQuest />
    </Accordion>
  );
};

export default Quests;
