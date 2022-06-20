import Layout from "../common/Layout";
import { useState, useRef } from "react";
import Popup from "../common/Popup";
import { useSelector } from "react-redux";

function Youtube() {
  const pop = useRef(null);
  const Vids = useSelector((store) => store.youtube.data);
  const [Index, setIndex] = useState(0);

  const handlePopup = (idx) => {
    pop.current.open();
    setIndex(idx);
  };

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
          </div>
          <div className="pic">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/JZxOBtrnLxw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <span>
              MAIN
              <br />
              VIDEO
            </span>
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
