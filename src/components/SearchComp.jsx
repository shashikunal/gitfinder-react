import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContextApi } from "./../contextapi/GlobalContext";

const SearchComp = () => {
  let { OnTermSubmit } = useContext(GlobalContextApi);

  let [search, setSearch] = useState("");
  let handleSubmit = e => {
    e.preventDefault();
    OnTermSubmit(search);
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="search git users"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button>search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchComp;
