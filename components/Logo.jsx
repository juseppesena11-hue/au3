import Image from "next/image";
import Link from "next/link";

export default function Logo({ inverted = false }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Aureon Construção - início">
      <Image
        src="/logo.svg"
        alt="Aureon Construção"
        width={220}
        height={55}
        priority
        className={inverted ? "brightness-0 invert" : ""}
      />
    </Link>
  );
}
