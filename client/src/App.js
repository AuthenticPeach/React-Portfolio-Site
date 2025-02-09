// client/src/App.js
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Helmet>
        <title>Travis Peach Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio of Travis Peach showcasing education, experience, and projects." />
      </Helmet>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Profile />
      <div className="container">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

// Header with navigation links and dark mode toggle
function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>Travis Peach’s Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#achievements">Achievements &amp; Interests</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

// Profile section with profile picture, bio, and social links
function Profile() {
  return (
    <section className="profile">
      <img src="/profile.png" alt="Travis Peach" className="profile-pic" />
      <div className="profile-info">
        <h2>Travis Peach</h2>
        <p>
          I am a Software Engineer passionate about creating innovative and scalable software solutions.
          I specialize in full-stack development and love contributing to open-source projects.
          Let’s connect and build something amazing together!
        </p>
        <div className="social-links">
          <a href="https://github.com/AuthenticPeach" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/travis-peach-4b5978113/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

// MainContent including other sections plus ProjectsSection
function MainContent() {
  return (
    <main>
      <Section id="education" title="Education">
        <p><strong>BS - Computer Engineering</strong></p>
        <p>San Jose State University | College of Engineering</p>
        <p><em>Graduated: December 2024</em></p>
        <p>Organizations: Software and Computer Engineering Society</p>
        <p>
          Relevant Coursework: Data Structures and Algorithms, Software Engineering I &amp; II,
          Operating Systems, Computer Networks, Compiler Design, Internet of Things, Autonomous Mobile Robotics
        </p>
      </Section>
      
      <Section id="experience" title="Experience">
        <p><strong>MacBlowouts Inc., Senior Technician</strong></p>
        <p>San Jose, CA | June 2018 - February 2025</p>
        <ul>
          <li>Led and managed repair projects involving Apple devices, ensuring timely completion and high-quality results.</li>
          <li>Assisted customers with troubleshooting hardware and software issues, providing clear guidance and technical support.</li>
          <li>Improved workflow efficiency by documenting recurring issues and proposing streamlined solutions.</li>
        </ul>
      </Section>
      
      <Section id="projects" title="Projects">
        <ProjectsSection />
      </Section>
      
      <Section id="skills" title="Skills">
        <p><strong>Languages:</strong> Python (3 years), C/C++ (2 years), JavaScript (2 years), SQL (1 year)</p>
        <p><strong>Frameworks &amp; Libraries:</strong> Node.js (1.5 years), React (1 year), Flask (1 year)</p>
        <p><strong>Databases:</strong> MongoDB (1 year), Firebase (1 year)</p>
        <p><strong>Tools:</strong> Git/GitHub (4 years), Linux (2 years), Docker (1 year), Figma (1 year)</p>
        <p><strong>Other:</strong> Agile Development (2 years), RESTful API Design (1 year), Full-Stack Development (2 years)</p>
      </Section>
      
      <Section id="achievements" title="Achievements &amp; Interests">
        <ul>
          <li>
            Published and managed over 20 mods on the Steam Workshop, with a top mod reaching 2.3M subscribers.
            Check out my top mod{' '}
            <a
              href="https://steamcommunity.com/sharedfiles/filedetails/?id=2335368829"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>.
          </li>
          <li>
            Enthusiastic about open-source projects and actively contribute to community-driven initiatives.
          </li>
          <li>
            Personal interest in AI applications and game development.
          </li>
        </ul>
      </Section>

      <ContactSection />      
    </main>
  );
}

// A reusable Section component for consistency
function Section({ id, title, children }) {
  return (
    <section id={id} data-aos="fade-up">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// New component to display a list of project cards with "More Info" functionality
function ProjectsSection() {
  const projects = [
    {
      id: 'quack',
      title: 'Quack Messaging App (Software Engineering II)',
      summary: 'Developed a customizable messaging app using Node.js, MongoDB, Python, JavaScript, HTML, and CSS.',
      description: 'In this project, I built a fully functional messaging application with user authentication, real-time messaging, and a sleek UI designed in Figma. Additional images and a demo video are provided below.',
      images: [
        "a/nOjMUFj",
        "a/XyExUGP",
        "a/E30aXI2"
      ],
      videos: [
        'https://drive.google.com/file/d/1jj5DTr3Wu-2hFrNBrEs2TQomfYPy9gLD/view?usp=drive_link'
      ],
      liveLink: 'https://quackmp.up.railway.app/'
    },
    {
      id: 'foodDelivery',
      title: 'Food Delivery Robot (Senior Design Project)',
      summary: 'Designed the software stack for an autonomous delivery robot using sensor integration and navigation.',
      description: 'This project involved integrating sensor data (from LiDAR and a Raspberry Pi Camera) to implement object detection and pathfinding. Check out the images and video demonstration below.',
      images: [
        'a/laQu916'
      ],
      videos: ['https://drive.google.com/file/d/1ifp-h-qO-OkRfOZX3tDzrsSrncNISEBT/view?usp=sharing']
      // No live link provided for this project.
    },
    {
      id: 'aqsensinghub',
      title: 'Air Quality Sensing Hub (IoT Class Project)',
      summary: 'Created a web application using React and Firebase to visualize real-time sensor data from an IoT hub.',
      description: 'Developed backend services in Python to process and store air quality metrics efficiently. Check out the images and video demonstration below.',
      images: [
        'a/Dxd2w5Z'
      ],
      videos: ['https://drive.google.com/file/d/1iecfJ6h1DnoU3S5SXnFIfbWlMht49sXQ/view?usp=sharing'],
      liveLink: 'https://cmpe188-group7.web.app/'
    }
    // Add additional projects similarly...
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} onMoreInfo={() => setSelectedProject(project)} />
      ))}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

// A simple card for each project summary
function ProjectCard({ project, onMoreInfo }) {
  return (
    <div className="project-card" data-aos="fade-up">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <button onClick={onMoreInfo}>More Info</button>
    </div>
  );
}
// A helper function to convert Google Drive URLs.
function convertGoogleDriveLink(url, type) {
  const fileIdRegex = /\/d\/([^/?]+)/;
  const match = url.match(fileIdRegex);
  if (match && match[1]) {
    const fileId = match[1];
    if (type === 'image') {
      // Try using docs.google.com for images
      return `https://docs.google.com/uc?export=view&id=${fileId}`;
    } else if (type === 'video') {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
  }
  return url;
}

function ImgurEmbed({ dataId, title }) {
  // This component renders a blockquote that Imgur’s embed script will process.
  // For best results, add the following script to your public/index.html:
  // <script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
  const embedHTML = `
    <blockquote class="imgur-embed-pub" lang="en" data-id="${dataId}">
      <a href="//imgur.com/${dataId}">${title}</a>
    </blockquote>
  `;
  return (
    <div
      className="imgur-embed-wrapper"
      dangerouslySetInnerHTML={{ __html: embedHTML }}
    />
  );
}


// A modal to display detailed project info, images, and videos
function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" data-aos="zoom-in">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Render the "Visit Live Site" button if a liveLink exists */}
        {project.liveLink && (
          <div className="live-link-container">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-link-button"
            >
              Visit Live Site
            </a>
          </div>
        )}
        <div className="modal-media">
          {project.images && project.images.map((imgEmbedId, index) => (
            <ImgurEmbed
              key={index}
              dataId={imgEmbedId}
              title={`${project.title} Image ${index + 1}`}
            />
          ))}
          {project.videos && project.videos.map((video, index) => (
            <iframe
              key={index}
              src={convertGoogleDriveLink(video, 'video')}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${project.title} video ${index + 1}`}
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>
        You can reach me via email at{' '}
        <a href="mailto:travispeachohyeah@gmail.com">travispeachohyeah@gmail.com</a>
      </p>
      <p>
        Or text me at{' '}
        <a href="tel:+4087074227">+1 (408) 707-4227</a>
      </p>
    </section>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Travis Peach</p>
    </footer>
  );
}

export default App;
