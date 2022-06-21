import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function News() {
  const path = process.env.PUBLIC_URL;
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let formatDay =
    ("00" + month.toString()).slice(-2) +
    "." +
    ("00" + day.toString()).slice(-2);

  const getLocalData = () => {
    const data = localStorage.getItem("post");
    const dummyPosts = [
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
      {
        title:
          "Don't dwell on the past. Believe in yourself. Seize the day. Life is a journey",
        content:
          "Here comes description in detail. Here comes description in detail. Here comes description in detail.",
      },
    ];

    if (data) {
      return JSON.parse(data);
    } else {
      return dummyPosts;
    }
  };

  const [Posts] = useState(getLocalData());

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(Posts));
  }, []);

  return (
    <section id="news" className="myScroll">
      <div className="visual_inner">
        <div className="inner">
          <div className="news-cont">
            <div className="title-wrap">
              <div className="title">
                <em>OUR NEWS</em>
                <h1>What's new?</h1>
              </div>
            </div>
            <div className="box-wrap">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1180: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {Posts.map((post, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <span>
                        {year} {formatDay}
                      </span>
                      <h2>{post.title}</h2>
                      <p>{post.content}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="shape_paral">
                <Link to="/community">all news</Link>
              </div>
            </div>
          </div>

          <div className="send-cont">
            <div className="svg-wrap">
              <img src={`${path}/img/loading_logo.svg`} alt="visual image" />
            </div>
            <strong>NEWSLETTER</strong>
            <span>Stay up to date with our productions!</span>
            <input type="text" placeholder="Leave you e-mail address" />
            <button className="shape_paral">
              <span>sign in</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
