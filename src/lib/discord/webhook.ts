export const CHANNELS = {
  "ticket-updates": "ticket-updates",
};

export type CHANNELS = (typeof CHANNELS)[keyof typeof CHANNELS];

export const CHANNEL_WEBHOOKS = {
  [CHANNELS["ticket-updates"]]: {
    url: "https://discord.com/api/webhooks/1163042439142047804/ZFFj-Ize2-T368SJonEKdFrLArLjecNl-2VVvLMQKn5G5uzd3UHKtzZI2p-YIzA9hsUE",
  },
};

export type CHANNEL_WEBHOOKS =
  (typeof CHANNEL_WEBHOOKS)[keyof typeof CHANNEL_WEBHOOKS];
