import React from "react";

function News() {
  return (
    <section id="news">
      <div className="visual_inner">
        <div className="inner">
          <div className="title-wrap">
            <div className="title">
              <em>OUR NEWS</em>
              <h1>What's new?</h1>
            </div>

            <div className="btnSet">
              <button className="shape_paral">
                <a href="#">이전</a>
              </button>
              <button className="shape_paral">
                <a href="#">다음</a>
              </button>
            </div>
          </div>
          <div className="box-wap"></div>
        </div>
      </div>
    </section>
  );
}

export default News;
