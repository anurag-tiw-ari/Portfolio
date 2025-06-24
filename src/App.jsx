import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import ChatWithAI from './components/ChatWithAI'


function App() {


  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
            <Education />
            <Skills />
            <Projects />
            {/* <ChatWithAI /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>

    </ThemeProvider>
  )
}

export default App


