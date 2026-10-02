'use client'

import React from 'react'
import ProductCard from './card'

export default function ProductHit() {
  const bakeryHits = [
    { title: 'Тартин пшеничный', price: '240 ₽', weight: '450г', desc: 'Флагманский ремесленный хлеб на дикой закваске длительного созревания.' },
    { title: 'Шоколадный бабка-бан', price: '190 ₽', weight: '120г', desc: 'Мягкое сдобное тесто с начинкой из швейцарского темного шоколада.' },
    { title: 'Ржаной с клюквой', price: '260 ₽', weight: '400г', desc: 'Плотный мякиш, легкая кислинка и вяленая карельская клюква.' },
    { title: 'Даниш с персиком', price: '220 ₽', weight: '130г', desc: 'Слоеное тесто на французском масле, заварной крем и сочные персики.' },
  ]

  return (
    <div className="bg-bakery-dark text-bakery-light px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="text-bakery-accent font-mono font-sans text-xs tracking-widest uppercase">Любимое гостями</span>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-4xl">Хиты этой недели</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bakeryHits.map((item, idx) => (
            <ProductCard key={idx} data={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
