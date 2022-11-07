import Accordion from "./Accordian";
import QuestContainer from "./QuestContainer";
import { Box } from "@mui/material";
import quests from "../questWorld";
import QuestSection from "./QuestSection";
const WorldQuest = ({ setPrimos }) => {
  return (
    <Accordion title={"World Quests"} icon={"/WorldQuestIcon.webp"}>
      <Box className="p-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4">
        {quests.map((section, index) => {
          section[Object.keys(section)[0]].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          return (
            <>
              <QuestSection
                key={Object.keys(section)[0] + index}
                title={Object.keys(section)[0]}
              />
              {section[Object.keys(section)[0]].map((quest) => (
                <QuestContainer
                  key={quest.title}
                  title={quest.title}
                  subTitle={quest.subtitle}
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

export default WorldQuest;
