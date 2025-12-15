'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-bleu-nuit/70 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-12 h-16 flex items-center justify-between">
                {/* Logo / Titre */}
                <Link
                    href="/"
                    className="text-white font-semibold tracking-wide text-lg relative group"
                >
                    Patrimoine Économique 2035
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Navigation */}
                <ul className="flex items-center gap-8 text-md">
                {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <li key={item.href} className="relative group">
                            <Link
                                href={item.href}
                                className={`relative transition-colors duration-300
                                    ${isActive
                                    ? 'text-white font-semibold'
                                    : 'text-gray-300 hover:text-white'
                                    }
                                `}
                            >
                            {item.label}

                            {/* Underline */}
                            <span
                                className={`absolute -bottom-1 left-0 h-[2px] bg-cyan transition-all duration-300
                                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                `}
                            />
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </motion.nav>
    )
}
