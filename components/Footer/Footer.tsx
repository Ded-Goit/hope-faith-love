// components/Footer/Footer.tsx
"use client";
import styles from "./Footer.module.css";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Legal Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy-policy" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className={styles.footerLink}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className={styles.footerLink}>
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <p className={styles.footerText}>
              📍 Hope-Love-Faith Society 516–295 Francis Way, New Westminster,
              BC, Canada, V3L 0H7
            </p>
            <p className={styles.footerText}>📞 +1 (236) 833-7778 (ENG)</p>
            <p className={styles.footerText}>📞 +1 (437) 552-7036 (UKR/RU)</p>
            <p className={styles.footerText}>
              ✉️{" "}
              <a href="mailto:hope.love.faith.society@gmail.com">
                hope.love.faith.society@gmail.com
              </a>
            </p>
          </div>

          {/* Socials + Donate */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a href="https://x.com" target="_blank" aria-label="X (Twitter)">
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
              className={styles.donateForm}
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="YOUR_BUTTON_ID"
              />
              <button type="submit" className={styles.donateButton}>
                Donate with PayPal
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          Site by{" "}
          <a href="https://github.com/Ded-Goit" target="_blank">
            DED
          </a>{" "}
          &copy; {new Date().getFullYear()} ETHERNAL LIFE SOCIETY. All rights
          reserved.
        </div>
      </footer>
    </motion.footer>
  );
}
