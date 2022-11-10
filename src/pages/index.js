import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";

import config from "../../config.json";
import { CSSReset } from "../components/CSSReset";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("Angular");

  return (
    <>
      <CSSReset />

      <div>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        ></Menu>
        <Header></Header>
        <Timeline
          playlists={config.playlists}
          searchValue={valorDoFiltro}
        ></Timeline>
      </div>
    </>
  );
}

export default HomePage;
