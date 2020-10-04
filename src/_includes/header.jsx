import Link from "next/link";

function Header() {
  return (
    <nav className="shadow-sm">
      <div className="container mx-auto flex justify-between py-4">
        <Link href="/">
          <span>{"<Pikonha.dev />"}</span>
        </Link>

        <div>avatar</div>
      </div>
    </nav>
  );
}

export default Header;
