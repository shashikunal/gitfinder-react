import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export let GlobalContextApi = createContext();

const GlobalContextProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [repos, setRepos] = useState(null);
  let [loading, setLoading] = useState(false);
  let client_id = "1b71578d425d4976c6bb";
  let client_secret = "cfe800cf7f917040ce853b49f9f86bd1480aad94";

  let OnTermSubmit = async term => {
    try {
      let { data } = await axios.get(
        `https://api.github.com/users/${term}?client_id=${client_id}&client_secret=${client_secret}`
      );
      setUser(data);
      let rep = await axios.get(`https://api.github.com/users/${term}/repos`);
      setRepos(rep.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    OnTermSubmit("shashikunal");
  }, []);
  return (
    <GlobalContextApi.Provider value={{ OnTermSubmit, user, loading, repos }}>
      {children}
    </GlobalContextApi.Provider>
  );
};

export default GlobalContextProvider;
