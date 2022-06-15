import Layout from "../common/Layout";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Popup from "../common/Popup";
import { setYoutube } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

function Youtube() {
  const pop = useRef(null);
  const dispatch = useDispatch();
  const Vids = useSelector((store) => store.youtubeReducer.youtube);
  const [Index, setIndex] = useState(0);

  const handlePopup = (idx) => {
    pop.current.open();
    setIndex(idx);
  };

  const fetchYoutube = async () => {
    const key = "AIzaSyCNEFP7grGD77zUQvYF6Tg93dOjeA-mCjs";
    const playList = "PLKoTiVSIVIvnzOXEzNgPazzOR21NERHWz";
    const num = 4;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

    await axios.get(url).then((json) => {
      const action = setYoutube(json.data.items);
      dispatch(action);
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
        <div className="mainVids-wrap">
          <div className="cont">
            <p className="info">
              Mayfield Hotel
              <br />
              <br />
              2002
              <br />
              Seoul, Korea
              <br />
              <br />
              mayres@mayfield.co.kr
              <br />
              02.2660.9000
            </p>
            <p className="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              cupiditate, aliquam quidem corporis accusantium facere dolorum
            </p>

            <div className="pic">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/JZxOBtrnLxw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <span>
                MAIN
                <br />
                VIDEO
              </span>
            </div>
          </div>
          <div className="line"></div>
        </div>
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

      <Popup ref={pop}>
        <>
          {Vids.length !== 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
              frameBorder="0"
            ></iframe>
          )}
        </>
      </Popup>
    </>
  );
}

export default Youtube;
