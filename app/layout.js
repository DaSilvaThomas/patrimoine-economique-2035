import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Patrimoine Économique Français 2035',
    description: 'Vision prospective du patrimoine économique français',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                <div className="pt-16">
                    {children}
                </div>
            </body>
        </html>
    )
}