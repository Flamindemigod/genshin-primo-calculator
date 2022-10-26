import { Box, Paper } from "@mui/material";
import { max } from "date-fns";
import { useEffect, useReducer, useState } from "react";
import Exploration from "../components/Exploration";
import Hero from "../components/Hero";
import InputForm from "../components/InputForm";
import Quests from "../components/Quests";

const initialParamsState = {
  primos: null,
  genesis: null,
  fates: null,
  starglitter: null,
  battlePass: false,
  welkin: false,
  pity: null,
  endDate: new Date(),
  numBannersTestRuns: null,
  numShopResets: null,
  spiralAbyssValue18: null,
  spiralAbyssValue912: null,
  spiralAbyssResets: null,
  patchesBetween: null,
};

function initialParamsReducer(state, action) {
  switch (action.type) {
    case "setPrimos":
      return { ...state, primos: parseInt(action.value ? action.value : 0) };
    case "setGenesis":
      return { ...state, genesis: parseInt(action.value ? action.value : 0) };
    case "setFates":
      return { ...state, fates: parseInt(action.value ? action.value : 0) };
    case "setStarglitter":
      return {
        ...state,
        starglitter: parseInt(action.value ? action.value : 0),
      };
    case "setEndDate":
      return { ...state, endDate: action.value };
    case "setBattlePass":
      return { ...state, battlePass: action.value };
    case "setWelkin":
      return { ...state, welkin: action.value };
    case "setAbyss18":
      return {
        ...state,
        spiralAbyssValue18: parseInt(action.value ? action.value : 0),
      };
    case "setAbyss912":
      return {
        ...state,
        spiralAbyssValue912: parseInt(action.value ? action.value : 0),
      };
    case "setSpiralAbyssReset":
      return {
        ...state,
        spiralAbyssResets: parseInt(action.value ? action.value : 0),
      };
    case "setBanners":
      return {
        ...state,
        numBannersTestRuns: parseInt(action.value ? action.value : 0),
      };
    case "setPatches":
      return {
        ...state,
        patchesBetween: parseInt(action.value ? action.value : 0),
      };
    case "setShopReset":
      return {
        ...state,
        numShopResets: parseInt(action.value ? action.value : 0),
      };
    case "setPity":
      return { ...state, pity: action.value };
  }
}
const initialExplortaionState = {
  numTeleports: null,
  numSOS: null,
  numDomains: null,
  numDomainOneTime: null,
  sosMond: [0, 10],
  sosLiyue: [0, 10],
  sosInazuma: [0, 10],
  sosSumeru: [0, 10],
  opsFBT6: false,
  opsLA8: false,
  opsSSF10: false,
  opsSSF20: false,
  opsSSF30: false,
  opsSSF40: false,
  opsSSF50: false,
  opsVF10: false,
  opsVF20: false,
  opsVF30: false,
  opsVF40: false,
  opsVF50: false,
};

function ExplortaionReducer(state, action) {
  return { ...state, ...action };
}

function getNumberOfDays(endDate) {
  const today = new Date().setHours(0, 0, 0, 0);
  console.log(today);
  const diffrence = endDate.getTime() - today;
  const diffrenceDays = parseInt(diffrence / (1000 * 3600 * 24));
  return diffrenceDays;
}

export default function Home({ wishDistribution, cumalativeWishDistribution }) {
  const [initialParams, initialParamsDispatch] = useReducer(
    initialParamsReducer,
    initialParamsState
  );
  const [explorationParams, explorationParamsDispatch] = useReducer(
    ExplortaionReducer,
    initialExplortaionState
  );

  const [questPrimos, setQuestPrimos] = useState(0);

  const [output, setOutput] = useState({
    primogems: 0,
    fates: 0,
    wishes: 0,
    starglitter: 0,
    probability5StarGuaranteed: 0,
    probability5Star: 0,
  });

  useEffect(() => {
    const primos =
      (initialParams.primos ? initialParams.primos : 0) +
      (initialParams.genesis ? initialParams.genesis : 0) +
      questPrimos +
      initialParams.numBannersTestRuns * 20 +
      initialParams.patchesBetween * 300 +
      (initialParams.battlePass
        ? (initialParams.patchesBetween + 1) * 680
        : 0) +
      initialParams.spiralAbyssValue18 +
      initialParams.spiralAbyssValue912 *
        (initialParams.spiralAbyssResets + 1) +
      getNumberOfDays(initialParams.endDate) * 60 +
      (initialParams.welkin ? getNumberOfDays(initialParams.endDate) * 90 : 0);
    const fates =
      (initialParams.fates ? initialParams.fates : 0) +
      (initialParams.battlePass ? (initialParams.patchesBetween + 1) * 4 : 0) +
      (initialParams.numShopResets ? initialParams.numShopResets * 5 : 0);
    const wishes =
      parseInt(primos / 160) +
      parseInt(fates) +
      parseInt(initialParams.pity ? initialParams.pity : 0);
    setOutput((state) => ({
      ...state,
      primogems: primos,
      fates: fates,
      wishes: wishes,
    }));
  }, [initialParams, questPrimos]);

  return (
    <div>
      <Hero />
      <div className="flex flex-wrap flex-col lg:flex-row p-4 gap-4">
        <Box
          className="flex flex-col gap-2"
          sx={{
            flex: "1 1 60%",
            overflow: "hidden",
            width: "-webkit-fill-available",
          }}
        >
          <InputForm params={initialParams} dispatch={initialParamsDispatch} />
          <Exploration
            params={explorationParams}
            dispatch={explorationParamsDispatch}
          />
          <Quests setPrimos={setQuestPrimos} />
        </Box>
        <Box sx={{ flex: "1 1 25%", width: "-webkit-fill-available" }}>
          <Paper className="p-4" elevation={3}>
            <div className="flex flex-col gap-2 text-lg ">
              <div className="flex justify-between">
                <div>
                  Total Number of Primos{" "}
                  <span className="text-xs">(excluding Pity)</span>:
                </div>
                <div className="font-semibold text-primary-500">
                  {output.primogems}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  Total Number of Fates{" "}
                  <span className="text-xs">(excluding Pity)</span>:
                </div>
                <div className="font-semibold text-primary-500">
                  {output.fates}
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  Total Number of Wishes{" "}
                  <span className="text-xs">(including Pity)</span>:
                </div>
                <div className="font-semibold text-primary-500">
                  {output.wishes}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Starglitter Generated:</div>
                <div className="font-semibold text-primary-500">
                  {output.starglitter}
                </div>
              </div>
              <div className="flex justify-between">
                <div>Probabilty of Getting 5 Star if Guaranteed:</div>
                <div className="font-semibold text-primary-500">
                  {output.probability5StarGuaranteed}%
                </div>
              </div>
              <div className="flex justify-between">
                <div>Probabilty of Getting 5 Star if not Guaranteed:</div>
                <div className="font-semibold text-primary-500">
                  {output.probability5Star}%
                </div>
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
  return {
    props: {
      wishDistribution: slicedData,
      cumalativeWishDistribution: cumalativewishDistribution,
    },
  };
};
