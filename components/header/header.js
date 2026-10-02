'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Croissant, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <header className="bg-bakery-dark text-bakery-light relative z-50 px-6 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Croissant size={30} className="text-bakery-accent" />
          <span className="font-serif text-xl font-bold tracking-wide">
            CRAFT<span className="text-bakery-accent">CRUST</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-sans text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-bakery-light/70 hover:text-bakery-accent transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-b transition-colors duration-300 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 absolute top-20 right-4 z-50 w-60 overflow-hidden rounded-3xl border bg-gradient-to-b font-sans shadow-2xl backdrop-blur-xl md:hidden"
          >
            <motion.nav initial={{ y: -10 }} animate={{ y: 0 }} transition={{ delay: 0.05, duration: 0.2 }} className="flex flex-col space-y-4 p-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-bakery-light/70 hover:text-bakery-accent text-lg font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
