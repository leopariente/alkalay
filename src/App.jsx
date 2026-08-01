import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhyUs from './components/WhyUs.jsx'
import Menu from './components/Menu.jsx'
import ForWho from './components/ForWho.jsx'
import Gallery from './components/Gallery.jsx'
import LeadForm from './components/LeadForm.jsx'
import Footer from './components/Footer.jsx'
import StickyCta from './components/StickyCta.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        דילוג לתוכן הראשי
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <WhyUs />
        <Menu />
        <ForWho />
        <Gallery />
        <LeadForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
