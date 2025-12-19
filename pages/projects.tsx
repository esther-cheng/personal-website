import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/header'
import '../styles/projects.css'
import '../app/globals.css'

export type Project = {
  id: string
  title: string
  blurb: string
  images: string[]
  tech: string[]
  details?: string
  liveUrl?: string
  repoUrl?: string
}

// A larger sample set so the scroll-reveal feels meaningful
const allProjects: Project[] = [
  {
    id: 'p1',
    title: 'AI Course Advisor',
    blurb: 'Course recommendation tool using retrieval-augmented generation (RAG)',
    images: ['/img/course-advisor/poster.png', '/img/course-advisor/onepager.png'],
    tech: ['React/TypeScript', 'OpenAI API', 'Python/Flask', 'MongoDB', 'Redis', 'Docker', 'Figma', 'Git', 'Duke OKD'],
    details:
      'Our project integrated Duke\'s course catalog with a fine-tuned version of OpenAI\'s gpt-3.5-turbo model. We semantically searched our database for vector representations closest to the user\'s query (RAG) to generate relevant courses. Throughout the summer, we worked closely with the Duke University Registrar and the Academic Advising Center to make a tool that was accessible, useful, and accurate for students and advisors alike.',
    liveUrl: 'https://drive.google.com/drive/folders/1bVJxTTljrxHJ367_svXWPMSvE4fS1OI3?usp=sharing',
    repoUrl: '#',
  },
  {
    id: 'p2',
    title: 'CoLab Attendance Tracker',
    blurb: 'Tablet app for tracking attendance at Duke Innovation CoLab',
    images: ['/img/tablet/tablet1.png', '/img/tablet/tablet2.png', '/img/tablet/tablet3.png', '/img/tablet/tablet4.png', '/img/tablet/tablet5.png', '/img/tablet/tablet6.png',],
    tech: ['Next.js', 'MongoDB', 'Raspberry Pi', 'OAuth'],
    details:
      'Attendance tracking application connected to a card reader, Raspberry Pi, and tablet to track course attendance at the Duke Innovation CoLab. Admin users can view and manage attendance records in authenticated admin dashboard.',
    liveUrl: '#',
    repoUrl: '#',
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
    liveUrl: '#',
    repoUrl: '#',
  }
]

// Gallery component: simple carousel with thumbnails and optional fullscreen modal
function Gallery({ projectId, images }: { projectId: string; images: string[] }) {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    // reset index when images change (useful if reusing component)
    setIndex(0)
  }, [projectId])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="gallery">
      <div className="relative rounded-2xl overflow-hidden shadow-md">
        <div className="relative h-60 md:h-72 w-full cursor-pointer" onClick={() => setFullscreen(true)}>
          <Image src={images[index]} alt={`Project image ${index + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
            className="p-2 rounded-full bg-white/80 dark:bg-black/50 border"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
            className="p-2 rounded-full bg-white/80 dark:bg-black/50 border"
          >
            ›
          </button>
        </div>
      </div>

      {/* thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`flex-none rounded-md overflow-hidden border ${i === index ? 'ring-2 ring-sky-400' : 'opacity-80'}`}
            aria-label={`Show image ${i + 1}`}
          >
            <div className="relative h-16 w-28">
              <Image src={src} alt={`thumb ${i + 1}`} fill sizes="112px" className="object-cover" />
            </div>
          </button>
        ))}
      </div>

      {/* fullscreen modal */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setFullscreen(false)}
        >
          <div className="relative w-full max-w-4xl rounded-lg bg-white/5" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[65vh] w-full">
              <Image src={images[index]} alt={`Project image ${index + 1} fullscreen`} fill sizes="(min-width: 1024px) 80vw, 100vw" className="object-contain" />
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={() => setFullscreen(false)} className="px-3 py-1 rounded bg-white/90">Close</button>
            </div>

            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <button onClick={prev} className="px-3 py-1 rounded bg-white/90">‹</button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <button onClick={next} className="px-3 py-1 rounded bg-white/90">›</button>
            </div>

            <div className="p-3 flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className={`h-2 w-6 rounded ${i === index ? 'bg-white' : 'bg-white/30'}`} aria-label={`Go to image ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

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
            <motion.article
              key={proj.id}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Image / Gallery column */}
              <div className="md:w-1/2 w-full">
                <Gallery projectId={proj.id} images={proj.images} />
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

                <div className="mt-4 flex items-center gap-3">
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="text-sm underline-offset-2 text-sky-600 hover:underline">
                      Demo
                    </a>
                  )}

                  <button
                    onClick={() => setExpandedId(expandedId === proj.id ? null : proj.id)}
                    aria-expanded={expandedId === proj.id}
                    aria-controls={`proj-${proj.id}-details`}
                    className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-md border bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    {expandedId === proj.id ? 'Less' : 'More'}
                  </button>
                </div>

                {expandedId === proj.id && (
                  <div id={`proj-${proj.id}-details`} className="mt-4 text-sm text-slate-700 dark:text-slate-300 border-t pt-4">
                    <p className="leading-relaxed">{proj.details}</p>

                    <div className="mt-3 flex gap-3">
                      {proj.repoUrl && (
                        <a href={proj.repoUrl} target="_blank" rel="noreferrer" className="text-xs font-medium underline">
                          View repo
                        </a>
                      )}

                      <a href={`#${proj.id}`} className="text-xs text-slate-500 dark:text-slate-400">
                        Permalink
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
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
