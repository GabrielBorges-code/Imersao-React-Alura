import React, { useState } from "react";

import { createClient } from "@supabase/supabase-js";

import { StyledRegisterVideo } from "./styles";

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://emoemcsednimbcvlkeod.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtb2VtY3NlZG5pbWJjdmxrZW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODgxOTYsImV4cCI6MTk4Mzg2NDE5Nn0.RHRC2f_bzvFOBRqBC4HGnWW-upPpA-W9MMpQqA0xgoE";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// get youtube thumbnail from video url

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

// function getVideoId(url) {
//     const videoId = url.split("v=")[1];
//     const ampersandPosition = videoId.indexOf("&");
//     if (ampersandPosition !== -1) {
//         return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
// }

export default function RegisterVideo() {
  
  const formCadastro = useForm({
    initialValues: {
      title: "Nome do Vídeo",
      url: "https://www.youtube.com/...",
    },
  });

  const [formVisible, setFormVisible] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>

      {formVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormVisible(false);
            formCadastro.clearForm();
            supabase
              .from("videos")
              .insert({
                title: formCadastro.values.title,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "jogos",
              })
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
              });
            // console.log(formCadastro.values);
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              X
            </button>
            <input
              placeholder="Título do vídeo"
              name="title"
              value={formCadastro.values.title}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
