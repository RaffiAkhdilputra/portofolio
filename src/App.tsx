import { useState } from 'react'
import './App.css'
import { Linkedin, Github, Instagram, Mail, Phone, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { Icon } from '@iconify/react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const portfolioItems = [
    {
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis arcu, fringilla eu sem id, tincidunt hendrerit lacus. Curabitur et orci id justo porta fringilla vitae id augue. Etiam commodo ipsum sit amet pulvinar rhoncus. Aliquam congue quam nec magna consequat, et interdum velit feugiat."
    },
    {
      title: "Project Two",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Project Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Project Four",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      title: "Project Five",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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

            <div className="hero-description-container mt-6 max-w-3xl mx-auto">
              <p className="text-lg text-justify">
                I am a passionate deep learning engineer with a strong foundation in computer science and mathematics. My expertise lies in developing and implementing advanced machine learning algorithms to solve complex problems. I thrive on innovation and continuously seek to expand my knowledge in the ever-evolving field of artificial intelligence.
              </p>
            </div>

          </div>
        </section>

        {/* Animated Banner */}
        <div className="animated-banner">
          <div className="banner-text">
            DEEP LEARNING ARTIFICIAL INTELLIGENCE AUTOMATIONS MACHINE LEARNING ARTIFICIAL INTELLIGENCE AUTOMATIONS MACHINE LEARNING
          </div>
        </div>

        {/* Portfolio Carousel Section */}
        <section id="projects" className="portfolio-carousel-section">
          <div className="carousel-container">
            <div className="carousel-card">
              <div className="carousel-content-wrapper">
                {/* Image Side */}
                <div className="carousel-image">
                  <div className="carousel-lines"></div>
                </div>

                {/* Text Side */}
                <div className="carousel-text-panel">
                  <div className="carousel-text-content">
                    <h3 className="carousel-title">
                      {portfolioItems[currentSlide].title}
                    </h3>
                    <p className="carousel-description">
                      {portfolioItems[currentSlide].description}
                    </p>
                  </div>

                  {/* Navigation inside text panel */}
                  <div className="carousel-nav-inline">
                    <button
                      onClick={prevSlide}
                      className="carousel-button-inline"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <div className="carousel-dots-inline">
                      {portfolioItems.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`carousel-dot-inline ${index === currentSlide ? 'active' : ''}`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="carousel-button-inline"
                      aria-label="Next slide"
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
              <Linkedin size={24} />
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
                <Instagram size={20} />
                <span>akhdilputra_</span>
              </a>
              <a
                href="tel:+6282178882457"
                className="footer-link"
              >
                <Phone size={20} />
                <span>+62 812-7888-2457</span>
              </a>
              <a
                href="https://github.com/raffiakhdilputra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Github size={20} />
                <span>raffiakhdilputra</span>
              </a>
              <a
                href="https://linkedin.com/in/muhammadraffiakhdilputra"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={20} />
                <span>muhammadraffiakhdilputra</span>
              </a>
              <a
                href="mailto:raffiakhdilputra123@gmail.com"
                className="footer-link"
              >
                <Mail size={20} />
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