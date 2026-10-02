'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Coffee as CoffeeIcon, Star, Sparkles } from 'lucide-react'

export default function ProductCoffee() {
  const menuItems = [
    { name: 'Эспрессо / Доппио', price: '150 ₽', volume: '30/60 мл' },
    { name: 'Капучино', price: '210 ₽', volume: '250 мл' },
    { name: 'Флэт Уайт', price: '240 ₽', volume: '200 мл' },
    { name: 'Латте Макиато', price: '230 ₽', volume: '300 мл' },
    { name: 'Сезонный раф Цитрус-Тимьян', price: '290 ₽', volume: '350 мл' },
  ]

  return (
    <section className="bg-bakery-dark text-bakery-light border-bakery-light/5 border-t px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl border bg-gradient-to-br p-8 transition-colors duration-500 lg:grid-cols-12 lg:p-12"
        >
          <div className="bg-bakery-accent/5 pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-[100px]" />

          <div className="flex flex-col justify-between space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-bakery-dark border-bakery-light/5 text-bakery-accent w-fit rounded-xl border p-2.5 shadow-inner">
                  <CoffeeIcon className="h-5 w-5" />
                </div>
                <span className="text-bakery-light/40 font-mono font-sans text-xs tracking-wider uppercase">Спешелти зона</span>
              </div>

              <h2 className="font-serif text-3xl font-bold tracking-wide sm:text-4xl">
                Кофе, который раскрывает <br />
                <span className="text-bakery-accent">вкус свежей выпечки.</span>
              </h2>

              <p className="text-bakery-light/70 max-w-xl pt-2 font-sans text-base leading-relaxed font-light">
                Мы относимся к обжарке зерна так же строго, как и к закваске для хлеба. В нашем эспрессо-баре используется исключительно 100% арабика
                класса спешелти свежего урожая. Мы работаем на зерне мытой и натуральной обработки от проверенных фермеров Руанды и Эфиопии, чтобы в
                вашей чашке раскрывался идеальный баланс ягодной кислинки и шоколадной сладости.
              </p>
            </div>

            <div className="text-bakery-light/50 flex flex-wrap gap-4 pt-4 font-sans text-xs">
              <div className="border-bakery-light/5 bg-bakery-dark/40 flex items-center gap-1.5 rounded-full border px-3.5 py-1.5">
                <Star className="text-bakery-accent fill-bakery-accent h-3.5 w-3.5" />
                Свежая обжарка каждую неделю
              </div>

              <div className="border-bakery-light/5 bg-bakery-dark/40 flex items-center gap-1.5 rounded-full border px-3.5 py-1.5">
                <Sparkles className="text-bakery-accent h-3.5 w-3.5" />
                Альтернативное молоко на выбор
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <div className="border-bakery-light/5 bg-bakery-dark/60 relative z-10 rounded-2xl border p-6 font-sans shadow-2xl backdrop-blur-sm">
              <h3 className="border-bakery-light/5 border-b pb-3 font-serif text-xl font-bold tracking-wide">Эспрессо-бар</h3>

              <div className="mt-4 space-y-4">
                {menuItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="group/item border-bakery-light/5 flex items-center justify-between border-b border-dashed pb-2 last:border-0 last:pb-0"
                  >
                    <div className="space-y-0.5">
                      <span className="text-bakery-light/90 group-hover/item:text-bakery-accent text-sm font-medium transition-colors">
                        {item.name}
                      </span>

                      <span className="text-bakery-light/40 block text-[11px] font-light">{item.volume}</span>
                    </div>

                    <span className="text-bakery-light/90 text-sm font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
