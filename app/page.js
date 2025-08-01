import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello NEXT</h1>
      <a href="/cabins">cabins</a>
      <Link href="/cabins">Cabins</Link>
      <Link href="/account">Account</Link>
      <Link href="/about">About</Link>
    </>
  );
}
