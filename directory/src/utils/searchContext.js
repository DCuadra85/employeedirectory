import React from "react";
//Provider values default context object
//This should spread context for search data

const SearchContext = React.createContext({
  search:"",
});

export default SearchContext;