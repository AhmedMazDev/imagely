import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ setSearchTerm, serachTerm }) => {
  return (
    <header>
      <h1>Imagely</h1>
      <SearchBar serachTerm={serachTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
};

export default Header;
