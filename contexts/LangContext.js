import { createContext } from "react";

const langs = {
  en: {
    lang: "en",
    langFull: "English",
    siteTitle: "Genshin Primo Planner",
    title: "Welcome to Delta and Flamin's Genshin Primo Planner",
    explainationButton: "First time here? Click me!",
    explaination: {
      title: "Welcome to Genshin Primo Planner",
      para1line1:
        "Primogems... Shiny stars every genshin player wishes they had more of",
      para2line1:
        "This website aims to provide players with an exact amount of primogems obtainable in the current patch (or an estimated amount in future patches), so that players can clear as much in-game content to fulfil their wishing desires.",
      // "This website aims to provide players with an exact amount of primogems obtainable in the current patch or an estimated amount in future patches. Providing a tool for players to clear as much in-game content to fulfil their wishing desires.",
      para2line1highlight:
        "This tool however does not account for primogems from Redeemable Codes, Achievements and Chests.",
      para3line1:
        "For Desktop Users, The site has an Input Column and an Output Column.",
      para3line2:
        "For Mobile Users, the Output is situated at the bottom of the page.",
      para3line3:
        "The Output column contains information such as how many primos collected, total fates collected, total number of wishes, and probabilites of geting featured 5 star.",
      para4line1:
        "The Input column is split into categories such as Input Parameters, Events, Exploration, Serenitea Teapot, List of Gift Sets, and Quests.",
      para4line2:
        "The Output panel automatically updates when you update the Input Column.",
      para4line3:
        "When inputting data into Input Parameters most of the parameters can be found either in the wishing menu or in the shop. For the End Date param, it assumes you've done your dailies for the day and starts counting from the next day on.",
      para4line4:
        "As for the rest of the Input column, you can select events, quests and gift sets you're going to do. And for text fields and sliders you should be inputting how many you are going to do. Most of the sliders allow you to set a minimum value (What you've done) and a maximum value (What you're going to do).",
      para5line1:
        "And thats about it. If you got any questions or suggestions feel free to hit me up on Discord at ",
      para5line1highlight: "FlaminDemigod#2754",
    },
    scrollDown: "Scroll down to get started",
    inputParams: "Input Parameters",
    primogems: "Primogems",
    genesisCrystals: "Genesis Crystals",
    intertwinedFates: "Interwined Fates",
    masterlessStarglitter: "Masterless Starglitter",
    currentPity: "Current Pity",
    noTestRuns: "No. of Test Runs",
    noShopReset: "No. of Shop Resets",
    noFuturePatch: "No. of Future Patches",
    endDate: "End date",
    welkin: "Welkin Moon",
    gnosticHymn: "Gnostic Hymn",
    bpTooltip: "Paid Tier of Battle Pass",
    spiralAbyssPrimos: "Spiral Abyss Primos",
    floor1to8: "Floor 1 to 8",
    floor9to12: "Floor 9 to 12",
    noSpiralAbyssResets: "No. of Spiral Abyss Resets",
    saTooltip:
      "If you have completed the current abyss rotation reduce this value by 1",
    events: "Events",
    exploration: "Exploration",
    unlockables: "Unlockables",
    teleports: "Teleports",
    sos: "Statues of the Seven",
    domain: "Domains",
    domaintooltip1: "Including Resin and One-time Domains",
    domaintooltip2: "Only One-time Domains",
    completion: "Completion",
    sosProgression: "Statue of the Seven Progression",
    level: "Level",
    mond: "Mondstat",
    liyue: "Liyue",
    inazuma: "Inazuma",
    sumeru: "Sumeru",
    ops: "Offering Progression Systems",
    fbt: "Frostbearing Tree's Gratitude",
    lma: "Enhance The Lumestone Adjuvant",
    ssf: "Sacred Sakura's Favor",
    vrf: "Vanarana's Favor",
    teapot: "Serenitea Teapot",
    trustRank: "Trust Rank",
    listOfGiftSets: "List of Gift Sets",
    indoor: "Indoor",
    outdoor: "Outdoor",
    output: {
      line1: "Total Number of Primos",
      line2: "Total Number of Fates",
      line3: "Total Number of Wishes",
      line4: "Probabilty of Getting 5 Star if Guaranteed",
      line5: "Probabilty of Getting 5 Star if not Guaranteed",
      includingPity: "including pity",
      excludingPity: "excluding pity",
    },
  },
  // de: {
  //   lang: "de",
  //   langFull: "Deutsch",
  //   siteTitle: "Genshin Primo Planner",
  //   title: "Willkommen bei Delta und Flamin's Genshin Primo Planner",
  //   explainationButton: "First time here? Click me!",
  //   explaination: {
  //     title: "Welcome to Genshin Primo Planner",
  //     para1line1:
  //       "Primogems... Shiny stars every genshin player wishes they had more of",
  //     para2line1:
  //       "This website aims to provide players with an exact amount of primogems obtainable in the current patch (or an estimated amount in future patches), so that players can clear as much in-game content to fulfil their wishing desires.",
  //     para2line1highlight:
  //       "This tool however does not account for primogems from Redeemable Codes, Achievements, Web Events and Chests.",
  //     para3line1:
  //       "For Desktop Users, The site has an Input Column and an Output Column.",
  //     para3line2:
  //       "For Mobile Users, the Output is situated at the bottom of the page.",
  //     para3line3:
  //       "The Output column contains information such as how many primos collected, total fates collected, total number of wishes, and probabilites of geting featured 5 star.",
  //     para4line1:
  //       "The Input column is split into categories such as Input Parameters, Events, Exploration, Serenitea Teapot, List of Gift Sets, and Quests.",
  //     para4line2:
  //       "The Output panel automatically updates when you update the Input Column.",
  //     para4line3:
  //       "When inputting data into Input Parameters most of the parameters can be found either in the wishing menu or in the shop. For the End Date param, it assumes you've done your dailies for the day and starts counting from the next day on.",
  //     para4line4:
  //       "As for the rest of the Input column, you can select events, quests and gift sets you're going to do. And for text fields and sliders you should be inputting how many you are going to do. Most of the sliders allow you to set a minimum value (What you've done) and a maximum value (What you're going to do).",
  //     para5line1:
  //       "And thats about it. If you got any questions or suggestions feel free to hit me up on Discord at ",
  //     para5line1highlight: "FlaminDemigod#2754",
  //   },
  //   scrollDown: "Scroll down to get started",
  //   inputParams: "Input Parameters",
  //   primogems: "Primogems",
  //   genesisCrystals: "Genesis Crystals",
  //   intertwinedFates: "Interwined Fates",
  //   masterlessStarglitter: "Masterless Starglitter",
  //   currentPity: "Current Pity",
  //   noTestRuns: "No. of Test Runs",
  //   noShopReset: "No. of Shop Resets",
  //   noFuturePatch: "No. of Future Patches",
  //   endDate: "End date",
  //   welkin: "Welkin Moon",
  //   gnosticHymn: "Gnostic Hymn",
  //   bpTooltip: "Paid Tier of Battle Pass",
  //   spiralAbyssPrimos: "Spiral Abyss Primos",
  //   floor1to8: "Floor 1 to 8",
  //   floor9to12: "Floor 9 to 12",
  //   noSpiralAbyssResets: "No. of Spiral Abyss Resets",
  //   saTooltip:
  //     "If you have completed the current abyss rotation reduce this value by 1",
  //   events: "Events",
  //   exploration: "Exploration",
  //   unlockables: "Unlockables",
  //   teleports: "Teleports",
  //   sos: "Statues of the Seven",
  //   domain: "Domains",
  //   domaintooltip1: "Including Resin and One-time Domains",
  //   domaintooltip2: "Only One-time Domains",
  //   completion: "Completion",
  //   sosProgression: "Statue of the Seven Progression",
  //   level: "Level",
  //   mond: "Mondstat",
  //   liyue: "Liyue",
  //   inazuma: "Inazuma",
  //   sumeru: "Sumeru",
  //   ops: "Offering Progression Systems",
  //   fbt: "Frostbearing Tree's Gratitude",
  //   lma: "Enhance The Lumestone Adjuvant",
  //   ssf: "Sacred Sakura's Favor",
  //   vrf: "Vanarana's Favor",
  //   teapot: "Serenitea Teapot",
  //   trustRank: "Trust Rank",
  //   listOfGiftSets: "List of Gift Sets",
  //   indoor: "Indoor",
  //   outdoor: "Outdoor",
  //   output: {
  //     line1: "Total Number of Primos",
  //     line2: "Total Number of Fates",
  //     line3: "Total Number of Wishes",
  //     line4: "Probabilty of Getting 5 Star if Guaranteed",
  //     line5: "Probabilty of Getting 5 Star if not Guaranteed",
  //     includingPity: "including pity",
  //     excludingPity: "excluding pity",
  //   },
  // },
  // fr: {
  //   lang: "fr",
  //   langFull: "Français",
  //   siteTitle: "Genshin Primo Planner",
  //   title: "Bienvenue à Delta et Flamin's Genshin Primo Planner",
  //   explainationButton: "First time here? Click me!",
  //   explaination: {
  //     title: "Welcome to Genshin Primo Planner",
  //     para1line1:
  //       "Primogems... Shiny stars every genshin player wishes they had more of",
  //     para2line1:
  //       "This website aims to provide players with an exact amount of primogems obtainable in the current patch (or an estimated amount in future patches), so that players can clear as much in-game content to fulfil their wishing desires.",
  //     // "This website aims to provide players with an exact amount of primogems obtainable in the current patch or an estimated amount in future patches. Providing a tool for players to clear as much in-game content to fulfil their wishing desires.",
  //     para2line1highlight:
  //       "This tool however does not account for primogems from Redeemable Codes, Achievements and Chests.",
  //     para3line1:
  //       "For Desktop Users, The site has an Input Column and an Output Column.",
  //     para3line2:
  //       "For Mobile Users, the Output is situated at the bottom of the page.",
  //     para3line3:
  //       "The Output column contains information such as how many primos collected, total fates collected, total number of wishes, and probabilites of geting featured 5 star.",
  //     para4line1:
  //       "The Input column is split into categories such as Input Parameters, Events, Exploration, Serenitea Teapot, List of Gift Sets, and Quests.",
  //     para4line2:
  //       "The Output panel automatically updates when you update the Input Column.",
  //     para4line3:
  //       "When inputting data into Input Parameters most of the parameters can be found either in the wishing menu or in the shop. For the End Date param, it assumes you've done your dailies for the day and starts counting from the next day on.",
  //     para4line4:
  //       "As for the rest of the Input column, you can select events, quests and gift sets you're going to do. And for text fields and sliders you should be inputting how many you are going to do. Most of the sliders allow you to set a minimum value (What you've done) and a maximum value (What you're going to do).",
  //     para5line1:
  //       "And thats about it. If you got any questions or suggestions feel free to hit me up on Discord at ",
  //     para5line1highlight: "FlaminDemigod#2754",
  //   },
  //   scrollDown: "Scroll down to get started",
  //   inputParams: "Input Parameters",
  //   primogems: "Primo-gemmes",
  //   genesisCrystals: "Cristal primaire",
  //   intertwinedFates: "Pierres de la fatalité",
  //   masterlessStarglitter: "Astérie libre",
  //   currentPity: "Pitié Actuelle",
  //   noTestRuns: "Nbr. d'essais",
  //   noShopReset: "Nbr. d'actualisations de la boutique",
  //   noFuturePatch: "No. of Future Patches",
  //   endDate: "End date",
  //   welkin: "Faveur de l'astre de la nuit",
  //   gnosticHymn: "Gnostic Hymn",
  //   bpTooltip: "Paid Tier of Battle Pass",
  //   spiralAbyssPrimos: "Spiral Abyss Primos",
  //   floor1to8: "Floor 1 to 8",
  //   floor9to12: "Floor 9 to 12",
  //   noSpiralAbyssResets: "No. of Spiral Abyss Resets",
  //   saTooltip:
  //     "If you have completed the current abyss rotation reduce this value by 1",
  //   events: "Events",
  //   exploration: "Exploration",
  //   unlockables: "Unlockables",
  //   teleports: "Teleports",
  //   sos: "Statues of the Seven",
  //   domain: "Domains",
  //   domaintooltip1: "Including Resin and One-time Domains",
  //   domaintooltip2: "Only One-time Domains",
  //   completion: "Completion",
  //   sosProgression: "Statue of the Seven Progression",
  //   level: "Level",
  //   mond: "Mondstat",
  //   liyue: "Liyue",
  //   inazuma: "Inazuma",
  //   sumeru: "Sumeru",
  //   ops: "Offering Progression Systems",
  //   fbt: "Frostbearing Tree's Gratitude",
  //   lma: "Enhance The Lumestone Adjuvant",
  //   ssf: "Sacred Sakura's Favor",
  //   vrf: "Vanarana's Favor",
  //   teapot: "Serenitea Teapot",
  //   trustRank: "Trust Rank",
  //   listOfGiftSets: "List of Gift Sets",
  //   indoor: "Indoor",
  //   outdoor: "Outdoor",
  //   output: {
  //     line1: "Total Number of Primos",
  //     line2: "Total Number of Fates",
  //     line3: "Total Number of Wishes",
  //     line4: "Probabilty of Getting 5 Star if Guaranteed",
  //     line5: "Probabilty of Getting 5 Star if not Guaranteed",
  //     includingPity: "including pity",
  //     excludingPity: "excluding pity",
  //   },
  // },
};
const LangContext = createContext(langs.en);

const LangContextProvider = ({ lang, children }) => {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
};

export { LangContextProvider, LangContext, langs };
