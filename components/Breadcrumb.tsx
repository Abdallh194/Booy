"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const decodedValue = decodeURIComponent(value); // فك ترميز النص

          return isLast ? (
            <li className="breadcrumb-item active" key={to}>
              {decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1)}
            </li>
          ) : (
            <li className="breadcrumb-item" key={to}>
              <Link href="#">
                {decodedValue.charAt(0).toUpperCase() + decodedValue.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
