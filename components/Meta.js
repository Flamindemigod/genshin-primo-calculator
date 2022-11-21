import Head from "next/head";
import { SERVER } from "../config";
const Meta = ({
  title = "Genshin Primo Planner",
  url = "https://primos.flamindemigod.com",
  image = `${SERVER}/Item_Primogem.webp`,
  description = "A Genshin Impact Primogem Calculator made by Delta45321 and Flamindemigod. It accounts for almost all sources of primogems, other than Redeemable Codes, Achievements, Web Events and Chests.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
};

export default Meta;
