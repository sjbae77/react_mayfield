import axios from "axios";

export const fetchYoutube = async () => {
  const key = "AIzaSyCNEFP7grGD77zUQvYF6Tg93dOjeA-mCjs";
  const playList = "PLKoTiVSIVIvnzOXEzNgPazzOR21NERHWz";
  const num = 4;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

  return await axios.get(url);
};
