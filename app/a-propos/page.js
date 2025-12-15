'use client'

import { motion } from 'framer-motion'

const teamMembers = [
    { name: 'Thomas DA SILVA', role: 'Étudiant' },
    { name: 'Amrane BOUDRICHE', role: 'Étudiant' },
    { name: 'Youcef ZITOUNI', role: 'Étudiant' },
    { name: 'Ousmane NDIONE', role: 'Étudiant' },
]

export default function APropos() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="relative bg-bleu-nuit text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-cyan rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan rounded-full blur-3xl"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto px-6 relative z-10 text-center max-w-4xl"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">À propos du projet</h1>
                    <p className="text-xl md:text-2xl text-cyan mb-12 font-light">
                        Vision prospective du patrimoine économique français en 2035, conduite dans le cadre du Master 2 THYP
                    </p>
                </motion.div>
            </section>

            <section className="py-20 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-bleu-nuit mb-12 text-center">L’équipe</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-xl p-6 text-center border-t-4 border-cyan hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-2xl font-bold text-bleu-nuit mb-2">{member.name}</h3>
                            <p className="text-gray-700 font-medium">{member.role}</p>
                        </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-20 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-bleu-nuit mb-6">Encadrement académique</h2>
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-cyan">
                        <h3 className="text-2xl font-bold text-bleu-nuit mb-2">Monsieur Khaldoun ZREIK</h3>
                        <p className="text-gray-700 text-lg">Professeur du cours <strong>Prospectives numériques</strong>, garant de la qualité académique et du suivi pédagogique du projet.</p>
                    </div>
                </motion.div>
            </section>

            <section className="relative bg-bleu-nuit py-16 mt-16 overflow-hidden">
                <div className="container mx-auto px-6 text-gray-400 text-sm text-center">
                    <p>Vision prospective • Hypothèses non définitives • 2035</p>
                </div>
            </section>
        </main>
    )
}