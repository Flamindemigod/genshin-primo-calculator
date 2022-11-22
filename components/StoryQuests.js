import Accordion from "./Accordian";
import QuestContainer from "./QuestContainer";
import { Box } from "@mui/material";
import quests from "../questsStory";
import QuestSection from "./QuestSection";
import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
const StoryQuests = ({ setPrimos }) => {
  const langContext = useContext(LangContext);
  return (
    <Accordion title={langContext.storyQuests} icon={"/StoryQuestIcon.webp"}>
      <Box className="p-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4">
        {quests.map((section, index) => {
          let questList = section
            .slice(1)
            .sort((a, b) =>
              a.title[langContext.lang].localeCompare(b.title[langContext.lang])
            );
          return (
            <>
              <QuestSection
                key={section[0].chapterTitle[langContext.lang] + index}
                title={section[0].chapterTitle[langContext.lang]}
              />
              {questList.map((quest) => (
                <QuestContainer
                  key={quest.title[langContext.lang]}
                  title={quest.title[langContext.lang]}
                  subTitle={quest.subtitle[langContext.lang]}
                  primos={quest.primos}
                  icon={quest.icon}
                  setPrimo={setPrimos}
                />
              ))}
            </>
          );
        })}
      </Box>
    </Accordion>
  );
};

export default StoryQuests;
