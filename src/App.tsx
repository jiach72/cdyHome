import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CoreProducts from './components/CoreProducts'
import RWASection from './components/RWASection'
import Solutions from './components/Solutions'
import SuccessCases from './components/SuccessCases'
import Team from './components/Team'
import Footer from './components/Footer'
import BusinessPlan from './components/BusinessPlan'

type Page = 'home' | 'business-plan';

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white">
                <Header onNavigate={setCurrentPage} currentPage={currentPage} />
                {currentPage === 'home' ? (
                    <main>
                        <Hero />
                        <About />
                        <CoreProducts />
                        <RWASection />
                        <Solutions />
                        <SuccessCases />
                        <Team />
                    </main>
                ) : (
                    <BusinessPlan />
                )}
                {currentPage === 'home' && <Footer />}
            </div>
        </ThemeProvider>
    )
}

export default App

