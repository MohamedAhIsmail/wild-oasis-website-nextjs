"use client"

import Link from "next/link";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/cabins",
    name: "Cabins",
  },
  {
    path: "/account",
    name: "Account",
  },
  {
    path: "/about",
    name: "About",
  },
];

function Navigation() {
  return (
    <ul>
      {links.map((link, i) => (
        <li key={i}>
          <Link href={`${link.path}`}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
