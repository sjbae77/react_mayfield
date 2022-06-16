import React from "react";

function Visual() {
  const path = process.env.PUBLIC_URL;

  return (
    <section id="visual">
      <div className="inner">
        <div className="mainBox">
          <img src={`${path}/img/main_visual.jpg`} alt="visual image" />
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
    </section>
  );
}

export default Visual;
