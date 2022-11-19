import sets from "../teapot";
import TeapotSet from "./TeapotSet";

const IndoorSets = ({ setPrimos }) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {sets.outdoor.map((set) => (
        <TeapotSet set={set} key={set.name} setPrimos={setPrimos} />
      ))}
    </div>
  );
};

export default IndoorSets;
