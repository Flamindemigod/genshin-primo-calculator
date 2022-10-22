import Accordion from "./Accordian";
import QuestContainer from "./QuestContainer";
import { Box } from "@mui/material";
import quests from "../quests";
import QuestSection from "./QuestSection";
const ArchonQuests = () => {
  return (
    <Accordion title={"Archon Quests"} icon={"/ArchonQuestIcon.webp"}>
      <Box className="p-8 w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-4">
        {quests.archon.map((quest) =>
          quest.section ? (
            <QuestSection title={quest.section} />
          ) : (
            <QuestContainer
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

export default ArchonQuests;
