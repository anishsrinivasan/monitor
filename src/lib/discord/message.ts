import {
  WebhookClient,
  WebhookMessageCreateOptions,
  EmbedBuilder,
} from "discord.js";
import { CHANNELS, CHANNEL_WEBHOOKS } from "./webhook";

const DEFAULT_MESSAGE: WebhookMessageCreateOptions = {
  username: "Monitor-BOT",
  avatarURL: "https://i.imgur.com/AfFp7pu.png",
  content: "Test Content",
};

export const sendMessage = (
  channel: CHANNELS,
  content: WebhookMessageCreateOptions
) => {
  const url = CHANNEL_WEBHOOKS[channel].url;

  const webhookClient = new WebhookClient({
    url,
  });

  webhookClient.send({ ...DEFAULT_MESSAGE, ...content });
};

const errorEmbeds = new EmbedBuilder().setTitle("ERROR").setColor(0xff3333);

export const sendErrorMessage = (
  channel: CHANNELS,
  content: WebhookMessageCreateOptions
) => {
  const url = CHANNEL_WEBHOOKS[channel].url;

  const webhookClient = new WebhookClient({
    url,
  });

  webhookClient.send({
    ...DEFAULT_MESSAGE,
    embeds: [errorEmbeds],
    ...content,
  });
};
