import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const client_ID = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const headers = new Headers();
headers.set(
  "Authorization",
  "Basic " + Buffer.from(client_ID + ":" + client_secret).toString("base64")
);

const form = new FormData();
form.append("grant_type", "client_credentials");

const basicGreeting = async (req: Request, res: Response) => {
  const response = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    body: form,
    headers,
  });
  const data = await response.json();
  console.log(data);
  res.json({ response: "hello from the API test route!" });
};

export { basicGreeting };
