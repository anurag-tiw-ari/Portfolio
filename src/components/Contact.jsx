import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()

  const inputClasses = `block w-full px-4 py-3 rounded-lg border bg-transparent ${
    theme === 'dark' 
      ? 'border-gray-600 focus:border-blue-500 text-white' 
      : 'border-gray-300 focus:border-blue-500 text-gray-900'
  } focus:ring-2 focus:ring-blue-200 transition-all duration-200`

  const labelClasses = `absolute left-3 px-1 transition-all duration-200 ${
    theme === 'dark' 
      ? 'text-gray-400 peer-focus:text-blue-400 bg-gray-900' 
      : 'text-gray-500 peer-focus:text-blue-600 bg-white'
  } peer-focus:-top-2 peer-focus:text-xs ${
    theme === 'dark' ? 'peer-placeholder-shown:text-gray-400' : 'peer-placeholder-shown:text-gray-500'
  } peer-placeholder-shown:top-3 peer-placeholder-shown:text-base`

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </motion.p>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 md:p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  className={`${inputClasses} peer`}
                  placeholder=" "
                />
                <label htmlFor="name" className={labelClasses}>
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  className={`${inputClasses} peer`}
                  placeholder=" "
                />
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative mb-6">
              <input 
                type="text" 
                id="subject" 
                className={`${inputClasses} peer`}
                placeholder=" "
              />
              <label htmlFor="subject" className={labelClasses}>
                Subject
              </label>
            </div>
            
            <div className="relative mb-8">
              <textarea 
                id="message" 
                rows="5" 
                className={`${inputClasses} peer`}
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className={labelClasses}>
                Your Message
              </label>
            </div>
            
            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact