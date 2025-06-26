import Head from 'next/head'
import { Box } from '@mui/material'

export const siteTitle = 'Digital Backroom - An Internet Archive'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        {/* MathJax Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                  displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
                },
                svg: { fontCache: 'global' }
              };
            `
          }}
        />
        <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" />
      </Head>

      <main className="theme-light">
        {children}
      </main>
    </div>
  )
}
