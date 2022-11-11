import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";

import config from "../../config.json";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline playlists={config.playlists} searchValue={valorDoFiltro} />
      </div>
    </>
  );
}

export default HomePage;
