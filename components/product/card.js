import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

export default function ProductCard({ data, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 flex flex-col justify-between rounded-2xl border bg-gradient-to-b p-5 transition-colors duration-300"
    >
      <div>
        <div className="border-bakery-light/5 bg-bakery-dark/50 relative mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border">
          <span className="text-bakery-light/20 font-sans text-xs transition-transform duration-500 group-hover:scale-105">[ Фото продукта ]</span>
        </div>

        <span className="text-bakery-light/40 font-sans text-xs tracking-wide">{data.weight}</span>

        <h3 className="group-hover:text-bakery-accent mt-1 font-serif text-lg font-bold tracking-wide transition-colors duration-300">
          {data.title}
        </h3>

        <p className="text-bakery-light/60 mt-1.5 line-clamp-2 font-sans text-sm leading-relaxed font-light">{data.desc}</p>
      </div>

      <div className="border-bakery-light/5 mt-6 flex items-center justify-between border-t pt-4">
        <span className="text-bakery-light font-sans text-lg font-bold">{data.price}</span>

        <button className="border-bakery-light/10 bg-bakery-dark text-bakery-light hover:border-bakery-accent hover:bg-bakery-accent flex cursor-pointer items-center gap-1.5 rounded-lg border px-3 py-2 font-sans text-xs font-medium transition-all hover:text-white active:scale-95">
          <ShoppingBag className="h-3.5 w-3.5" />
          Купить
        </button>
      </div>
    </motion.div>
  )
}
