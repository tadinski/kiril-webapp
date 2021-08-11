import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Start of the project 10 August.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
