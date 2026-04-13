import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next.js</h1>
      <div className="flex gap-2 justify-center">
        <Link href={"/about"}>About</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/products/search"}>Search Products</Link>
      </div>
    </>
  );
}
