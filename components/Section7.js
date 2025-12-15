'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Section7() {
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

  const risks = [
    { title: 'Cyberattaques', desc: 'Menaces sur les infrastructures numériques et les données stratégiques', icon: '💥' },
    { title: 'Dépendance technologique', desc: 'Dépendance aux acteurs étrangers du cloud et de l’IA', icon: '🌐' },
    { title: 'Concentration de la valeur', desc: 'Captation des richesses par quelques grandes plateformes', icon: '🏢' },
    { title: 'Perte de contrôle démocratique', desc: 'Décisions algorithmiques peu transparentes', icon: '⚠️' },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-bleu-nuit text-white py-20 flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Risques et fragilités du patrimoine immatériel
          </h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            La transformation numérique crée de la valeur, mais expose aussi
            la richesse nationale à de nouvelles vulnérabilités.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white bg-opacity-5 border border-gray-600 rounded-xl p-6"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-cyan mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
