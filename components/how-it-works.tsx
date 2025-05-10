"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

const steps = [
  {
    icon: <Upload className="h-10 w-10 text-primary" />,
    title: "Upload License",
    description: "Submit your software license details through our secure portal for instant evaluation.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Get Valuation",
    description: "Receive a competitive market valuation based on license type, remaining term, and demand.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Get Paid",
    description: "Accept our offer and receive payment within 24-48 hours via your preferred payment method.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our streamlined process makes selling unused software licenses quick and hassle-free
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm border border-border relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get Started Today
          </motion.a>
        </div>
      </div>
    </section>
  )
}
