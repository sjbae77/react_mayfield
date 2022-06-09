import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../common/Layout";
import Popup from "../common/Popup";

function Youtube() {
  const [Vids, setVids] = useState([]);
  const [Open, setOpen] = useState(false);
  const [Index, setIndex] = useState(0);

  const handlePopup = (idx) => {
    setOpen(true);
    setIndex(idx);
  };

  const fetchYoutube = () => {
    const key = "AIzaSyCNEFP7grGD77zUQvYF6Tg93dOjeA-mCjs";
    const playList = "PLKoTiVSIVIvnzOXEzNgPazzOR21NERHWz";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

    axios.get(url).then((json) => {
      setVids(json.data.items);
    });
  };

  useEffect(fetchYoutube, []);

  return (
    <>
      <Layout name={"Youtube"}>
        <h1>YOUTUBE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          corrupti optio rerum. Sapiente ut id modi harum laudantium
        </p>
        <div className="wrap">
          {Vids.map((vid, idx) => {
            const tit = vid.snippet.title;
            const desc = vid.snippet.description;
            const date = vid.snippet.publishedAt;

            return (
              <article key={idx}>
                <span>{date.split("T")[0]}</span>
                <div className="pic" onClick={() => handlePopup(idx)}>
                  <img src={vid.snippet.thumbnails.high.url} alt={vid.title} />
                </div>
                <div className="txt-wrap">
                  <h2>{tit.length > 25 ? tit.substr(0, 25) + "..." : tit}</h2>
                  <p>{desc.length > 80 ? desc.substr(0, 80) + "..." : desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Layout>

      {Open && (
        <Popup setOpen={setOpen}>
          <iframe
            src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
            frameborder="0"
          ></iframe>
        </Popup>
      )}
    </>
  );
}

export default Youtube;
