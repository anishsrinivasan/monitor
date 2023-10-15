import type { NextApiRequest, NextApiResponse } from "next";
import { sendErrorMessage, sendMessage } from "@/lib/discord";
import { checkThetreIsAvailable } from "./fetch";
import { CHANNELS } from "@/lib/discord/webhook";
import { EmbedBuilder } from "discord.js";

type ResponseData = {
  data: Record<string, any> | null;
  error: string | null | unknown;
};

const DEFAULT_USER_PROFILE = {
  username: "Movie-BOT",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const q = (req.query["q"] || "") as string;
  const movieCode = (req.query["movieCode"] || "") as string;

  if (!movieCode) {
    return res.status(400).json({ error: "Movie Code Missing", data: null });
  }

  const { error, data } = await checkThetreIsAvailable(movieCode);

  if (error) {
    sendErrorMessage(CHANNELS["ticket-updates"], {
      ...DEFAULT_USER_PROFILE,
      content: "Something went wrong while retrieving the ticket.",
    });

    return res.status(500).json({ error, data: null });
  }

  const cinemas = data?.meta?.cinemas.map((x) => x.name) || [];
  const movie = data?.meta?.movies[0];
  const movieName = movie?.name || "";

  const matches =
    q === ""
      ? []
      : cinemas.filter((x) => x.toLowerCase().includes(q.toLowerCase()));

  if (matches.length > 0) {
    const content = `${q} is open for ${movieName}`;
    const paytmLink = `https://paytm.com/movies/leo-movie-detail-159845?frmtid=rur_1kciu&fromdate=2023-10-19`;
    const bodyContent = `🚨 New Cinema Show Open Alert 🚨`;
    const movieCoverImage = movie?.imgPath || "";

    const successEmbed = new EmbedBuilder()
      .setTitle(content)
      .setColor(0x198754)
      .setDescription(
        `Book ASAP using the link given. \n ${matches.join(
        ", "
      )}`
      )
      .setImage(movieCoverImage)
      .setThumbnail(movieCoverImage)
      .setURL(paytmLink)
      .setTimestamp();

    sendMessage(CHANNELS["ticket-updates"], {
      ...DEFAULT_USER_PROFILE,
      content: bodyContent,
      embeds: [successEmbed],
    });
  }

  res.status(200).json({ data: { matches, cinemas, q, movie }, error: null });
}
