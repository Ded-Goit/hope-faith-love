export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>UNITING FAITH WITH ACTION UNTIL NO SOUL STANDS ALONE</h1>
      <h2>LET`S CHANGE THE WORLD TOGETHER</h2>

      <p>
        Hope, Love, and Faith are three fundamental values ​​necessary for
        personal and social creation. Hope leads people through difficult times
        as a guide to a better future. Love promotes empathy, compassion and
        mercy in people. Faith gives strength and confidence necessary for
        people to live a happy life. Our community, based on the principles of
        hope, love and faith, calls on people to build a safe world for future
        generations.
      </p>

      <section>
        <h3>Our Core Values</h3>
        <ul>
          <li>
            <strong>Hope</strong> leads through difficult times toward a better
            future.
          </li>
          <li>
            <strong>Love</strong> nurtures compassion, empathy, and mercy.
          </li>
          <li>
            <strong>Faith</strong> gives strength and joy for meaningful living.
          </li>
        </ul>
      </section>

      <section>
        <h3>Example of Noto Sans (class)</h3>
        <p className="sans">
          This paragraph uses <code>Noto Sans</code>. It`s clean, modern, and
          suitable for multilingual content.
        </p>
      </section>

      <section>
        <h3>Example of Noto Serif (class)</h3>
        <p className="serif">
          Blessed are the peacemakers, for they shall be called children of God.
          — <em>Matthew 5:9</em>
        </p>
      </section>

      <section>
        <h3>Example of Merriweather (class)</h3>
        <blockquote className="merri">
          The light shines in the darkness, and the darkness has not overcome
          it.
        </blockquote>
      </section>

      <section>
        <h3>Example of Inter (class)</h3>
        <p className="inter">
          Inter is used as the default font for interface text. It`s highly
          readable and elegant in digital design.
        </p>
      </section>
    </main>
  );
}
