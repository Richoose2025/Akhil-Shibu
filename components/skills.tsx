"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

type Skill = {
  name: string
  level: number
  category: "programming" | "web" | "database" | "cloud"
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills: Skill[] = [
    { name: "C", level: 75, category: "programming" },
    { name: "C++", level: 70, category: "programming" },
    { name: "Java", level: 65, category: "programming" },
    { name: "Python", level: 60, category: "programming" },
    { name: "HTML5", level: 80, category: "web" },
    { name: "CSS3", level: 75, category: "web" },
    { name: "JavaScript", level: 50, category: "web" },
    { name: "MySQL", level: 55, category: "database" },
    { name: "Git & GitHub", level: 50, category: "programming" },
    { name: "Google Cloud", level: 65, category: "cloud" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const getCategoryColor = (category: Skill["category"]) => {
    switch (category) {
      case "programming":
        return "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700"
      case "web":
        return "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700"
      case "database":
        return "from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700"
      case "cloud":
        return "from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700"
      default:
        return "from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700"
    }
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            During my BCA and self-learning journey, I've gained hands-on experience with various technologies and
            programming languages.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Programming</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">C, C++, Java, Python</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">Web Development</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">HTML5, CSS3, JavaScript</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h4 className="font-medium text-amber-600 dark:text-amber-400 mb-2">Database</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">MySQL (basics)</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-md">
            <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">Other Tools</h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm">Git, GitHub, Google Cloud</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
