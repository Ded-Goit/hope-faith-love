"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.mapContainer}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.478089038638!2d-122.91148812341662!3d49.216107371389816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d89e6ab5d7df%3A0xe779998f5b74aab6!2s295%20Francis%20Way%2C%20New%20Westminster%2C%20BC!5e0!3m2!1sen!2sca!4v1718961934567"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form className={styles.contactForm}>
        <h2>Contact Us</h2>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
