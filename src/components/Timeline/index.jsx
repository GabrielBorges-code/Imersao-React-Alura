import React from "react";

import { StyledTimeline } from './styles';

function Timeline({ playlists }) {
  const playlistNames = Object.keys(playlists);
  // search: Statement e retorno por expressão

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        // console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} alt="thumb do vídeo" />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default Timeline;
