'use client'

import React from 'react'
import Link from 'next/link'
import { Croissant, MapPin, Phone, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Ссылки на наши 3 главных раздела
  const links = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <footer className="border-bakery-light/5 bg-bakery-dark text-bakery-light mt-auto w-full border-t font-sans">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        {/* Главная сетка футера */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
          {/* КОЛОНКА 1: Брендинг и Манифест */}
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="border-bakery-light/5 bg-bakery-gray text-bakery-accent group-hover:border-bakery-accent/30 rounded-xl border p-2 transition-colors">
                <Croissant className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg font-black tracking-wide">
                CRAFT<span className="text-bakery-accent">CRUST</span>
              </span>
            </Link>
            <p className="text-bakery-light/50 max-w-xs text-sm leading-relaxed font-light">
              Ремесленная лаборатория хлеба. Запускаем каменные подовые печи каждое утро в 06:00, чтобы вы наслаждались настоящей хрустящей корочкой.
            </p>
          </div>

          {/* КОЛОНКА 2: Навигация по 3 разделам */}
          <div className="space-y-4">
            <h4 className="text-bakery-light/90 font-serif text-base font-bold tracking-wide">Разделы сайта</h4>
            <nav className="flex flex-col space-y-2.5 text-sm font-medium">
              {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-bakery-light/60 hover:text-bakery-accent w-fit transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* КОЛОНКА 3: Быстрые контакты */}
          <div className="space-y-4">
            <h4 className="text-bakery-light/90 font-serif text-base font-bold tracking-wide">Где нас найти</h4>
            <ul className="text-bakery-light/60 space-y-3 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="text-bakery-accent h-4 w-4 shrink-0" />
                <span>ул. Трумтрум, д. 54, Москва</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="text-bakery-accent h-4 w-4 shrink-0" />
                <span>Ежедневно: с 06:00 до 21:00</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-bakery-accent h-4 w-4 shrink-0" />
                <a href="tel:+79991234567" className="hover:text-bakery-accent transition-colors">
                  +7 (999) 000-54-54
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* НИЖНЯЯ ПАНЕЛЬ: Линия и Копирайт */}
        <div className="border-bakery-light/5 text-bakery-light/30 mt-12 flex flex-col items-center justify-center gap-4 border-t pt-6 text-xs font-light sm:flex-row">
          MrLIINdor - All Rights Reserved © 2026
        </div>
      </div>
    </footer>
  )
}
