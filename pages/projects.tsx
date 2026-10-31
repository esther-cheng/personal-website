import { Fragment, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/header'
import Carousel, { CarouselSlide } from '../components/carousel'
import '../styles/projects.css'
import '../app/globals.css'

export type Project = {
  id: string
  title: string
  blurb: string
  images: string[]
  slides?: CarouselSlide[]
  tech: string[]
  details?: string
  liveUrl?: string
  demoUrl?: string
  repoUrl?: string
  permalink?: string
}

// A larger sample set so the scroll-reveal feels meaningful
const allProjects: Project[] = [
  {
    id: 'p0',
    title: 'Pickleball Matchmaker',
    blurb:
      'Full-stack platform designed to eliminate the chaos of managing social pickleball sessions, open play, and tournaments.',
    images: [
      '/img/pickleball-matchmaker/pbm1.png',
      '/img/pickleball-matchmaker/pbm2.png',
      '/img/pickleball-matchmaker/pbm3.png',
      '/img/pickleball-matchmaker/pbm4.png',
      '/img/pickleball-matchmaker/pbm5.png',
    ],
    slides: [
      {
        type: 'image',
        src: '/img/pickleball-matchmaker/pbm1.png',
        alt: 'Pickleball Matchmaker - Welcome screen',
      },
      {
        type: 'image',
        src: '/img/pickleball-matchmaker/pbm2.png',
        alt: 'Pickleball Matchmaker - Profile and Chemistry Spotlight',
      },
      {
        type: 'image',
        src: '/img/pickleball-matchmaker/pbm3.png',
        alt: 'Pickleball Matchmaker - Rating Over Time and Session History',
      },
      {
        type: 'image',
        src: '/img/pickleball-matchmaker/pbm4.png',
        alt: 'Pickleball Matchmaker - Group Roster Management',
      },
      {
        type: 'image',
        src: '/img/pickleball-matchmaker/pbm5.png',
        alt: 'Pickleball Matchmaker - Session Format Selection',
      },
    ],
    tech: [
      'Next.js',
      'React/TypeScript',
      'PostgreSQL (Neon)',
    ],
    details:
      'Pickleball Matchmaker is a full-stack platform designed to eliminate the chaos of managing social pickleball sessions, open play, and tournaments. Powered by a custom Monte Carlo matchmaking engine, the application dynamically generates balanced court lineups based on Elo skill ratings, enforces fair rotation without consecutive bench sits, and adapts to partner requests and odd player counts. The platform features live score entry, interactive tournament bracket management, player profile dashboards with rating progression graphs, and an expectation-adjusted doubles synergy algorithm that calculates chemistry between partners over time.',
    liveUrl: 'https://db-pickleball.netlify.app/',
    repoUrl: 'https://github.com/NathanG1en/Pickleball-Matcher',
  },
  {
    id: 'p1',
    title: 'AI Course Advisor',
    blurb: 'Course recommendation tool using retrieval-augmented generation (RAG)',
    images: ['/img/course-advisor/poster.png', '/img/course-advisor/onepager.png'],
    slides: [
      {
        type: 'iframe',
        src: 'https://drive.google.com/file/d/1CDa8MJsXw2Z2-CWd-Ap1xEARrrFis3MP/preview',
        alt: 'AI Course Advisor Demo Video',
        allow: 'fullscreen',
        id: 'video',
      },
      {
        type: 'image',
        src: '/img/course-advisor/poster.png',
        alt: 'AI Course Advisor Poster',
      },
      {
        type: 'image',
        src: '/img/course-advisor/onepager.png',
        alt: 'AI Course Advisor One Pager',
      },
    ],
    tech: ['React/TypeScript', 'OpenAI API', 'Python/Flask', 'MongoDB', 'Redis', 'Docker', 'Figma', 'Git', 'Duke OKD'],
    details:
      'Our project integrated Duke\'s course catalog with a fine-tuned version of OpenAI\'s gpt-3.5-turbo model. We semantically searched our database for vector representations closest to the user\'s query (RAG) to generate relevant courses. Throughout the summer, we worked closely with the Duke University Registrar and the Academic Advising Center to make a tool that was accessible, useful, and accurate for students and advisors alike.',
    demoUrl: 'https://drive.google.com/drive/folders/1bVJxTTljrxHJ367_svXWPMSvE4fS1OI3?usp=sharing',
  },
  {
    id: 'p2',
    title: 'CoLab Attendance Tracker',
    blurb: 'Tablet app for tracking attendance at Duke Innovation CoLab',
    images: ['/img/tablet/tablet1.png', '/img/tablet/tablet2.png', '/img/tablet/tablet3.png', '/img/tablet/tablet4.png', '/img/tablet/tablet5.png', '/img/tablet/tablet6.png',],
    tech: ['Next.js', 'MongoDB', 'Raspberry Pi', 'OAuth'],
    details:
      'Attendance tracking application connected to a card reader, Raspberry Pi, and tablet to track course attendance at the Duke Innovation CoLab. Admin users can view and manage attendance records in authenticated admin dashboard.',
  },
  {
    id: 'p3',
    title: '13 Going On 30 App',
    blurb: '13 Going on 30 inspired goals/values alignment checker',
    images: ['/img/13-going-on-30/13-1.png', '/img/13-going-on-30/13-2.png'],
    tech: ['Next.js', 'TypeScript', 'LiteLLM'],
    details: 'Built for CINE190S. Inspired by 13 Going on 30. Alignment checker for user\'s goals and values powered by LiteLLM.',
  },
  {
    id: 'p4',
    title: 'Poll Pal',
    blurb: 'Connecting users to polling location and candidate information during the 2024 election',
    images: ['/img/poll-pal/pollpal1.png'],
    tech: ['Node.js', 'Express', 'React', 'MongoDB'],
    details:
      'Connecting users to polling location and candidate information during the 2024 election',
  }
]

export default function ProjectsPageAlt() {
  const BATCH = 3
  const [visibleCount, setVisibleCount] = useState(BATCH)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sentinelRef.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCount((v) => Math.min(allProjects.length, v + BATCH))
          }
        })
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    )

    obs.observe(sentinelRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="body">
      <Header activeLink="projects" />
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">Past Work</h1>
        <p className="mt-2 text-muted-foreground">Scroll down to reveal projects — toggle images to view photos</p>
      </header>

      <section className="space-y-12">
        {allProjects.slice(0, visibleCount).map((proj, idx) => {
          const isLeft = idx % 2 === 0
          return (
            <Fragment key={proj.id}>
              <motion.article
                id={proj.id}
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {/* Image / Carousel column */}
                <div className="md:w-1/2 w-full">
                  <Carousel
                    slides={
                      proj.slides ??
                      proj.images.map((src, i) => ({
                        type: 'image',
                        src,
                        alt: `${proj.title} slide ${i + 1}`,
                      }))
                    }
                  />
                </div>

                {/* Content column */}
                <div className="md:w-1/2 w-full">
                  <h2 className="text-2xl font-semibold">{proj.title}</h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{proj.blurb}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <li key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-btn"
                      >
                        Live
                      </a>
                    )}

                    {proj.demoUrl && proj.demoUrl !== '#' && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-btn"
                      >
                        Demo
                      </a>
                    )}

                    {proj.repoUrl && proj.repoUrl !== '#' && (
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action-btn"
                      >
                        GitHub
                      </a>
                    )}

                    <button
                      onClick={() => setExpandedId(expandedId === proj.id ? null : proj.id)}
                      aria-expanded={expandedId === proj.id}
                      aria-controls={`proj-${proj.id}-details`}
                      className="project-action-btn"
                    >
                      <span>{expandedId === proj.id ? 'Less' : 'More'}</span>
                      <span className="text-[10px] leading-none transition-transform duration-200">
                        {expandedId === proj.id ? '▲' : '▼'}
                      </span>
                    </button>
                  </div>

                {expandedId === proj.id && (
                  <div id={`proj-${proj.id}-details`} className="mt-4 text-sm text-slate-700 dark:text-slate-300 border-t pt-4">
                    <p className="leading-relaxed">{proj.details}</p>

                    {proj.permalink && proj.permalink !== '#' && (
                      <div className="mt-3 flex gap-3">
                        <a href={proj.permalink} target="_blank" rel="noreferrer" className="text-xs text-slate-500 dark:text-slate-400 hover:underline">
                          Permalink
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
            {idx < visibleCount - 1 && <hr className="project-divider" />}
          </Fragment>
          )
        })}

        <div ref={sentinelRef} />

        {visibleCount >= allProjects.length && <p className="text-center text-sm text-slate-500">You’ve reached the end — that’s all for now.</p>}
      </section>

      <style jsx>{`
        :global(.text-muted-foreground) {
          color: rgba(100, 116, 139, 1);
        }
      `}</style>
    </div>
    </div>
  )
}
