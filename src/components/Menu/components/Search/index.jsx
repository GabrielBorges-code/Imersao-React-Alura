import React, { useState } from "react";

import { StyledSearch } from "./styles";

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const valorDaBusca = valorDoFiltro;
  const setValorBusca = setValorDoFiltro;

  return (
    <StyledSearch>
      <input
        value={valorDaBusca}
        type="text"
        onChange={(e) => {
          console.log("teste");
          setValorBusca(e.target.value);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
