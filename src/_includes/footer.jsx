import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto flex justify-between py-4 px-2 md:px-0">
      <div className="cursor-default ">
        <small>© {new Date().getFullYear()} |</small>
        <span className="ml-2 font-bold text-lg">{"<Pikonha.dev />"}</span>
      </div>
    </footer>
  );
}

export default Footer;
