import React from "react";
import './Search.css'

const Search = () => {
  return (
    <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input type="text" class="form-control" placeholder="Search" />
    </div>
  );
};

export default Search;
