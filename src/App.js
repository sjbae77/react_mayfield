import { Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

//main
import Main from "./components/main/Main";

//sub
import About from "./components/sub/About";
import Gallery from "./components/sub/Gallery";
import Community from "./components/sub/Community";
import Youtube from "./components/sub/Youtube";
import Location from "./components/sub/Location";
import Join from "./components/sub/Join";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchYoutube } from "./redux/youtubeSlice";
import { fetchRoom } from "./redux/roomSlice";

function App() {
  const dispatch = useDispatch();

  //루트 컴포넌트가 마운트되자마자 slice로 부터 가져온 fetYoutube함수를 호출해서 리턴값을 받고 바로 sliceReducer로 전달
  useEffect(() => {
    dispatch(fetchYoutube());
    dispatch(fetchRoom());
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Main}></Route>

        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>

      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />

      <Switch>
        <Route exact path={"/"}>
          <Footer type={"main"} />
        </Route>
        <Route path="/" render={() => <Footer type={"sub"} />} />
      </Switch>
    </>
  );
}

export default App;
