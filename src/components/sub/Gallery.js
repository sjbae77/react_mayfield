import React from "react";
import Layout from "../common/Layout";

function Gallery() {
  return (
    <Layout name={"Gallery"}>
      <div className="left">
        <div className="title-wrap">
          <h1>ROOM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            quo!
          </p>
        </div>
      </div>
      <div className="right">
        <div className="title-wrap">
          <h1>HOTEL</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
