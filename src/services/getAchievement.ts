const getAchievement = async (token: string) => {
  const response = await fetch(
    `https://us.api.blizzard.com/data/wow/achievement/6?namespace=static-us&locale=en_US&access_token=${token}`
  );
  const data = await response.json();
  return data;
};

export default getAchievement;
