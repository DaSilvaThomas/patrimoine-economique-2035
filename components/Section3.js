'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Section3() {
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

    const transformations = [
        {
            title: 'Disparition des tickets papier',
            description: 'Transports publics : carte Navigo, smartphone et validation sans contact remplacent les tickets physiques.',
            icon: '🎫',
        },
        {
            title: 'Déclin progressif des chèques',
            description: 'Virements instantanés et paiements mobiles rendent obsolète le chèque papier.',
            icon: '💳',
        },
        {
            title: 'Dématérialisation des services publics',
            description: 'Impôts, carte grise, démarches administratives : tout devient numérique et accessible en ligne.',
            icon: '🏛️',
        },
        {
            title: 'Automatisation administrative par IA',
            description: 'Traitement automatisé des dossiers, chatbots intelligents et assistance virtuelle dans les services publics.',
            icon: '🤖',
        },
        {
            title: 'Optimisation énergétique intelligente',
            description: 'Smart grids et réseaux intelligents optimisent la distribution et la consommation d\'énergie en temps réel.',
            icon: '⚡',
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
                        IA & Digitalisation du quotidien
                    </h2>
                    <p className="text-xl text-gray-300 mb-16 text-center max-w-3xl mx-auto">
                        Comment l'intelligence artificielle transforme concrètement la richesse nationale 
                        à travers les usages quotidiens
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {transformations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-cyan border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-cyan mb-3">{item.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="bg-cyan bg-opacity-10 border border-cyan rounded-xl p-8 text-center"
                    >
                        <p className="text-lg md:text-xl leading-relaxed">
                            Ces évolutions créent de la <strong className="text-cyan">valeur immatérielle considérable</strong> : 
                            gain de temps, efficacité accrue, réduction des coûts, optimisation des ressources.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mt-4 text-gray-300">
                            Elles renforcent simultanément la <strong>dépendance technologique</strong> et posent 
                            la question de la souveraineté numérique nationale.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}