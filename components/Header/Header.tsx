// components/Header/Header.tsx

import Image from "next/image";
import Link from "next/link";
//import LanguageSwitcher from "@/components/LanguageSwitcher";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src="/hlf_logo_colour.png" alt="Logo" width={40} height={40} />
        <span className={styles.logoText}>HOPE.LOVE.FAITH.</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </nav>
    </header>
  );
}
/**
<nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <LanguageSwitcher />
      </nav>*/
