// components/Header/Header.tsx

import Image from "next/image";
import Link from "next/link";
//import LanguageSwitcher from "@/components/LanguageSwitcher"; // якщо є

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff",
      }}
    >
      {/* Логотип + Назва */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link href="/">
          <Image
            src="/hlf_logo_colour.png"
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#333",
            letterSpacing: "1px",
          }}
        >
          HOPE.LOVE.FAITH.
        </span>
      </div>

      {/* Навігація */}
      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </Link>
        <Link href="/about" style={{ textDecoration: "none", color: "#333" }}>
          About
        </Link>
      </nav>
    </header>
  );
}
/**
<nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
<Link href="/" style={{ textDecoration: "none", color: "#333" }}>
  Home
</Link>
<Link href="/about" style={{ textDecoration: "none", color: "#333" }}>
  About
</Link>
<--!<LanguageSwitcher />-->
</nav> */
