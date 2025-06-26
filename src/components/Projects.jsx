import { useState } from 'react';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

import projectsData from '../assets/data/projects';

const Projects = () => {
  const [flippedProjects, setFlippedProjects] = useState([]);

  const toggleProjectFlip = (index) => {
    setFlippedProjects(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p 
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Some of my recent work and projects I've contributed to.
        </motion.p>

        <div className="px-4">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
            
          >
            {projectsData.map((project, index) => (
  <SwiperSlide key={project.id} className="max-w-sm">
    <div className={`flip-card-project h-full max-h-[70vh] ${flippedProjects.includes(index) ? 'flipped' : ''}`}>
      <div className="flip-card-inner-project h-full">
        {/* Front Side */}
        <div className="flip-card-front-project bg-white dark:bg-gray-700 shadow-lg rounded-xl h-full flex flex-col overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-grow overflow-y-auto hide-scrollbar">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 bg-blue-600 pt-2 pb-2 px-3 rounded">
              {project.shortDescription}
            </p>
            <h4 className='text-md text-black bg-gray-400 p-1 rounded text-center font-bold'>{project.tagline}</h4>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-600">
            <button
              onClick={() => toggleProjectFlip(index)}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Show More
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back-project bg-white dark:bg-gray-700 shadow-lg rounded-xl p-6 overflow-y-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title} Details
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4  bg-blue-600 pt-2 pb-2 px-3 rounded">
            {project.fullDescription}
          </p>
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => toggleProjectFlip(index)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              Back
            </button>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;