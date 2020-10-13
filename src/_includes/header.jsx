import { SocialLinks, BrandLogo } from "../components";

function Header() {
  return (
    <nav className="shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-2 md:px-0">
        <BrandLogo />
        <SocialLinks />
      </div>
    </nav>
  );
}

export default Header;
