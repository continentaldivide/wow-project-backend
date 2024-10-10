import { Request, Response } from "express";

const basicGreeting = (req: Request, res: Response) => {
  res.json({ response: "hello from the API test route!" });
};

export { basicGreeting };
