import { Request, Response } from "express";
import getAccessToken from "../services/getAccessToken";
import getAchievement from "../services/getAchievement";

const basicGreeting = async (req: Request, res: Response) => {
  const token = await getAccessToken();
  const achievement = await getAchievement(token);
  res.json(achievement);
};

export { basicGreeting };
