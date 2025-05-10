"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Turn Unused Software Licenses Into
              <span className="text-primary"> Instant Revenue</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              SoftSell helps businesses recover value from unused software licenses with our secure, transparent
              marketplace and industry-leading payouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Sell My Licenses
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn How It Works
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 shadow-xl">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">License Valuation</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Just now</span>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Adobe Creative Cloud</span>
                      <span className="text-sm font-semibold text-primary">$349.99</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Enterprise License · 8 months remaining</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Microsoft Office 365</span>
                      <span className="text-sm font-semibold text-primary">$129.99</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Business Premium · 12 months remaining</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Autodesk AutoCAD</span>
                      <span className="text-sm font-semibold text-primary">$899.99</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Professional · 18 months remaining</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Valuation</span>
                    <span className="text-lg font-bold text-primary">$1,379.97</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-64 w-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 h-64 w-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
