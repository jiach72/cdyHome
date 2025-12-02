import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CoreProducts from './components/CoreProducts'
import RWASection from './components/RWASection'
import Solutions from './components/Solutions'
import SuccessCases from './components/SuccessCases'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <About />
                <CoreProducts />
                <RWASection />
                <Solutions />
                <SuccessCases />
                <Team />
            </main>
            <Footer />
        </div>
    )
}

export default App
