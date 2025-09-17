import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mb-12">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/instagram.svg"
          alt="File icon"
          width={24}
          height={24}
        />
        Instagram
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/YonkoZhelyazkov/Repository-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github-outline.svg"
          alt="Window icon"
          width={20}
          height={20}
        />
        Github
      </a>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/support"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Support
      </Link>
    </footer>
  );
}
