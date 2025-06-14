import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import resume from '../assets/resume.pdf?url';
import profileImage from '../assets/myImage.png'; // Add your image here

const Home = () => {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = resume;
    a.download = 'John_Doe_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0">
          
          {/* Image on small screens first, content second */}
          <motion.div 
            className="w-full md:w-1/2 flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-xl mb-6 md:mb-0">
              <img src={profileImage} alt="John Doe" className="object-cover w-full h-full" />
            </div>
          </motion.div>

          {/* Content area */}
          <motion.div className="w-full md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-space-grotesk">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anurag Tiwari</span>
            </h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              Student At VNIT Nagpur
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg "
              variants={itemVariants}
            >
              I build exceptional digital experiences with modern web technologies. Passionate about creating efficient, scalable, and user-friendly applications.
            </motion.p>
            <motion.button
              onClick={downloadResume}
              className="bucket-fill-btn px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium transition-all duration-300 hover:text-white dark:hover:text-gray-900"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default Home









