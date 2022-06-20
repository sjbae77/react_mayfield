import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "swiper/css";

function Visual() {
  const path = process.env.PUBLIC_URL;
  const cursor = useRef(null);
  const frame = useRef(null);
  let isCursor = false;

  const mouseMove = (e) => {
    if (!isCursor) return;
    cursor.current.style.left = e.clientX + "px";
    cursor.current.style.top = e.clientY + "px";
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    frame.current.addEventListener("mouseenter", () => {
      isCursor = true;
      cursor.current.style.display = "block";
    });
    frame.current.addEventListener("mouseleave", () => {
      isCursor = false;
      cursor.current.style.display = "none";
    });
  }, []);

  return (
    <section id="visual">
      <div className="visual_inner">
        <div className="mainBox">
          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            ref={frame}
          >
            <SwiperSlide>
              <img src={`${path}/img/main_visual1.jpg`} alt="visual image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${path}/img/main_visual2.jpg`} alt="visual image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={`${path}/img/main_visual3.jpg`} alt="visual image" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="inner">
          <div className="title-wrap">
            <em>SINCE 2002</em>
            <h1>
              We are making
              <br />
              real life.
            </h1>
            <span className="shape_paral">
              <Link to="/about">read more about us</Link>
            </span>
          </div>

          <div className="textBox">
            <em>LAST VIDEO</em>
            <span>Lorem, ipsum dolor sit amet.</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores adipisci, sint laboriosam officia
            </p>
          </div>
        </div>
      </div>

      <div className="cursor" ref={cursor}>
        drag
      </div>
    </section>
  );
}

export default Visual;
