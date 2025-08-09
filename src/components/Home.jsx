import { motion } from 'framer-motion'
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext'
import resume from '../assets/resume.pdf?url';

const Home = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = resume;
    a.download = 'Anurag_Tiwari_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  const spotlightColor = theme === 'dark' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.25)';

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      <div className="absolute inset-0 z-0">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${gridColor} 1px, transparent 1px),
              linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
            `,
   
            backgroundSize: `30px 30px`,

            maskImage: `radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 80%)`
          }}
        />

        <motion.div
          className="absolute"
          style={{
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${spotlightColor}, transparent 70%)`,
          }}
         
          animate={{ x: mousePosition.x - 400, y: mousePosition.y - 400 }}

          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        />
      </div>


      <motion.div
        className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 font-space-grotesk"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Anurag Tiwari</span>
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6"
          variants={itemVariants}
        >
          Student At VNIT Nagpur
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
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
    </section>
  )
}

export default Home;









