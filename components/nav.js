import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{`
      a {
        color: #eee;
        font-size: 2em;
        text-decoration: none;
        border-bottom: none;
        font-family: "Permanent Marker", "Roboto", sans-serif;
      }
    `}</style>
  </nav>
);

export default Nav;
