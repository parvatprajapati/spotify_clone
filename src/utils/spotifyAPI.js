import axios from 'axios';

import {CLIENT_ID,CLIENT_SECRET} from './constant'
const clientId = CLIENT_ID;
const clientSecret = CLIENT_SECRET;

console.log(clientId,clientSecret)


const base64Credentials = btoa(`${clientId}:${clientSecret}`);

console.log("spotifyAPI Page")
const getAccessToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  });

  const data = await response.json();
  return data.access_token
};



export const fetchNewReleases = async () => {
  const token = await getAccessToken();
  console.log(",d;lsamd;lsd",token)
  const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.albums.items;
};




