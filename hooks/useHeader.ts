import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useHeader = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  return {
    expanded,
    setExpanded,
  };
};

export default useHeader;
