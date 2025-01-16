// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import StarsCanvas from '@/components/main/StarBackground'
// import Navbar from '@/components/main/Navbar'
// import Footer from '@/components/main/Footer'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Muhammad Haroon',
//   description: 'This is my portfolio.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
//         <StarsCanvas  />
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   )
// }




import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Haroon',
  description: 'This is my portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden relative min-h-screen`}>
        <div className="fixed top-0 left-0 w-full h-full">
          <StarsCanvas />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}