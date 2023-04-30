//const BASIC = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?`;
const GENRES_ENDPOINT = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  
  const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
  
    return response.json();
  }
 
export const getGenres = async () => {
  const { access_token } = await getAccessToken();

  return fetch(GENRES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};



