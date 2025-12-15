'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Section6() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const skills = [
    { title: 'Compétences numériques', desc: 'Data, IA, cybersécurité, développement logiciel', icon: '💻' },
    { title: 'Formation continue', desc: 'Adaptation permanente des compétences face aux mutations technologiques', icon: '🎓' },
    { title: 'Attractivité des talents', desc: 'Capacité à retenir et attirer chercheurs, ingénieurs et innovateurs', icon: '🧠' },
    { title: 'Inclusion numérique', desc: 'Réduction des fractures territoriales et sociales', icon: '🌍' },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-gray-50 py-20 flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bleu-nuit mb-6 text-center">
            Le capital humain au cœur de la richesse
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            En 2035, les compétences, la formation et l’intelligence collective
            deviennent des actifs stratégiques majeurs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-bleu-nuit mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
