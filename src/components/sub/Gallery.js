import Layout from "../common/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-component";
import Popup from "../common/Popup";

function Gallery() {
  const frame = useRef(null);
  const frame2 = useRef(null);
  const pop = useRef(null);
  const [Items, setItems] = useState([]);
  const [Items2, setItems2] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Index, setIndex] = useState(0);
  const masonryOptions = { transitionDuration: "0.5s" };

  const getFlickr = async (opt) => {
    const key = "91235d20021c4d6439c8426d95043091";
    const method_interest = "flickr.interestingness.getList";
    const method_search = "flickr.photos.search";
    const method_user = "flickr.people.getPhotos";
    let url = "";

    if (opt.type === "interest") {
      url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json`;
    }
    if (opt.type === "search") {
      url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
    }
    if (opt.type === "user") {
      url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
    }

    await axios.get(url).then((json) => {
      console.log(json.data);
      //만약 검색 결과가 없다면 경고창 띄우고 종료
      if (json.data.photos.photo.length === 0)
        return alert("해당검색어의 결과이미지 없습니다.");
      setItems(json.data.photos.photo);
    });

    setTimeout(() => {
      if (!frame.current && !frame2.current) return;
      frame.current.classList.add("on");
      frame2.current.classList.add("on");
      setLoading(false);
    }, 1000); //데이터준비 완료될때까지 지연
  };

  const getFlickr2 = async (opt) => {
    const key = "91235d20021c4d6439c8426d95043091";
    const method_interest = "flickr.interestingness.getList";
    const method_search = "flickr.photos.search";
    const method_user = "flickr.people.getPhotos";
    let url = "";

    if (opt.type === "interest") {
      url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json`;
    }
    if (opt.type === "search") {
      url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
    }
    if (opt.type === "user") {
      url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
    }

    await axios.get(url).then((json) => {
      console.log(json.data);
      //만약 검색 결과가 없다면 경고창 띄우고 종료
      if (json.data.photos.photo.length === 0)
        return alert("해당검색어의 결과이미지 없습니다.");
      setItems2(json.data.photos.photo);
    });

    setTimeout(() => {
      if (!frame.current && !frame2.current) return;
      frame.current.classList.add("on");
      frame2.current.classList.add("on");
      setLoading(false);
    }, 1000); //데이터준비 완료될때까지 지연
  };

  useEffect(() => {
    getFlickr({
      type: "user",
      count: 20,
      user: "195772706@N08",
    });

    getFlickr2({
      type: "search",
      count: "20",
      tags: "hotel",
    });
  }, []);

  return (
    <>
      <Layout name={"Gallery"}>
        {Loading && (
          <img
            className="loading"
            src={`${process.env.PUBLIC_URL}/img/loading.gif`}
          />
        )}
        <div className="left cont">
          <div className="title-wrap">
            <h1>ROOM</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              quo!
            </p>
          </div>

          <div className="frame" ref={frame}>
            <Masonry elementType={"div"} options={masonryOptions}>
              {Items.map((item, idx) => {
                return (
                  <article key={idx}>
                    <div className="inner">
                      <div className="pic">
                        <img
                          src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                          alt={item.title}
                        />
                        <FontAwesomeIcon
                          icon={faMagnifyingGlassPlus}
                          onClick={() => {
                            pop.current.open();
                            setIndex(idx);
                          }}
                        />
                        <div className="profile">
                          <img
                            src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
                            alt={item.owner}
                            onError={(e) => {
                              //해당 이미지요소의 소스이미지가 없어서 onError이벤트가 발생하면 src값을 대체이미지로 변경
                              e.target.setAttribute(
                                "src",
                                "https://www.flickr.com/images/buddyicon.gif"
                              );
                            }}
                          />
                          <span
                            onClick={(e) => {
                              setLoading(true);
                              frame.current.classList.remove("on");

                              getFlickr({
                                type: "user",
                                count: 50,
                                user: e.currentTarget.innerText,
                              });
                            }}
                          >
                            {item.owner}
                          </span>
                        </div>
                      </div>

                      <h2>{item.title}</h2>
                    </div>
                  </article>
                );
              })}
            </Masonry>
          </div>
        </div>

        <div className="right cont">
          <div className="title-wrap">
            <h1>HOTEL</h1>
          </div>

          <div className="frame" ref={frame2}>
            {Items2.map((item, idx) => {
              return (
                <article key={idx}>
                  <div className="inner">
                    <div className="pic">
                      <img
                        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                        alt={item.title}
                      />
                      <FontAwesomeIcon
                        icon={faMagnifyingGlassPlus}
                        onClick={() => {
                          pop.current.open();
                          setIndex(idx);
                        }}
                      />
                      <div className="profile">
                        <img
                          src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
                          alt={item.owner}
                          onError={(e) => {
                            //해당 이미지요소의 소스이미지가 없어서 onError이벤트가 발생하면 src값을 대체이미지로 변경
                            e.target.setAttribute(
                              "src",
                              "https://www.flickr.com/images/buddyicon.gif"
                            );
                          }}
                        />
                        <span
                          onClick={(e) => {
                            setLoading(true);
                            frame2.current.classList.remove("on");

                            getFlickr({
                              type: "user",
                              count: 50,
                              user: e.currentTarget.innerText,
                            });
                          }}
                        >
                          {item.owner}
                        </span>
                      </div>
                    </div>

                    <h2>{item.title}</h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Layout>

      {/* 컴포넌트자체를 useRef로 참조 */}
      <Popup ref={pop}>
        {Items.length !== 0 && (
          <img
            src={`https://live.staticflickr.com/${Items[Index].server}/${Items[Index].id}_${Items[Index].secret}_b.jpg`}
            alt={Items[Index].title}
          />
        )}
      </Popup>
    </>
  );
}

export default Gallery;
