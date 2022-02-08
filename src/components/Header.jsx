import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ setSearchTerm }) => {
  return (
    <header>
      <h1>Imagely</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
