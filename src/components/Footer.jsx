import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

const Footer = () => {
  const { theme } = useTheme()

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, url: "https://github.com/anurag-tiw-ari" },
    { icon: <LinkedinIcon className="h-5 w-5" />, url: "https://www.linkedin.com/in/anurag-tiwari-172a59250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <MailIcon className="h-5 w-5" />, url: "mailto:tiwanurag44@gmail.com" },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Anurag Tiwari</h3>
            <p className="mb-4">Full Stack Developer creating modern web applications with cutting-edge technologies.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'education', 'skills', 'projects', 'contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item}`} 
                    className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>VNIT NAGPUR, South Ambhazari, Nagpur, India</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>tiwanurag44@gmail.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>7572041766</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Anurag Tiwari. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


