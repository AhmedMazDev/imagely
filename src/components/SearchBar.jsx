import React from "react";
import search from "../search.png";

const SearchBar = ({ setSearchTerm, serachTerm }) => {
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        name="searchBar"
        id=""
        placeholder="Search Here..."
        value={serachTerm}
        onChange={handleChange}
      />
      <button>
        <img src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
