export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header >
          <h1>Header component</h1>
        </header>
        {children}
        <footer>
          <h1>Footer component</h1>
        </footer>
      </body>
    </html>
  )
}
