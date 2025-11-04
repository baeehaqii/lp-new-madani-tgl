import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Tinggal Lebih Nyaman, Investasi Lebih Menguntungkan</h2>
          <p className="cta-description">
            Waktunya pindah ke hunian yang nyaman, aman, dan sesuai gaya Anda di Sapphire Madani Tegal. Pilih cluster favorit dan cek unitnya sekarang juga!
          </p>

          <div className="cta-buttons">
            <Link
              href="https://wa.me/628170031130?text=Halo,%20saya%20tertarik%20dengan%20properti%20Sapphire%20Madani%20Tegal"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link
              href="https://wa.me/628170031130?text=Halo,%20saya%20tertarik%20dengan%20properti%20Sapphire%20Madani%20Tegal"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
