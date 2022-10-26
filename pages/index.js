import { Box, Paper } from "@mui/material";
import { useEffect, useReducer } from "react";
import Hero from "../components/Hero";
import InputForm from "../components/InputForm";
import Quests from "../components/Quests";

const initalParamsState = {
  primos: null,
  genesis: null,
  fates: null,
  starglitter: null,
  battlePass: false,
  welkin: false,
  endDate: new Date(),
  mondSOSLevel: [0, 8],
  liyueSOSLevel: [0, 8],
  inazumaSOSLevel: [0, 10],
  sumeruSOSLevel: [0, 10],
  numBannersTestRuns: null,
  spiralAbyssValue17: null,
  spiralAbyssValue812: null,
  spiralAbyssResets: null,
  patchesBetween: null,
  webEvents: null,
};

function initialParamsReducer(state, action) {
  switch (action.type) {
    case "setPrimos":
      return { ...state, primos: action.value };
    case "setGenesis":
      return { ...state, genesis: action.value };
    case "setFates":
      return { ...state, fates: action.value };
    case "setStarglitter":
      return { ...state, starglitter: action.value };
    case "setEndDate":
      return { ...state, endDate: action.value };
    case "setBattlePass":
      return { ...state, battlePass: action.value };
    case "setWelkin":
      return { ...state, welkin: action.value };
    case "setAbyss17":
      return { ...state, spiralAbyssValue17: action.value };
    case "setAbyss812":
      return { ...state, spiralAbyssValue812: action.value };
  }
}

export default function Home({ wishDistribution, cumalativeWishDistribution }) {
  const [initialParams, initialParamsDispatch] = useReducer(
    initialParamsReducer,
    initalParamsState
  );
  return (
    <div>
      <Hero />
      <div className="flex flex-wrap flex-col lg:flex-row p-4 gap-4">
        <Box
          sx={{
            flex: "1 1 60%",
            overflow: "hidden",
            width: "-webkit-fill-available",
          }}
        >
          <InputForm params={initialParams} dispatch={initialParamsDispatch} />
          <Quests />
        </Box>
        <Box sx={{ flex: "1 1 25%", width: "-webkit-fill-available" }}>
          <Paper className="p-4" elevation={3}>
            <div className="flex flex-col gap-2 text-lg ">
              <div className="flex justify-between">
                <div>
                  Total Number of Primos{" "}
                  <span className="text-xs">(excluding Pity)</span>:
                </div>
                <div className="font-semibold text-primary-500">23840</div>
              </div>
              <div className="flex justify-between">
                <div>
                  Total Number of Wishes{" "}
                  <span className="text-xs">(including Pity)</span>:
                </div>
                <div className="font-semibold text-primary-500">151</div>
              </div>
              <div className="flex justify-between">
                <div>Starglitter Generated:</div>
                <div className="font-semibold text-primary-500">62</div>
              </div>
              <div className="flex justify-between">
                <div>Probabilty of Getting 5 Star if Guaranteed:</div>
                <div className="font-semibold text-primary-500">100%</div>
              </div>
              <div className="flex justify-between">
                <div>Probabilty of Getting 5 Star if not Guaranteed:</div>
                <div className="font-semibold text-primary-500">78.51%</div>
              </div>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getStaticProps = async () => {
  const cumulativeSum = (
    (sum) => (value) =>
      (sum += value)
  )(0);
  const data = await fetch("https://api.paimon.moe/wish?banner=200001").then(
    (data) => data.json()
  );
  const slicedData = data.pityCount.legendary.slice(0, 91);
  const sliceCopy = slicedData.slice(1, 91);
  slicedData.push(...sliceCopy);
  const totalWishes = slicedData.reduce((partialSum, a) => partialSum + a, 0);
  const cumalativeWishes = slicedData.map(cumulativeSum);
  const cumalativewishDistribution = cumalativeWishes.map(
    (datapoint) => (datapoint / totalWishes) * 100 * 2
  );
  console.log(slicedData);
  return {
    props: {
      wishDistribution: slicedData,
      cumalativeWishDistribution: cumalativewishDistribution,
    },
  };
};
