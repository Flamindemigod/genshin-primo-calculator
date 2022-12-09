import Accordion from "./Accordian";
import QuestContainer from "./QuestContainer";
import { Box } from "@mui/material";
import quests from "../questsArchon";
import QuestSection from "./QuestSection";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import React from "react";

const ArchonQuests = ({ setPrimos }) => {
  const langContext = useContext(LangContext);
  let curId = 1;
  const ids = new WeakMap();

  function getObjectId(object) {
    if (ids.has(object)) {
      return ids.get(object);
    } else {
      const id = String(curId++);
      ids.set(object, id);
      return id;
    }
  }
  return (
    <Accordion title={langContext.archonQuests} icon={"/ArchonQuestIcon.webp"}>
      <Box className="p-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4">
        {quests.map((section) => {
          let questList = section
            .slice(1)
            .sort((a, b) =>
              a.title[langContext.lang].localeCompare(b.title[langContext.lang])
            );
          return (
            <React.Fragment key={getObjectId(section)}>
              <QuestSection title={section[0].chapterTitle[langContext.lang]} />
              {questList.map((quest) => {
                return (
                  <QuestContainer
                    key={getObjectId(quest)}
                    title={quest.title[langContext.lang]}
                    subTitle={quest.subtitle[langContext.lang]}
                    primos={quest.primos}
                    icon={quest.icon}
                    setPrimo={setPrimos}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </Box>
    </Accordion>
  );
};

export default ArchonQuests;
