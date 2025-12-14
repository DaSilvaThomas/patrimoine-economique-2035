'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function Section4() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeScenario, setActiveScenario] = useState('optimiste')
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

    const scenarios = {
        optimiste: {
            title: 'Scénario optimiste',
            color: 'cyan',
            economique: "La France développe une IA souveraine et devient leader européen des technologies numériques. La croissance économique s'accélère grâce à l'innovation, la productivité augmente de 25%, et de nouveaux secteurs d'excellence émergent. Les investissements massifs dans la recherche créent un écosystème technologique dynamique et attractif.",
            social: "La transition écologique est maîtrisée grâce aux technologies vertes et à l'optimisation énergétique. La formation continue permet une adaptation fluide de la main-d'œuvre. Les inégalités diminuent grâce à la redistribution des gains de productivité et à l'accès démocratisé aux outils numériques.",
        },
        intermediaire: {
            title: 'Scénario intermédiaire',
            color: 'yellow-500',
            economique: "La France maintient une position moyenne dans le paysage technologique mondial. Les gains économiques sont réels mais modérés, avec une dépendance partielle aux infrastructures étrangères. Certains secteurs innovent tandis que d'autres accusent un retard. La croissance reste positive mais inférieure aux attentes initiales.",
            social: "Des tensions sociales émergent autour de l'automatisation et de la transformation du marché du travail. Les bénéfices économiques sont inégalement répartis. La transition écologique progresse lentement avec des résultats mitigés. Un fossé numérique persiste entre territoires et générations.",
        },
        pessimiste: {
            title: 'Scénario pessimiste',
            color: 'red-500',
            economique: "Dépendance massive aux grandes puissances technologiques (États-Unis, Chine). Perte de souveraineté numérique et fuite des cerveaux vers l'étranger. Les entreprises stratégiques françaises sont rachetées par des groupes étrangers. Le patrimoine immatériel national s'érode progressivement.",
            social: "Inégalités accrues entre ceux qui maîtrisent les technologies et les autres. Montée du chômage structurel dû à l'automatisation non accompagnée. Fracture numérique territoriale profonde. Affaiblissement du patrimoine national et perte de compétitivité internationale.",
        },
    }

    const scenario = scenarios[activeScenario]

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center bg-gray-50 py-20"
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-bleu-nuit mb-4 text-center">
                        Scénarios prospectifs 2035
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        Trois trajectoires possibles pour le patrimoine économique français
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.keys(scenarios).map((key) => (
                            <motion.button
                                key={key}
                                onClick={() => setActiveScenario(key)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                                activeScenario === key
                                    ? key === 'optimiste'
                                    ? 'bg-cyan text-white shadow-lg'
                                    : key === 'intermediaire'
                                    ? 'bg-yellow-500 text-white shadow-lg'
                                    : 'bg-red-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                                }`}
                            >
                                {scenarios[key].title}
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScenario}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-bleu-nuit">
                                <h3 className="text-2xl font-bold text-bleu-nuit mb-4 flex items-center">
                                <span className="mr-3">📊</span> Dimension économique
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{scenario.economique}</p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-cyan">
                                <h3 className="text-2xl font-bold text-bleu-nuit mb-4 flex items-center">
                                <span className="mr-3">👥</span> Dimension sociale
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{scenario.social}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}