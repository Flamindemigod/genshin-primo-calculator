import React, { useContext } from "react";
import Accordion from "./Accordian";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LangContext } from "../contexts/LangContext";
import ArchonQuests from "./ArchonQuests";
import StoryQuests from "./StoryQuests";
import Hangouts from "./Hangouts";
import WorldQuestSeries from "./WorldQuestsSeries";
import WorldQuest from "./WorldQuest";

const Quests = ({ setPrimos }) => {
  const langContext = useContext(LangContext);
  return (
    <Accordion title={langContext.quests} icon={"/Quests.webp"}>
      <ArchonQuests setPrimos={setPrimos} />
      <StoryQuests setPrimos={setPrimos} />
      <Hangouts setPrimos={setPrimos} />
      <WorldQuestSeries setPrimos={setPrimos} />
      <WorldQuest setPrimos={setPrimos} />
    </Accordion>
  );
};

export default Quests;
