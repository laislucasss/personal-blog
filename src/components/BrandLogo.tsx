import Link from "next/link";
import React from "react";

const BrandLogo: React.FC = () => {
  return (
    <Link href="/">
      <span className="cursor-pointer font-bold text-lg hover:bg-yellow-primary px-2 py-1 rounded-sm">
        {"<Pikonha.dev />"}
      </span>
    </Link>
  );
};

export default BrandLogo;
