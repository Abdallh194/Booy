import Link from "next/link";
import React, { memo } from "react";

interface CartProps {
  length: number;
  className: string;
  to: string;
  children: React.ReactNode;
}
const QuantityCounter = ({ className, to, length, children }: CartProps) => {
  return (
    <Link className={className} href={to} data-length={length}>
      {children}
    </Link>
  );
};

export default memo(QuantityCounter);
