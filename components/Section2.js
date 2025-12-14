'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

export default function Section2() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
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

    const data = [
        {
            periode: "Aujourd'hui",
            materiel: 65,
            immateriel: 35,
        },
        {
            periode: '2035',
            materiel: 35,
            immateriel: 65,
        },
    ]

    const COLORS = {
        materiel: '#94A3B8',
        immateriel: '#2FD2C8',
    }

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
                        Composition du patrimoine économique
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 text-center">
                        Évolution de la répartition entre actifs matériels et immatériels
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-xl p-8 mb-12"
                    >
                        <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis
                            dataKey="periode"
                            tick={{ fill: '#0B1C2D', fontSize: 14, fontWeight: 600 }}
                            />
                            <YAxis
                            tick={{ fill: '#0B1C2D', fontSize: 14 }}
                            label={{ value: 'Part (%)', angle: -90, position: 'insideLeft', fill: '#0B1C2D' }}
                            />
                            <Tooltip
                            contentStyle={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                            }}
                            />
                            <Legend
                            wrapperStyle={{ paddingTop: '20px' }}
                            formatter={(value) => {
                                return value === 'materiel' ? 'Patrimoine matériel' : 'Patrimoine immatériel'
                            }}
                            />
                            <Bar dataKey="materiel" fill={COLORS.materiel} radius={[8, 8, 0, 0]} />
                            <Bar dataKey="immateriel" fill={COLORS.immateriel} radius={[8, 8, 0, 0]} />
                        </BarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-400">
                        <h3 className="text-2xl font-bold text-bleu-nuit mb-4">Patrimoine matériel</h3>
                        <p className="text-gray-700">
                            Immobilier, infrastructures physiques, équipements industriels, stocks et actifs 
                            tangibles traditionnels.
                        </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-cyan">
                        <h3 className="text-2xl font-bold text-bleu-nuit mb-4">Patrimoine immatériel</h3>
                        <p className="text-gray-700">
                            Données, intelligence artificielle, brevets, logiciels, capital humain, 
                            propriété intellectuelle et actifs numériques.
                        </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-12 bg-cyan bg-opacity-10 border border-cyan rounded-xl p-6 text-center"
                    >
                        <p className="text-lg text-bleu-nuit">
                            <strong>Projection 2035 :</strong> La part immatérielle devient dominante (≈ 65%), 
                            portée par la montée en puissance des données, de l'IA, du capital humain et des brevets technologiques.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}