"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Code } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-6 mx-auto">
              <GraduationCap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">Education</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center">Bachelor of Computer Applications (BCA)</p>
            <p className="text-slate-600 dark:text-slate-300 text-center font-medium">CGPA: 7.47</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-6 mx-auto">
              <Award className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">Certifications</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center">
              Google Cloud certified with multiple specializations in AI, APIs, and infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-6 mx-auto">
              <Code className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">Technical Skills</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center">
              Proficient in multiple programming languages, web development, and cloud technologies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md"
        >
          <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed">
            I am a BCA graduate with a passion for cloud computing and artificial intelligence. My journey in technology
            has equipped me with a diverse skill set spanning programming languages, web development, and database
            management. I am particularly interested in Google Cloud technologies and have completed several
            certifications to deepen my knowledge in this area.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
