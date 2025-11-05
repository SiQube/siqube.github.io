import React, { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cursor from './components/Cursor'
import About from './components/Sections/About'
import Teaching from './components/Sections/Teaching'
import CV from './components/Sections/CV'
import Publications from './components/Sections/Publications'
import MediaGallery from './components/Sections/MediaGallery'
import Contact from './components/Sections/Contact'
import Footer from './components/Sections/Footer'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'cv', label: 'CV' },
  { id: 'publications', label: 'Publications' },
  { id: 'media', label: 'Media' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [active, setActive] = useState('home')
  const heroRef = useRef(null)
  const cursorRef = useRef(null)
  const galleryRef = useRef(null)

  // Parallax for hero
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const offset = Math.max(-rect.top, 0)
      heroRef.current.style.backgroundPosition = `center ${50 + offset * 0.02}%`
      heroRef.current.style.transform = `translateY(${offset * 0.02}px)`
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('revealed')
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((r) => io.observe(r))
    return () => io.disconnect()
  }, [])

  // Custom cursor movement
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    const move = (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Active section observer
  useEffect(() => {
    const opts = { root: null, rootMargin: '0px', threshold: 0.45 }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) setActive(ent.target.id)
      })
    }, opts)
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // Gallery interactions (wheel->horizontal, drag)
  useEffect(() => {
    const el = galleryRef.current
    if (!el) return

    let isDown = false
    let startX
    let scrollLeft

    const onMouseDown = (e) => {
      isDown = true
      el.classList.add('dragging')
      startX = e.pageX - el.offsetLeft
      scrollLeft = el.scrollLeft
    }
    const onMouseUp = () => {
      isDown = false
      el.classList.remove('dragging')
    }
    const onMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      const walk = (x - startX) * 1.2
      el.scrollLeft = scrollLeft - walk
    }
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY
        e.preventDefault()
      }
    }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="font-sans text-gray-900 antialiased">
      <Cursor ref={cursorRef} />
      <Nav sections={sections} active={active} onNavigate={scrollToSection} />

      <Hero ref={heroRef} onExplore={() => scrollToSection('about')} />

      <main className="space-y-0">
        <section id="about" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <About />
        </section>

        <section id="teaching" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <Teaching />
        </section>

        <section id="cv" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <CV />
        </section>

        <section id="publications" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <Publications />
        </section>

        <section id="media" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <MediaGallery galleryRef={galleryRef} />
        </section>

        <section id="contact" className="min-h-screen snap-start flex items-center reveal-on-scroll opacity-0 transform translate-y-6 transition-all duration-700">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* small inline helpers */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .reveal-on-scroll.revealed { opacity: 1 !important; transform: none !important; }
        .dragging { cursor: grabbing !important; }
        @keyframes float { 0%{ transform: translateY(0)} 50%{ transform: translateY(-8px)} 100%{ transform: translateY(0)} }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
