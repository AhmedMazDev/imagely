import React from "react";
import search from "../search.png";

const SearchBar = ({ setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchBar"
        id=""
        placeholder="Search Here..."
      />
      <button>
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
