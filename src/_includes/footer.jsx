import { BrandLogo } from "../components";

function Footer() {
  return (
    <footer className="container mx-auto flex items-center py-4 px-2 md:px-0">
      <small>© {new Date().getFullYear()} |</small>
      <span className="ml-2 cursor-default ">
        <BrandLogo />
      </span>
    </footer>
  );
}

export default Footer;
