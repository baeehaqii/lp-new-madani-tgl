"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Hexagon, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="header-logo">
          <Image
            src="/logo/sapphire_griya.avif"
            alt="Sapphire Madani Tegal Logo"
            width={80}
            height={50}
            className="header-logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <Link href="/" className="header-nav-link">
            Beranda
          </Link>
          <Link href="#tentang-kami" className="header-nav-link">
            Tentang Kami
          </Link>
          <Link href="#tipe-rumah" className="header-nav-link">
            Tipe Rumah
          </Link>
          <Link href="#fasilitas" className="header-nav-link">
            Fasilitas
          </Link>

          <Link href="#cta" className="header-nav-link">
            Promo
          </Link>
        </nav>

        {/* <Link
          href="#cta"
          className="header-button"
        >
          Dapatkan E-Brochure
        </Link> */}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="header-mobile-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="header-mobile-icon" /> : <Menu className="header-mobile-icon" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="header-mobile-nav">
          <nav className="header-mobile-menu">
            <Link
              href="/"
              className="header-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="header-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="#properties"
              className="header-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Tipe Rumah
            </Link>
            <Link
              href="#features"
              className="header-mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Fasilitas
            </Link>

            <Link href="#cta" className="header-nav-link">
              Promo
            </Link>
            {/* <Link
              href="#contact"
              className="header-mobile-button-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Dapatkan E-Brochure
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  )
}