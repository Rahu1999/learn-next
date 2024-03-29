export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
  }
  
  export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>

          <header >
            <h1>Nested Header component</h1>
          </header>
          {children}
          <footer>
            <h1>Nested Footer component</h1>
          </footer>
 </>
    )
  }
  