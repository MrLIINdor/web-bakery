'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Croissant, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="bg-bakery-dark text-bakery-light relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
      <div className="bg-bakery-accent/10 pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" />

      <div className="relative flex w-full max-w-md flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="group border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border bg-gradient-to-b p-8 shadow-2xl transition-colors duration-500"
        >
          <div className="text-bakery-light group-hover:text-bakery-accent pointer-events-none absolute -right-14 -bottom-14 opacity-5 transition-all duration-700 group-hover:opacity-10">
            <Croissant size={320} />
          </div>

          <div className="flex items-start justify-between font-sans">
            <div className="border-bakery-light/5 bg-bakery-dark/80 text-bakery-accent rounded-lg border px-3 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              Ошибка 404
            </div>
            <Croissant className="text-bakery-accent h-6 w-6" />
          </div>

          <div className="relative z-10 mt-12 space-y-3 text-left">
            <h1 className="font-serif text-3xl font-bold tracking-wide md:text-4xl">Круассан потерялся.</h1>
            <p className="text-bakery-light/60 font-sans text-sm leading-relaxed font-light">
              Похоже, эта страница ещё не испеклась или её кто-то случайно съел за завтраком. Хлебных крошек здесь не осталось.
            </p>
          </div>

          <div className="border-bakery-light/5 mt-6 border-t pt-5">
            <Link
              href="/"
              className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 text-bakery-light hover:text-bakery-accent flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border bg-gradient-to-b p-4 font-sans text-sm font-medium transition-all duration-300 active:scale-98"
            >
              <ArrowLeft size={20} />
              Вернуться на главную
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
