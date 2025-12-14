'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Section1() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="h-screen flex items-center justify-center bg-bleu-nuit text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-cyan rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan rounded-full blur-3xl"></div>
            </div>
        
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Le patrimoine économique français en 2035
                    </motion.h1>
                
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-2xl md:text-3xl text-cyan mb-12 font-light"
                    >
                        D'une richesse matérielle à une richesse algorithmique
                    </motion.h2>
                
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl text-gray-300 space-y-6 max-w-3xl mx-auto"
                    >
                        <p>
                            Le patrimoine économique ne se limite plus aux biens matériels traditionnels. 
                            Immobilier, infrastructures et équipements industriels cèdent progressivement 
                            leur place dominante.
                        </p>
                        <p>
                            Il inclut désormais les données, l'intelligence artificielle, les technologies 
                            numériques et la connaissance. Ces actifs immatériels deviennent les piliers 
                            de la création de valeur.
                        </p>
                        <p>
                            Le patrimoine devient plus numérique, plus immatériel et profondément 
                            interconnecté, redéfinissant les fondements de la richesse nationale.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}