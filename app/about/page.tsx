"use client";

import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Users2,
  HandHelping,
  MessageCircle,
} from "lucide-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Monk Seraphim",
      role: "Spiritual Advisor",
      photo: "/monk_seraphim_photo.webp",
    },
    {
      name: "Anna Dmytrenko",
      role: "Volunteer Coordinator",
      photo: "/image.png",
    },
    {
      name: "Ihor P.",
      role: "Technical Lead",
      photo: "/image.png",
    },
    {
      name: "Olena R.",
      role: "Community Organizer",
      photo: "/image.png",
    },
  ];

  const testimonials = [
    {
      name: "Natalia K.",
      quote:
        "This community helped me find peace and purpose when I was at my lowest. Their compassion is truly life-changing.",
    },
    {
      name: "Bohdan M.",
      quote:
        "The meals, the prayers, the people—everything here radiates love. I’m deeply grateful.",
    },
    {
      name: "Fatima A.",
      quote:
        "Being part of this society gave me hope and real spiritual direction.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
        <Image
          src="/close_up_couple_holding_hands.webp"
          alt="Holding hands"
          fill
          quality={100}
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      </div>

      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h1>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className={styles.subtitle}>
            <HeartHandshake size={24} style={{ marginRight: "0.5rem" }} />
            OUR MISSION
          </h2>
          <p className={styles.paragraph}>
            Our mission is to serve our community with compassion and faith by
            providing spiritual nourishment, practical support, and dignified
            care for all. Guided by love and faith, we strive to uplift the
            vulnerable, strengthen community bonds, and reflect God`s mercy in
            all we do.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className={styles.subtitle}>
            <HandHelping size={24} style={{ marginRight: "0.5rem" }} />
            OUR VISION
          </h2>
          <p className={styles.paragraph}>
            By uniting faith with action, we strive to be a beacon of hope,
            bridging physical and spiritual needs while fostering unity across
            traditions. Through worship, service, and sacred care, we commit to
            uplifting the forgotten, comforting the broken, and walking
            alongside the marginalized—until no soul stands alone. We envision a
            compassionate, faith-driven community where no one is left
            behind—where spiritual support, nourishment, and dignified care are
            freely given to all, regardless of circumstance
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className={styles.subtitle}>
            <Users2 size={24} style={{ marginRight: "0.5rem" }} />
            Meet the Team
          </h2>

          <div style={{ padding: "1rem 0" }}>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={5000}
              arrows
              showDots
              containerClass={styles.carouselContainer}
              itemClass={styles.carouselItem}
              dotListClass={styles.carouselDots}
            >
              {teamMembers.map((person) => (
                <div key={person.name} className={styles.card}>
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={200}
                    height={200}
                    style={{ borderRadius: "8px" }}
                  />
                  <h4>{person.name}</h4>
                  <p>{person.role}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className={styles.subtitle}>
            Through unwavering dedication, we aim to:
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Mobilize a network of volunteers to prepare and distribute meals,
              assist in ceremonies, and provide companionship to those in need.
            </li>
            <li className={styles.listItem}>
              Provide pastoral care to the sick, disabled, and imprisoned,
              offering spiritual comfort, prayer, and emotional support in times
              of hardship.
            </li>
            <li className={styles.listItem}>
              Secure land for a charitable cemetery, offering free interment to
              those who cannot afford burial, honouring every life with dignity.
            </li>
            <li className={styles.listItem}>
              Develop an interactive online platform featuring:
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Virtual spiritual support and guidance
                </li>
                <li className={styles.listItem}>
                  An interfaith library of spiritually educational resources on
                  Christianity, Islam, and Judaism
                </li>
              </ul>
            </li>
            <li className={styles.listItem}>
              Educational classes and tools for scriptural study in original
              languages.
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className={styles.subtitle}>
            <MessageCircle size={24} style={{ marginRight: "0.5rem" }} />
            Testimonials
          </h2>

          <div style={{ padding: "1rem 0" }}>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={6000}
              arrows={false}
              showDots
              containerClass={styles.carouselContainer}
              itemClass={styles.carouselItem}
              dotListClass={styles.carouselDots}
            >
              {testimonials.map((item, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                  <cite>- {item.name}</cite>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
/** */
