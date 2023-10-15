import { MovieSearchResponse } from "./types/movie";

export const checkThetreIsAvailable = async (movieCode: string) => {
  try {
    const res = await fetch(
      `https://apiproxy.paytm.com/v3/movies/search/movie?meta=1&reqData=1&city=chennai&movieCode=${movieCode}&date=2023-10-20&version=3&site_id=1&channel=HTML5&child_site_id=1`,
      { cache: "no-cache" }
    );

    const data = (await res.json()) as MovieSearchResponse;
    return { error: null, data };
  } catch (error) {
    console.error("checkThetreIsAvailable", error);
    return { error, data: null };
  }
};
