import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Grades from './components/Grades'
import HowItWorks from './components/HowItWorks'
import EnrollmentForm from './components/EnrollmentForm'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Grades />
        <HowItWorks />
        <EnrollmentForm />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
