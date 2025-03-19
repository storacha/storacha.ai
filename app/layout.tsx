import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

export const runtime = 'edge'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin']
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Storacha powered AI / LLMs',
  description: 'Use Storacha to store your LLM, RAG knowledge fragments, agent state, outputs and all the rest in a decentralized network of storage nodes.',
  icons: [{
    url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 128 128'%3E%3Cpath fill='%23de5323' d='M120.74 54.44c.04 1.58-.01 5.59-4.04 14.85c-5.21 11.95-11.17 19.9-14.98 23.7c-3.96 4.78-16.12 18.16-36.47 22.14c-4.69.92-27.32 5.42-43.5-8.33C19.6 104.95 10.87 97.32 10 86c-.36-4.69.56-10.8 2.91-11.33c2.77-.63 4.21 7.23 11.98 12.85c.97.7 9.59 6.75 20.32 4.69c9.76-1.87 15.27-9.3 17.45-12.24c4.93-6.65 6.59-13.82 8.33-21.36c2.01-8.66 2.18-15.46 7.81-21.36c1.06-1.11 2.06-2.14 3.73-3.04c5.69-3.06 12.01-.76 20.84 2.6c8.46 3.23 13.66 5.29 16.06 10.59c1.19 2.62 1.26 5.03 1.31 7.04z'/%3E%3Cpath fill='%23a0b632' d='M82.84 33.8c1.98-1.03 5.01-2.25 9.44-2.21c.93.01 2.05.05 3.33.19c1.1.12 5.3-2.33 6.2-3.77c.82-1.31 1.52-2.7 2.32-4.17c.98-1.79 2.52-4.87 2.7-6.62c.37-3.66-.41-7.81-7.02-6.88c-.82.11-2.73 1.18-3.28-.28c-1.12-2.93 4.86-5.09 8.87-3.21c4.47 2.1 6.19 7.7 6.43 8.92c.61 2.97-.07 5.44-1.39 10.24c-.53 1.94-.91 3.39-1.31 4.94c-.58 2.28.46 5.22 1.23 5.67c4.82 2.77 7.09 6.03 8.15 7.93c1.59 2.85 2.94 7.17 1.95 7.81c-.6.39-2-.62-2.44-.94c-1.43-1.04-1.45-1.88-2.44-2.83c-1.57-1.51-4.11-1.85-5.93-1.5c-2.64.51-2.98 2.48-4.49 2.21c-1.78-.31-1.44-3.11-4.56-5.53c-1.6-1.25-3.15-1.64-3.58-1.74a9.236 9.236 0 0 0-3.97-.02c-2.19.47-2.4 1.37-4.1 1.43c-1.43.05-3.18-.52-3.39-1.43c-.19-.84 1.07-1.25 1.24-2.8c.02-.18.14-1.47-.65-2.28c-.69-.7-1.73-.71-3.54-.72c-1.66-.01-2.35.23-2.47-.04c-.19-.45 1.45-1.72 2.7-2.37z'/%3E%3Cpath fill='%23fff' d='M76.37 75.84c-.44-.03-.89-.16-1.28-.43a2.609 2.609 0 0 1-.74-3.61c1.96-2.97 2.55-7.71 3.03-11.51c.28-2.2.52-4.1.97-5.63c1.5-5.06 5.05-6.67 5.45-6.83a2.603 2.603 0 0 1 2.04 4.79c-.14.07-1.73.91-2.5 3.52c-.33 1.13-.56 2.92-.8 4.81c-.55 4.34-1.23 9.75-3.85 13.73c-.53.79-1.42 1.21-2.32 1.16zM67.4 89.69a2.59 2.59 0 0 1-2.25-1.47c-.63-1.3-.08-2.85 1.21-3.48c1.52-.74 3.04-3.29 3.64-4.73a2.6 2.6 0 0 1 3.4-1.4a2.6 2.6 0 0 1 1.41 3.4c-.23.57-2.4 5.59-6.19 7.42c-.39.19-.81.27-1.22.26z'/%3E%3C/svg%3E",
    type: 'image/svg+xml'
  }],
  twitter: {
    site: '@storachanetwork',
    creator: '@storachanetwork',
    card: 'summary_large_image',
    title: 'Storacha powered AI / LLMs',
    images: [{
      url: 'https://storacha.ai/og-image.png',
      type: 'image/png',
      alt: 'Storacha powered AI / LLMs',
      width: 1200,
      height: 630
    }]
  },
  openGraph: {
    type: 'website',
    title: 'Storacha powered AI / LLMs',
    siteName: 'Storacha powered AI / LLMs',
    locale: 'en-US',
    url: 'https://storacha.ai',
    images: [{
      url: 'https://storacha.ai/og-image.png',
      type: 'image/png',
      alt: 'Storacha powered AI / LLMs',
      width: 1200,
      height: 630
    }]
  }
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang='en'>
    <head>
      <script defer data-domain="storacha.ai" src="https://plausible.io/js/script.outbound-links.js">
      </script>    
    </head>
    <body className={`${dmSans.variable} ${dmMono.variable} antialiased font-[family-name:var(--font-dm-sans)]`}>
      {children}
    </body>
  </html>
)

export default RootLayout
