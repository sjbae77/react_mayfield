import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
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
      <div className="inner">
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
          {/* <img src={`${path}/img/main_visual1.jpg`} alt="visual image" /> */}
          <div className="title-wrap">
            <h1>
              We are making
              <br />
              real life.
            </h1>
            <span className="shape_paral">
              <a href="#">read more about us</a>
            </span>
          </div>
        </div>

        {/* <div className="pic">
          <img src={`${path}/img/main_visual2.jpg`} alt="visual image" />
        </div> */}
        <div className="textBox">
          <em>LAST VIDEO</em>
          <span>Lorem, ipsum dolor sit amet.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            adipisci, sint laboriosam officia
          </p>
        </div>
      </div>

      <div className="cursor" ref={cursor}>
        drag
      </div>
    </section>
  );
}

export default Visual;
