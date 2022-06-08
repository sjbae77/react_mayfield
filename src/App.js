import { Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

//main
import Visual from "./components/main/Visual";
import Service from "./components/main/Service";
import News from "./components/main/News";

//sub
import About from "./components/sub/About";
import Gallery from "./components/sub/Gallery";
import Community from "./components/sub/Community";
import Youtube from "./components/sub/Youtube";
import Location from "./components/sub/Location";
import Join from "./components/sub/Join";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header type={"main"} />
          <Visual />
          <Service />
          <News />
          <Footer />
        </Route>
        <Route path="/" render={() => <Header type={"sub"} />} />
      </Switch>

      <Route path="/about" component={About} />
      <Route path="/community" component={Community} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/location" component={Location} />
      <Route path="/join" component={Join} />
    </>
  );
}

export default App;
