"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "IT Director",
    company: "TechCorp Solutions",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "SoftSell helped us recover over $50,000 from unused software licenses after our company downsized. The process was incredibly smooth, and we received payment within 24 hours of accepting their offer.",
    stars: 5,
  },
  {
    name: "Michael Chen",
    title: "CFO",
    company: "Innovate Partners",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a financial officer, I was skeptical about the value we'd get for our unused licenses. SoftSell exceeded our expectations with their transparent valuation process and competitive rates. I highly recommend their service.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted by hundreds of businesses worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">"{testimonial.content}"</blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-primary/10 rounded-xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="text-4xl font-bold text-primary mb-4">98%</div>
            <p className="text-xl mb-6">Customer satisfaction rate based on post-transaction surveys</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Fast Process", "Competitive Rates", "Excellent Support", "Secure Transactions"].map((tag, index) => (
                <span key={index} className="bg-background px-4 py-2 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
