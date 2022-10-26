import React from "react";
import ArchonQuests from "./ArchonQuests";
import Accordion from "./Accordian";
import StoryQuests from "./StoryQuests";
import Hangouts from "./Hangouts";
import WorldQuestSeries from "./WorldQuestsSeries";
import WorldQuest from "./WorldQuest";
const Quests = ({ setPrimos }) => {
  return (
    <Accordion title={"Quests"} icon={"/Quests.webp"}>
      <ArchonQuests setPrimos={setPrimos} />
      <StoryQuests setPrimos={setPrimos} />
      <Hangouts setPrimos={setPrimos} />
      <WorldQuestSeries setPrimos={setPrimos} />
      <WorldQuest setPrimos={setPrimos} />
    </Accordion>
  );
};

export default Quests;
