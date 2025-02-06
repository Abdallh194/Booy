import { CategoriesData } from "@/public/Data";
import { useEffect, useState } from "react";

const useCategoreis = () => {
  const [loadingcat, setLoading] = useState<TLoading>("pending");

  useEffect(() => {
    setLoading("pending");
    const debounce = setTimeout(() => {
      setLoading("succeeded");
    }, 100);

    return () => clearTimeout(debounce);
  }, []);

  return { loadingcat, CategoriesData };
};
export default useCategoreis;
