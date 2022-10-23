import Accordion from "./Accordian";
import QuestContainer from "./QuestContainer";
import { Box } from "@mui/material";
import quests from "../quests";
import QuestSection from "./QuestSection";
const StoryQuests = () => {
  return (
    <Accordion title={"Story Quests"} icon={"/StoryQuestIcon.webp"}>
      <Box className="p-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4">
        {quests.story.map((quest) =>
          quest.section ? (
            <QuestSection key={quest.section} title={quest.section} />
          ) : (
            <QuestContainer
              key={quest.title}
              title={quest.title}
              subTitle={quest.subtitle}
              primos={quest.primos}
              icon={quest.icon}
            />
          )
        )}
      </Box>
    </Accordion>
  );
};

export default StoryQuests;
