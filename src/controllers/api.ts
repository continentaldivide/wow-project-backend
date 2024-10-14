import { Request, Response } from "express";
import getAccessToken from "../services/getAccessToken";

const basicGreeting = async (req: Request, res: Response) => {
  const token = await getAccessToken();
  console.log(token);
  res.json({ response: "hello from the API test route!" });
};

export { basicGreeting };
