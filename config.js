const isProd = process.env.NODE_ENV === "production" ? true : false;
export const SERVER = isProd
  ? "https://primos.flamindemigod.com"
  : "http://136.243.175.33:3000";
