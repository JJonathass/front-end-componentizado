import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { FiLoader } from "react-icons/fi";

const Header = () => {
  const { getUser, toggleDarkMode, githubState } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState("");

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <header>
      <S.Wrapper darkMode={githubState.darkMode}>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
        {githubState.loading ? <FiLoader /> : <span>Buscar</span>}
        </button>
        <S.DarkModeButton onClick={handleToggleDarkMode}>
          {githubState.darkMode ? "Modo Claro" : "Modo Escuro"} {/* Usamos githubState.darkMode aqui */}
        </S.DarkModeButton>
      </S.Wrapper>
    </header>
  );
};

export default Header;
