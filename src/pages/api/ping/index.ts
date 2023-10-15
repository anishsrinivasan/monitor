import type { NextApiRequest, NextApiResponse } from "next";
import { version } from "@/utils/helpers/package";

type ResponseData = {
  version: string;
  uA: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const uA = req.headers["user-agent"] || "";
  console.log(process.env.npm_package_version);

  res.status(200).json({ version, uA });
}
