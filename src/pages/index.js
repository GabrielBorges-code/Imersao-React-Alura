import { useEffect, useState } from "react";

import { videoService } from "../service/videoService";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    // console.log("useEffect");
    service.getAllVideos().then((dados) => {
      console.log(dados.data);
      // Forma imutavel
      const novasPlaylists = {};
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist])
          novasPlaylists[video.playlist] = [];
        novasPlaylists[video.playlist] = [
          video,
          ...novasPlaylists[video.playlist],
        ];
      });

      setPlaylists(novasPlaylists);
    });
  }, [playlists]);

  // console.log(playlists);

  return (
    <>
      <div>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />

        <Timeline
          // playlists={config.playlists}
          playlists={playlists}
          searchValue={valorDoFiltro}
        />
      </div>
    </>
  );
}

export default HomePage;
