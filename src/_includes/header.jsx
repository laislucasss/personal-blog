import Link from "next/link";

function Header() {
  return (
    <nav className="shadow-sm">
      <div className="container mx-auto flex justify-between py-4 px-2 md:px-0">
        <Link href="/">
          <span className="cursor-pointer font-bold text-lg hover:bg-yellow-primary px-2 py-1">
            {"<Pikonha.dev />"}
          </span>
        </Link>

        <div>
          {/* <img
            className="object-contain rounded-full"
            src="/avatar.jpeg"
            alt="Picture of me"
          ></img> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
