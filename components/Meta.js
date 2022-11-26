import Head from "next/head";
import { SERVER } from "../config";
const Meta = ({
  title = "Genshin Primo Planner",
  url = "https://primos.flamindemigod.com",
  image = `${SERVER}/BG.webp`,
  description = "A Genshin Impact Primogem Calculator made by Delta45321 and Flamindemigod. It accounts for almost all sources of primogems, other than Redeemable Codes, Achievements, Web Events and Chests.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Genshin, Genshin Impact, Primogem, Calculator, Flamindemigod, Delta45321"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="3016" />
      <meta property="og:image:height" content="2000" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="zh_CN" />
      <meta property="og:locale:alternate" content="zh_Hans" />
      <meta property="og:locale:alternate" content="zh_Hans_CN" />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Meta;
