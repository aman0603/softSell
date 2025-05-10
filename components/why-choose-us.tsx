"use client"

import { motion } from "framer-motion"
import { Zap, Shield, BadgeCheck, Clock } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Fast Payouts",
    description: "Get paid within 24-48 hours of accepting our offer, with multiple payment options available.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Transactions",
    description: "Our platform uses bank-level encryption and secure transfer protocols to protect your data.",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: "Verified Buyers",
    description: "We work only with vetted enterprise buyers, ensuring legitimate license transfers.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Instant Valuation",
    description: "Receive a competitive market valuation for your licenses within minutes, not days.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose SoftSell
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We've built the most trusted platform for software license resale in the industry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-muted rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Industry-Leading Rates</h3>
              <p className="text-muted-foreground mb-6">
                Our proprietary valuation algorithm ensures you get the best possible price for your software licenses,
                with payouts averaging 15-30% higher than our competitors.
              </p>
              <ul className="space-y-3">
                {[
                  "Up to 80% of retail value for enterprise licenses",
                  "Transparent pricing with no hidden fees",
                  "Volume bonuses for multiple licenses",
                  "Price match guarantee against verified competitors",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <h4 className="text-lg font-semibold mb-4">Average Payout Comparison</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">SoftSell</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Competitor A</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Competitor B</span>
                    <span className="text-sm font-medium">55%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Competitor C</span>
                    <span className="text-sm font-medium">50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                *Percentage of retail value paid for enterprise licenses
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
