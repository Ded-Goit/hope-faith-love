// components/Footer/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        marginTop: "auto",
        fontSize: "0.95rem",
        borderTop: "1px solid #ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Legal Links */}
        <div>
          <h4>Legal</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/cookies-policy">Cookies Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4>Contact</h4>
          <p>
            📍 Hope-Love-Faith Society 516-295 Francis Way, New Westminster, BC,
            Canada, V3L 0H7
          </p>
          <p>📞 +1(236)833-7778 (ENG) </p>
          <p>📞 +1(437)552-7036 (UKR/RU) </p>
          <p>
            ✉️{" "}
            <a href="mailto:hope.love.faith.society@gmail.com">
              hope.love.faith.society@gmail.com
            </a>
          </p>
        </div>

        {/* Socials */}
        <div>
          <h4>Follow Us</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="https://facebook.com" target="_blank">
                🌐 Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                📷 Instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank">
                ▶️ YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h4>Site Developer</h4>
          <p>
            <a href="https://github.com/Ded-Goit">DED</a>
          </p>
          <p>© 2025 Andrii Romanov</p>
        </div>

        {/* Donate */}
        <div>
          <h4>Support Us</h4>
          <a
            href="/"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "0.6rem 1rem",
              backgroundColor: "#4CAF50",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            💖 Donate
          </a>
        </div>
      </div>
    </footer>
  );
}
