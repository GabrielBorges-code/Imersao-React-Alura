import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";

import config from "../../config.json";
import { CSSReset } from "../components/CSSReset";

// console.log(config.playlist);

function HomePage() {
  return (
    <>
      <CSSReset />

      <div>
        <Menu></Menu>
        <Header></Header>
        <Timeline playlists={config.playlists}></Timeline>
      </div>
    </>
  );
}

export default HomePage;
