'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Section5() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    const hypotheses = [
        {
            title: 'Souveraineté des données',
            description: "Mise en place d'infrastructures cloud souveraines et protection renforcée des données stratégiques nationales.",
            icon: '🔒',
        },
        {
            title: "Régulation de l'IA",
            description: "Cadre réglementaire européen harmonisé garantissant transparence, éthique et contrôle des systèmes d'intelligence artificielle.",
            icon: '⚖️',
        },
        {
            title: 'Normes écologiques',
            description: "Standards environnementaux stricts pour les datacenters et les technologies numériques, avec objectif neutralité carbone.",
            icon: '🌱',
        },
        {
            title: 'Protection des entreprises stratégiques',
            description: "Mécanismes de défense contre les rachats hostiles et soutien aux champions technologiques français et européens.",
            icon: '🛡️',
        },
    ]

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center bg-bleu-nuit text-white py-20"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Gouvernance & Hypothèses prospectives
                    </h2>
                    <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
                        Les leviers stratégiques pour orienter le patrimoine économique de demain
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {hypotheses.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-cyan border-opacity-30 hover:border-opacity-70 transition-all duration-300"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-cyan mb-4">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-cyan opacity-20 blur-3xl rounded-full"></div>
                        <div className="relative bg-gradient-to-r from-cyan to-blue-500 rounded-2xl p-12 text-center shadow-2xl">
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="text-2xl md:text-3xl font-bold leading-relaxed"
                            >
                                "Le patrimoine économique de 2035 dépendra moins de la technologie 
                                que de la manière dont elle est gouvernée."
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-16 text-center text-gray-400 text-sm"
                    >
                        <p>Vision prospective • Hypothèses non définitives • 2035</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}