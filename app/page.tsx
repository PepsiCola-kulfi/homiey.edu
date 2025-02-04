import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main >
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

