import { useState } from 'react'
import './App.css'

// Shadcn Components
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger } from './components/ui/tooltip'

// Icons
import { ChevronLeft, ChevronRight, Menu, X, ExternalLink } from 'lucide-react'
import { Icon } from '@iconify/react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  // PROJECTS
  const portfolioItems = [
    {
      title: "Journalist Work Attribution & Cross-Media Tracking System",
      description: "LLM-powered system to attribute journalist work across media platforms using Langchain and VectorDB.",
      img: "",
      status: "IN PROGRESS",
      demo: "unavailable",
      repo: "https://drive.google.com/drive/folders/1ZbedVSK1nKvT7cFneIedeU7Afo9LoW5b?usp=drive_link"
    },
    {
      title: "Emotion Recognition using LSTM",
      description: "LSTM model for emotion recognition from text, deployed as a web app with Streamlit. Exploration project for NLP and deep learning.",
      img: "/img/emotion-recognition.jpg",
      status: "FINISHED",
      demo: "https://emotion-recognition.streamlit.app",
      repo: "https://github.com/RaffiAkhdilputra/emotion-recognition-lstm-model"
    },
    {
      title: "Depressed or Not? - Naive Bayes Depression Detection ",
      description: "Depression detection using Naive Bayes models on social media text data, deployed with Streamlit.",
      img: "/img/depressed-classifier.jpg",
      status: "FINISHED",
      demo: "https://depressed-classifier.streamlit.app/",
      repo: "https://github.com/RaffiAkhdilputra/emotion-recognition-lstm-model"
    },
    {
      title: "Automobile Price Prediction",
      description: "Predicting automobile prices using linear Neural Networks with Tensorflow and Keras.",
      img: "",
      status: "FINISHED",
      demo: "unavailable",
      repo: "https://github.com/RaffiAkhdilputra/"
    },
    {
      title: "Heart Attack Symptom Predictor",
      description: "Depression detection using Naive Bayes models on social media text data, deployed with Streamlit.",
      img: "/img/heart-attack-symptom-predictor.jpg",
      status: "FINISHED",
      demo: "unavailable",
      repo: "https://github.com/RaffiAkhdilputra/heart-attack-symptom-prediction"
    },
    {
      title: "myMBTI - MBTI Testing Web App",
      description: "A 59-question MBTI testing web app with automated scoring and personality result generation using customized gemini AI.",
      img: "/img/my-mbti.jpg",
      status: "FINISHED",
      demo: "https://my-mbti.vercel.app/",
      repo: "https://github.com/RaffiAkhdilputra/my-MBTI"
    },
    {
      title: "DSTRCT - Online Thrift Store",
      description: "Laravel livewire-based online thrift store with user authentication, product management, and shopping cart features.",
      img: "/img/DSTRCT.jpg",
      status: "FINISHED",
      demo: "unavailable",
      repo: "https://github.com/RaffiAkhdilputra/DSTRCT"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentProject = portfolioItems[currentSlide]

  const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const [loaded, setLoaded] = useState(false)

    return (
      <div className="carousel-project-image">
        {!loaded && (
          <div className="placeholder-image animate-pulse">
            <Icon icon="line-md:loading-loop" width={40} height={40} />
          </div>
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <>
      {/* Hamburger Menu */}
      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={50} /> : <Menu size={50} />}
      </button>

      {/* Sidebar Menu */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <nav className="sidebar-nav">
          <a href="#profile" className="sidebar-link" onClick={() => setMenuOpen(false)}>
            PROFILE
          </a>
          <a href="#projects" className="sidebar-link" onClick={() => setMenuOpen(false)}>
            PROJECTS
          </a>
          <a href="#contact" className="sidebar-link" onClick={() => setMenuOpen(false)}>
            CONTACT
          </a>
        </nav>
      </aside>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main>
        {/* Hero Section */}
        <section id="profile" className="hero-section">
          <div className="text-center px-6 animate-fade-in">
            <img className="profile-picture bg-white" src="" alt="Profile Picture" />
            <h1 className="hero-subtitle">
              MUHAMMAD
            </h1>
            <h2 className="hero-title">
              RAFFI AKHDILPUTRA
            </h2>

            {/* Social Links */}
            <div className="hero-social-links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" />
              </a>
            </div>

            <div className="hero-description-container max-w-3xl mx-auto">
              <p className="text-lg text-center">Areas of Expertise</p>
              <Table className="max-w-[55rem] pb-[2rem] px-[1rem] mx-auto">
                <TableHeader className="table-header">
                  <TableRow>
                    <TableHead className="text-center p-[1rem]">AI/ML</TableHead>
                    <TableHead className="text-center p-[1rem]">FrontEnd</TableHead>
                    <TableHead className="text-center p-[1rem]">BackEnd</TableHead>
                    <TableHead className="text-center p-[1rem]">Database</TableHead>
                    <TableHead className="text-center p-[1rem]">Tools</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="table-body">
                  <TableRow>
                    <TableCell>
                      <div className="skills-list p-[0.5rem]">
                        <Tooltip>
                          <TooltipTrigger className="tooltip-trigger" asChild>
                            <Icon className="skill-badge" icon="material-icon-theme:python" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Python</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:tensorflow" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Tensorflow</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:pandas" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Pandas</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:keras" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Keras</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="simple-icons:langchain" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Langchain</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="skills-list p-[0.5rem]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:streamlit" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Streamlit</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="simple-icons:odoo" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Odoo</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="skill-icons:html" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">HTML</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="skill-icons:css" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">CSS</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="skills-list p-[0.5rem]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:react" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">React</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="skill-icons:flask-light" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Flask</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="material-icon-theme:django" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Django</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="skills-list p-[0.5rem]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="simple-icons:mysql" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">MySQL</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="akar-icons:postgresql-fill" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">PostgreSQL</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="logos:supabase-icon" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Supabase</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="skills-list p-[0.5rem]">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:vscode" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">VS Code</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:googlecolab" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Google Colab</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="devicon:docker" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Docker</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="mdi:github" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Github</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Icon className="skill-badge" icon="logos:tableau-icon" />
                          </TooltipTrigger>
                          <TooltipContent className="tooltip-content">Tableau</TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="table-cell-highlighted">
                      Prefered
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Portfolio Carousel Section */}
        <section id="projects" className="portfolio-carousel-section min-h-screen flex flex-col justify-center">
          <div className="carousel-container">
            <div className="carousel-card">
              <div className="carousel-content-wrapper">
                <div className="carousel-image">
                  {currentProject.img !== "" ? (
                    <LazyImage
                      src={currentProject.img}
                      alt={currentProject.title}
                    />
                  )
                    : (
                      <div className="carousel-project-image placeholder-image">
                        <Icon icon="mdi:image-off-outline" />
                        <p className="mt-4 text-sm text-white/40">No Image Available</p>
                      </div>
                    )
                  }
                  <div className="carousel-lines"></div>
                </div>

                <div className="carousel-text-panel">
                  <div className="carousel-text-content">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`${currentProject.status === 'IN PROGRESS'
                        ? 'in-progress'
                        : 'finished'
                        }`}>
                        {currentProject.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="carousel-title">{currentProject.title}</h3>
                      <p className="carousel-description">{currentProject.description}</p>
                    </div>

                    <div className="carousel-action-buttons">
                      {currentProject.demo !== 'unavailable' ? (
                        <a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="carousel-action-button"
                        >
                          <ExternalLink size={16} />
                          <span>View Demo</span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="carousel-action-button"
                        >
                          <ExternalLink size={16} />
                          <span>Demo Unavailable</span>
                        </button>
                      )}
                      <a
                        href={currentProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-action-button"
                      >
                        <Icon icon="mdi:github" />
                        <span>Repository</span>
                      </a>
                    </div>
                  </div>

                  <div className="carousel-nav-inline">
                    <button
                      onClick={prevSlide}
                      className="carousel-button-inline"
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div className="carousel-dots-inline">
                      {portfolioItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`carousel-dot-inline ${index === currentSlide ? 'active' : ''}`}
                          aria-label={`Go to project ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="carousel-button-inline"
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="cta-section">
          <div className="container">
            <h2 className="cta-title">
              Interested with my work? let's connect!
            </h2>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button btn-glow"
            >
              REACH ME
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a
                href="https://instagram.com/akhdilputra_"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Icon className="iconify" icon="mdi:instagram" />
                <span>akhdilputra_</span>
              </a>
              <a
                href="tel:+6282178882457"
                className="footer-link"
              >
                <Icon className="iconify" icon="mdi:linkedin" />
                <span>+62 812-7888-2457</span>
              </a>
              <a
                href="https://github.com/raffiakhdilputra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Icon className="iconify" icon="mdi:github" />
                <span>raffiakhdilputra</span>
              </a>
              <a
                href="https://linkedin.com/in/muhammadraffiakhdilputra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Icon className="iconify" icon="mdi:linkedin" />
                <span>muhammadraffiakhdilputra</span>
              </a>
              <a
                href="mailto:raffiakhdilputra123@gmail.com"
                className="footer-link"
              >
                <Icon className="iconify" icon="mdi:gmail" />
                <span>raffiakhdilputra123@gmail.com</span>
              </a>
            </div>

            <div className="footer-bottom">
              <p>nothing more down here...</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App