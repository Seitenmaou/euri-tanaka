import './App.css';

const works = [
  {
    title: 'PRTS',
    tagline: 'PRTS: a familiar terminal for certain Doctors. Welcome back, Doctor',
    description:
      'A simulated terminal interface inspired from Arknights. Userful tools to detailed information about characters, stories, and events within the game.',
    responsibilities: 'End-to-end product: research, UI design, implementation, deployment',
    tags: ['website', 'for fun'],
    tech: ['React'],
    compatibility: {
      desktop: 'Full experience',
    },
    links: {
      live: 'https://seitenmaou.github.io/prts/',
      github: 'https://github.com/Seitenmaou/prts'
    }
  },
  {
    title: 'AlphaCubicCipher',
    tagline: 'A (hopefully) original cipher system using a cubic structure to encode messages.',
    description:
      'A (de)cipher tool that uses a 3D cube structure to encode and decode messages. Each letter is mapped to a specific coordinate within the cube, allowing for a unique way to encrypt text.',
    responsibilities: 'End-to-end product: research, UI design, implementation, deployment',
    tags: ['website', 'for fun'],
    tech: ['React'],
    compatibility: {
      desktop: 'Full experience',
    },
    links: {
      live: 'TBA',
      github: 'https://github.com/Seitenmaou/AlphaCubicCipher'
    }
  },
    {
    title: 'Space Slinger',
    tagline: 'A 2D space shooter game built in Python with Pygame.',
    description:
      'A retro-style 2D space shooter game. Players control a spaceship through space in a fast paced environment of waves of enemies, or slow it down with your ability.',
    responsibilities: 'End-to-end product: research, UI design, implementation',
    tags: ['game', 'for fun'],
    tech: ['Python', 'Pygame'],
    compatibility: {
      desktop: 'Full experience',
    },
    links: {
      live: 'TBA',
      github: 'https://github.com/Seitenmaou/spaceslinger',
      video: 'https://www.youtube.com/watch?v=lx76LH7gd4U'
    }
  },
    {
    title: 'Vision',
    tagline: '(In development) A 3D adventure puzzle escape room game built in Unreal Engine.',
    description:
      'Race against time to solve color based puzzles as color fades over time. Or, is the fastest path the best one?',
    responsibilities: 'End-to-end product: research, UI design, implementation',
    tags: ['game', 'for fun'],
    tech: ['Unreal Engine', 'Blueprints'],
    compatibility: {
      desktop: 'Full experience',
    },
    links: {
      live: 'TBA',
      github: 'https://github.com/Seitenmaou/AlphaCubicCipher',
      video: 'https://www.youtube.com/watch?v=RFBuUT0O2Pk'
    }
  },
  
];

const contact = {
  email: 'euri@mugendiary.com',
  location: 'Los Angeles, CA',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/Seitenmaou/'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/euritanaka/'
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@ET_magic'
    }
  ]
};

const ProjectCard = ({ project }) => {
  const {
    title,
    tagline,
    description,
    responsibilities,
    tags,
    tech,
    compatibility,
    links
  } = project;

  const hasMedia = Boolean(links?.live || links?.video || links?.github);

  return (
    <article className="project-card">
      <div className="project-body">
        <h3>{title}</h3>
        {tagline && <p className="project-tagline">{tagline}</p>}
        <p className="project-description">{description}</p>
        {responsibilities && (
          <p className="project-responsibilities">{responsibilities}</p>
        )}
        {tags?.length ? (
          <ul className="chip-list chip-list--tags">
            {tags.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {tech?.length ? (
          <ul className="chip-list chip-list--tech">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {compatibility ? (
          <div className="project-compatibility">
            <h4>Device compatibility</h4>
            <dl>
              <div>
                <dt>Desktop</dt>
                <dd>{compatibility.desktop}</dd>
              </div>
              <div>
                <dt>Tablet</dt>
                <dd>{compatibility.tablet}</dd>
              </div>
              <div>
                <dt>Smartphone</dt>
                <dd>{compatibility.smartphone}</dd>
              </div>
              <div>
                <dt>Orientation</dt>
                <dd>{compatibility.orientation}</dd>
              </div>
            </dl>
          </div>
        ) : null}
      </div>
      {hasMedia ? (
        <div className="project-links">
          {links?.live && (
            <a href={links.live} target="_blank" rel="noreferrer">
              Visit
            </a>
          )}
          {links?.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {links?.video && (
            <a
              href={`https://www.youtube.com/watch?v=${links.video}`}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          )}
        </div>
      ) : null}
      {links?.video ? (
        <div className="project-media">
          <iframe
            title={`${title} demo`}
            src={`https://www.youtube.com/embed/${links.video}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : null}
    </article>
  );
};

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Product designer & creative technologist</p>
          <h1>Euri Tanaka</h1>
          <p className="hero__lede">
            I build shower ideas into products and experiences that blend storytelling,
            interactivity, and polish.
          </p>
          <div className="hero__actions">
            <a href="#works">See works</a>
          </div>
        </div>
      </header>

      <main>
        <section id="works" className="section">
          <div className="section__header">
            <h2>Works</h2>
          </div>
          <div className="project-grid">
            {works.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section__header">
            <h2>Contact</h2>
            <p>
              We have the magic, now lets use it.
            </p>
          </div>
          <div className="contact-card">
            <p className="contact-card__location">{contact.location}</p>
            <a className="contact-card__email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <div className="contact-card__socials">
              {contact.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Euri Tanaka. Crafted with curiosity.</small>
      </footer>
    </div>
  );
}

export default App;
