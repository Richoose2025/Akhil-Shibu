"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Cloud, Code, Database, Server, Shield, Sparkles } from "lucide-react"

type Certification = {
  title: string
  issuer: string
  icon: React.ReactNode
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certifications: Certification[] = [
    {
      title: "Introduction to APIs",
      issuer: "Google",
      icon: <Code className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google",
      icon: <Cloud className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Innovating with Google Cloud Artificial Intelligence",
      issuer: "Google",
      icon: <Sparkles className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Modernize Infrastructure and Applications with Google Cloud",
      issuer: "Google",
      icon: <Server className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Google AI essentials",
      issuer: "Google",
      icon: <Database className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Programming with GenAI",
      issuer: "IIT Guwahati",
      icon: <Award className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Trust and Security with Google cloud",
      issuer: "Google",
      icon: <Shield className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Certifications
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
            I have successfully completed industry-recognized certifications to strengthen my technical and cloud
            computing knowledge.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 text-center">{cert.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center">Issued by {cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg shadow-md"
        >
          <p className="text-slate-700 dark:text-slate-300 text-center leading-relaxed">
            These certifications have given me practical insights into cloud services, AI integration, infrastructure
            modernization, and API usage, preparing me for real-world technical challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
