import { useState } from "react";

const useSearch = () => {
  const [SearchItem, setSearchItem] = useState("");

  return {
    SearchItem,
    setSearchItem,
  };
};

export default useSearch;
