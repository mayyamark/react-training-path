import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Courses App',
  description: 'An application for courses',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body>
        <div style={{ border: '1px solid silver', margin: 25, padding: 25 }}>
          <h2>Pages</h2>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>

          <hr />

          {children}
        </div>
      </body>
    </html>
  )
}

export default RootLayout;
