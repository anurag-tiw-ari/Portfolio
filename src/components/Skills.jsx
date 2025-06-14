import { useState } from 'react'
import { motion } from 'framer-motion'
import skillsData from '../assets/data/skills'

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState([])

  const toggleFlip = (index) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index))
    } else {
      setFlippedCards([...flippedCards, index])
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
  <div className="container mx-auto px-4">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      My Skills
    </motion.h2>
    <motion.p 
      className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Technologies and tools I work with to create amazing digital experiences.
    </motion.p>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {skillsData.map((skill, index) => (
        <motion.div
          key={index}
          className="flip-card h-64"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={`flip-card-inner w-full h-full relative ${flippedCards.includes(index) ? 'flipped' : ''}`}>
            {/* Front Side */}
            <div className="flip-card-front absolute w-full h-full bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg flex flex-col justify-between card-hover transition-all duration-300">
              <div>
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
              <button
                onClick={() => toggleFlip(index)}
                className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                More Details
              </button>
            </div>

            {/* Back Side */}
            <div className="flip-card-back absolute w-full h-full bg-blue-600 dark:bg-blue-700 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="overflow-y-auto flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">{skill.title} Skills</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {skill.skills.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => toggleFlip(index)}
                    className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Skills





