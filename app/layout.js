import './globals.css'

export const metadata = {
    title: 'Patrimoine Économique Français 2035',
    description: 'Vision prospective du patrimoine économique français',
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    )
}