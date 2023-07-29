import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred, toggleDarkMode } = useContext(
    GithubContext
  );

  return { githubState, getUser, getUserRepos, getUserStarred, toggleDarkMode };
};

export default useGithub;
