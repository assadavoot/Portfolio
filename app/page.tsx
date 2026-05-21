import dynamic from 'next/dynamic'
import Navbar     from '@/components/Navbar'
import Hero       from '@/components/Hero'
import Skills     from '@/components/Skills'
import Experience from '@/components/Experience'
import Education  from '@/components/Education'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

// Three.js must run client-side only → disable SSR
const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      {/* 3D canvas pinned behind everything */}
      <ThreeBackground />

      {/* Page content on top */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
