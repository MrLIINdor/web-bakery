'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Flame, Award, Heart, BadgePercent } from 'lucide-react'

export default function PageAbout() {
  const stats = [
    { number: '36 ч', label: 'Ферментация теста' },
    { number: '100%', label: 'Натуральное масло' },
    { number: '0%', label: 'Химических добавок' },
  ]

  return (
    <div className="bg-bakery-dark text-bakery-light relative min-h-[85vh] overflow-hidden px-6 py-10">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl text-left">
          <span className="text-bakery-accent font-mono font-sans text-xs tracking-widest uppercase">Философия CraftCrust</span>
          <h1 className="mt-3 font-serif text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Возвращаем хлебу <br />
            <span className="text-bakery-accent">его настоящий вкус.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-bakery-light/5 from-bakery-gray/40 to-bakery-gray/10 group hover:border-bakery-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-br p-8 transition-colors duration-300 md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="bg-bakery-dark border-bakery-light/5 text-bakery-accent rounded-xl border p-2.5">
                <Flame size={20} />
              </div>
              <span className="text-bakery-light/40 font-mono font-sans text-xs tracking-wider uppercase">Наш манифест</span>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold md:text-3xl">Мы отказались от промышленных дрожжей ради пользы и аромата.</h2>
              <p className="text-bakery-light/70 font-sans text-base leading-relaxed font-light">
                Каждый наш тартин или багет рождается исключительно из трех ингредиентов: органической муки, чистой воды и дикой многолетней закваски.
                Мы даем тесту «отдохнуть» в холоде до 36 часов. За это время сложные сахара и глютен расщепляются естественным путем, делая хлеб
                легким для пищеварения и невероятно богатым на вкус.
              </p>
            </div>

            <div className="border-bakery-light/5 text-bakery-light/40 mt-8 flex items-center gap-2 border-t pt-4 font-sans text-xs">
              <Award className="text-bakery-accent h-4 w-4" /> Выпекается на раскаленных подовых камнях
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-bakery-light/5 from-bakery-gray/40 to-bakery-gray/10 hover:border-bakery-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-br p-8 transition-colors duration-300 md:col-span-1"
          >
            <div className="flex items-center gap-3">
              <div className="bg-bakery-dark border-bakery-light/5 text-bakery-accent rounded-xl border p-2.5">
                <BadgePercent size={20} />
              </div>

              <span className="text-bakery-light/40 font-mono font-sans text-xs tracking-wider uppercase">В цифрах</span>
            </div>

            <div className="my-6 space-y-12">
              {stats.map((stat, i) => (
                <div key={i} className="border-bakery-light/5 flex items-baseline justify-between border-b pb-3 last:border-0 last:pb-0">
                  <span className="text-bakery-accent font-serif text-3xl font-black">{stat.number}</span>
                  <span className="text-bakery-light/60 font-sans text-sm font-light">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 hover:border-bakery-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="bg-bakery-dark border-bakery-light/5 text-bakery-accent rounded-xl border p-2.5">
                <Heart size={20} />
              </div>

              <span className="text-bakery-light/40 font-mono font-sans text-xs tracking-wider uppercase">Наш состав</span>
            </div>

            <div className="mt-12">
              <h3 className="font-serif text-xl font-bold">Честные продукты</h3>
              <p className="text-bakery-light/60 mt-2 font-sans text-sm leading-relaxed font-light">
                Никакого маргарина, пальмового масла или сухих смесей. Только натуральное фермерское сливочное масло 82.5% для идеальных хрустящих
                слоев в наших круассанах.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-bakery-light/5 from-bakery-gray/30 to-bakery-gray/5 group hover:border-bakery-accent/20 flex flex-col justify-between rounded-3xl border bg-gradient-to-b p-6 transition-colors duration-300 md:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="bg-bakery-dark border-bakery-light/5 text-bakery-accent rounded-xl border p-2.5">
                <Eye size={20} />
              </div>

              <span className="text-bakery-light/40 font-mono font-sans text-xs tracking-wider uppercase">Прозрачность</span>
            </div>

            <div className="mt-8">
              <h3 className="font-serif text-xl font-bold transition-colors">Открытый цех за стеклом</h3>

              <p className="text-bakery-light/60 mt-2 font-sans text-sm leading-relaxed font-light">
                Наша пекарня спроектирована так, чтобы вы могли видеть весь процесс своими глазами. Через большое панорамное стекло в зале можно
                наблюдать, как пекари бережно формуют будущие тартины и достают из раскаленных каменных печей дышащие буханки свежего хлеба.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
