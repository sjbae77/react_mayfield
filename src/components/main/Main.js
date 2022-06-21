import Header from "../common/Header";
import Visual from "./Visual";
import Service from "./Service";
import News from "./News";
import Btns from "./Btns";
import Anime from "../../asset/anime";

import { useRef, useEffect, useState } from "react";

function Main() {
  const main = useRef(null);
  const pos = useRef([]);
  const [Index, setIndex] = useState(0);

  //현재 스크롤되는 값을 관리할 state추가
  const [Scrolled, setScrolled] = useState(0);

  let secs = null;
  const base = -200;

  const getPos = () => {
    pos.current = [];

    secs = main.current.querySelectorAll(".myScroll");
    for (const sec of secs) pos.current.push(sec.offsetTop);
  };

  const activation = () => {
    const scroll = window.scrollY;
    const btns = main.current.querySelectorAll(".scroll_navi li");

    setScrolled(scroll);

    pos.current.map((pos, idx) => {
      if (scroll >= pos + base) {
        for (const btn of btns) btn.classList.remove("on");
        btns[idx].classList.add("on");
        secs[idx].classList.add("on");
      }
    });
  };

  useEffect(() => {
    getPos();

    window.addEventListener("resize", getPos);
    window.addEventListener("scroll", activation);

    return () => {
      window.addEventListener("resize", getPos);
      window.addEventListener("scroll", activation);
    };
  }, []);

  useEffect(() => {
    new Anime(window, {
      prop: "scroll",
      value: pos.current[Index],
      duration: 500,
    });
  }, [Index]);

  return (
    <>
      <main ref={main}>
        <Header type={"main"} />
        <Visual />
        <Service />
        <News />
        <Btns setIndex={setIndex} />
      </main>
    </>
  );
}

export default Main;
