import dotenv from "dotenv";

dotenv.config();

const getAccessToken = async () => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(
        process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
      ).toString("base64")
  );

  const form = new FormData();
  form.append("grant_type", "client_credentials");

  const response = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    body: form,
    headers,
  });
  const data = await response.json();
  return data.access_token;
};

export default getAccessToken;
