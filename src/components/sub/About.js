import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function About() {
  const path = process.env.PUBLIC_URL;
  const [Rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get(`${path}/DB/rooms.json`).then((json) => {
      // console.log(json.data.rooms);
      setRooms(json.data.rooms);
    });
  }, []);

  return (
    <section className="content About">
      <article className="banner">
        <div className="inner">
          <div className="text-wrap">
            <h1>Classy And Stylish Design</h1>
            <h2>
              House <strong>interior</strong>
            </h2>
          </div>
        </div>
      </article>
      <article className="story">
        <div className="inner">
          <div className="left">
            <span className="title">OUR COMPANY STORY</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officiis ea voluptates ipsam repellendus id iusto
              dolorum consequatur quo ex itaque eveniet quisquam, suscipit nemo
              inventore alias eius laudantium provident. Quibusdam sed unde
              suscipit minima commodi nostrum explicabo eos repellat?
            </p>
            <div className="num-wrap">
              <span>12</span>
              <p>
                Your
                <br />
                Experience
                <br />
                Working
              </p>
            </div>
          </div>
          <div className="right">
            <div className="pic">
              <img src={`${path}/img/story.png`} alt="story image" />
              <div className="text-wrap">
                <span>Houese design</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque neque quae placeat esse quibusdam? At ipsam
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="rooms">
        <div className="inner">
          <span className="title">OUR ROOM</span>
          <div className="wrap">
            {Rooms.map((room, idx) => {
              return (
                <div className="cont" key={idx}>
                  <div className="pic">
                    <img src={`${path}/img/${room.pic}`} alt={room.name} />
                  </div>
                  <strong>{room.name}</strong>
                  <p>{room.desc}</p>
                  <span>see Room</span>
                </div>
              );
            })}
          </div>
        </div>
      </article>
      <article className="vision">
        <div className="inner">
          <span className="title">OUR VISION</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            provident, corrupti aspernatur atque qui non maxime fuga dignissimos
            iste earum. Nostrum debitis explicabo laboriosam deleniti delectus,
            corporis sint blanditiis inventore dolorum omnis fugiat ipsum
            voluptatem. Quam unde recusandae sit sapiente.
          </p>
        </div>
      </article>
    </section>
  );
}

export default About;
