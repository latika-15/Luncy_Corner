import "./About.css";

const timeline = [
  {
    year: "2022",
    title: "Started Designing",
    description:
      "Began exploring Canva, typography, and social media design while experimenting with different visual styles."
  },
  {
    year: "2023",
    title: "First Freelance Project",
    description:
      "Worked with my first client and discovered the value of thoughtful branding and communication."
  },
  {
    year: "2024",
    title: "Building My Style",
    description:
      "Focused on clean layouts, pastel palettes, and editorial-inspired visuals."
  },
  {
    year: "Today",
    title: "Luncy Corner",
    description:
      "Helping businesses communicate through elegant, modern, and meaningful design."
  }
];

const principles = [
  "Clarity over complexity.",
  "Design should solve problems.",
  "Every detail matters.",
  "Consistency builds trust."
];

const tools = [
  "Canva",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "React",
  "MongoDB"
];

function About() {
  return (
    <main className="about-page section">

      <section className="about-hero container">

        <span className="section-label">
          ABOUT
        </span>

        <h1 className="title">
          The Story Behind
          <br />
          Luncy Corner
        </h1>

        <p className="subtitle">
          I'm <strong>Latika Tewari</strong>, a creative designer passionate about
          building thoughtful visual experiences through branding,
          Canva design, social media creatives, and presentations.
        </p>

      </section>

      <section className="timeline-section container">

        {timeline.map((item) => (

          <article className="timeline-card" key={item.year}>

            <div className="timeline-year">
              {item.year}
            </div>

            <div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </article>

        ))}

      </section>

      <section className="principles container">

        <div className="left">

          <h2>
            My Design Philosophy
          </h2>

          <p>
            Great design isn't loud.
            It quietly communicates,
            connects,
            and lasts.
          </p>

        </div>

        <div className="right">

          {principles.map((item) => (

            <div className="principle-card" key={item}>
              {item}
            </div>

          ))}

        </div>

      </section>

      <section className="tools-section container">

        <h2>
          Tools I Love
        </h2>

        <div className="tool-grid">

          {tools.map((tool) => (

            <div className="tool-card" key={tool}>
              {tool}
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default About;