import Hero from "../components/Hero";
import Accordion from "../components/Accordian";
export default function Home() {
  return (
    <div>
      <Hero />
      <Accordion title={"Archon Quests"} icon={"/ArchonQuestIcon.webp"} />
    </div>
  );
}
