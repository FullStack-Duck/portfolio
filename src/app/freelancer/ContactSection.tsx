'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 bg-chelsea text-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-white/90 mb-10">
          You can also reach me at <a href="mailto:nrsandrin@gmail.com" className="underline hover:text-gold">nrsandrin@gmail.com</a>
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Thanks for your message!')
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Your name"
              required
              className="bg-white/90 placeholder:text-neutral-500 text-black border border-gold focus:ring-2 focus:ring-gold"
            />
            <Input
              type="email"
              placeholder="Your email"
              required
              className="bg-white/90 placeholder:text-neutral-500 text-black border border-gold focus:ring-2 focus:ring-gold"
            />
          </div>
          <Textarea
            placeholder="Your message"
            rows={5}
            required
            className="bg-white/90 placeholder:text-neutral-500 text-black border border-gold focus:ring-2 focus:ring-gold"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button type="submit" className="bg-gold text-black hover:bg-white hover:text-chelsea">
              📬 Send Message
            </Button>
            <a href="https://wa.me/5493510000000" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-chelsea border border-gold hover:bg-gold hover:text-black">
                💬 Contact via WhatsApp
              </Button>
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
