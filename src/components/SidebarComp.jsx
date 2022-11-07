import React, { useContext } from "react";
import { GlobalContextApi } from "../contextapi/GlobalContext";

const SidebarComp = () => {
  let { user } = useContext(GlobalContextApi);
  if (user === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="sidebar">
        <header>
          <figure>
            <img src={user.avatar_url} alt={user.login} />
          </figure>
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
        </header>
        <main>
          <div>
            <span>
              <b>{user.followers} </b> followers
            </span>
            <span>
              <b>{user.following} </b>following
            </span>
            <p>{user.company}</p>
            <p>{user.location}</p>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
};

export default SidebarComp;
