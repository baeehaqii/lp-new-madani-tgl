"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, CheckCircle } from "lucide-react"

type TabType = "concepts" | "payment-schemes" | "documents"

interface Concept {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

interface PaymentScheme {
  id: number
  title: string
  subtitle?: string
  items: string[]
}

interface Document {
  id: number
  title: string
  subtitle?: string
  completed: boolean
}

export default function Concepts() {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>("payment-schemes")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Orientasi Bangunan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066026/konsep-orientasi-bangunan_bcqzu2.png",
      alt: "Konsep Desain Responsif Iklim - Orientasi Bangunan",
    },
    {
      id: 2,
      title: "Konsep Ventilasi Udara",
      subtitle: "Cross Ventilation",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-ventilasi-udara_q5xev7.png",
      alt: "Konsep Ventilasi Udara",
    },
    {
      id: 3,
      title: "Konsep Pencahayaan Alami",
      subtitle: "Natural Lighting",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066189/konsep-pencahayaan-alami_ueh1wu.png",
      alt: "Konsep Pencahayaan Alami",
    },
    {
      id: 4,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Sistem Pelindung Matahari",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-sistem-pelindung-matahari_mqmzrm.png",
      alt: "Konsep Sistem Pelindung Matahari",
    },
    {
      id: 5,
      title: "Konsep Desain Responsif Iklim",
      subtitle: "Bentuk Atap",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-bentuk-atap_adivub.png",
      alt: "Konsep Bentuk Atap",
    },
    {
      id: 6,
      title: "Konsep Fasad",
      subtitle: "Material Bangunan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-fasad-material_sr5883.png",
      alt: "Konsep Fasad - Material Bangunan",
    },
    {
      id: 7,
      title: "Konsep Fasad",
      subtitle: "Gaya Arsitektur Minimalis Modern",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-fasad-gaya_zvha7c.png",
      alt: "Konsep Fasad - Gaya Arsitektur",
    },
    {
      id: 8,
      title: "Konsep Ruang Terbuka",
      subtitle: "Open Plan",
      image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/q_10/v1761066025/konsep-ruang-terbuka_w5r8jd.png",
      alt: "Konsep Ruang Terbuka",
    },
  ]

  const paymentSchemes: PaymentScheme[] = [
    {
      id: 1,
      title: "Pembelian dengan KPR Bank",
      items: [
        "Calon konsumen melakukan pembayaran Booking Fee",
        "Calon konsumen menyiapkan berkas mandatory berupa KTP untuk dilakukan proses SLIK",
        "Jika hasil SLIK dinyatakan bersih dan atau bisa dilanjut proses KPR, maka calon konsumen meleangkapi dokumen KPR yang dipersyaratkan.",
        "Melakukan pembayaran Uang Muka maksimal 7 Hari setelah Booking Fee",
        "Setelah dokumen lengkap, berkas KPR akan diserahkan ke perbankan.",
        "Estimasi persetujuan kredit adalah 7 Hari untuk Fix Income, dan 21 Hari untuk Wiraswasta setelah berkas dinyatakan lengkap.",
        "Setelah turun persetujuan kredit (SPPPK), calon konsumen melakukan pembayaran Biaya Proses KPR sebelum dilakukan Akad Kredit dengan pihak perbankan dan notaris.",
      ],
    },
    {
      id: 2,
      title: "Pembelian dengan Cash Keras",
      items: [
        "Calon konsumen melakukan pembayaran Booking Fee",
        "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 95% dari harga rumah.",
        "Pelunasan atau sisa pembayaran 5% dilakukan setelah rumah jadi.",
        "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
      ],
    },
    {
      id: 3,
      title: "Pembelian dengan Cash by Progres Pembangunan",
      items: [
        "Calon konsumen melakukan pembayaran Booking Fee",
        "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 50% dari harga rumah.",
        "Pembayaran selanjutnya sebesar 45% dilakukan setelah progres bangunan mencapai Atap.",
        "Pelunasan atau sisa pembayaran 5% dilakukan setelah rumah jadi.",
        "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
      ],
    },
    {
      id: 4,
      title: "Pembelian dengan Cash Termin/Cicil ke Developer",
      subtitle: "Selama 8 Bulan",
      items: [
        "Calon konsumen melakukan pembayaran Booking Fee",
        "Maksimal 7 Hari setelah pembayaran Booking Fee, calon konsumen melakukan pembayaran Uang Muka sebesar 50% dari harga rumah.",
        "Sisa 50% pembayaran dilakukan setiap bulan selama 8 bulan.",
        "Setelah pembayaran 100% dilakukan Akad Jual Beli (AJB) dihadapan notaris.",
      ],
    },
  ]

  const documents: Document[] = [
    {
      id: 1,
      title: "Sertifikat Hak Milik (SHM)",
      completed: true,
    },
    {
      id: 2,
      title: "Persetujuan Bangunan Gedung (PBG)",
      completed: true,
    },
    {
      id: 3,
      title: "Surat Pemberitahuan Pajak Terutang (SPPT)",
      completed: true,
    },
    {
      id: 4,
      title: "Akta Jual Beli (AJB)",
      completed: true,
    },
  ]

  const openModal = (concept: Concept) => {
    setSelectedConcept(concept)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedConcept(null)
    document.body.style.overflow = "auto"
  }

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation 50px before element enters viewport
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="konsep"
      className={`concepts-section ${isVisible ? 'animate-fade-in-up' : 'animate-hidden'}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Skema Pembelian & Dokumen</h2>

        {/* Tab Navigation */}
        <div className="concepts-tabs">
          <button
            className={`concepts-tab ${activeTab === "payment-schemes" ? "active" : ""}`}
            onClick={() => setActiveTab("payment-schemes")}
          >
            Skema Pembelian
          </button>
          <button
            className={`concepts-tab ${activeTab === "documents" ? "active" : ""}`}
            onClick={() => setActiveTab("documents")}
          >
            Dokumen Serah Terima
          </button>
        </div>

        {/* Payment Schemes Tab */}
        {activeTab === "payment-schemes" && (
          <div className="payment-schemes-container">
            <h3 className="payment-schemes-title">Skema Pembelian</h3>
            <div className="payment-schemes-list">
              {paymentSchemes.map((scheme, index) => (
                <div
                  key={scheme.id}
                  className={`payment-scheme-card ${isVisible ? 'animate-fade-in-up-card' : 'animate-hidden-card'}`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.15}s` : '0s'
                  }}
                >
                  <div className="payment-scheme-header">
                    <h4 className="payment-scheme-title">{scheme.title}</h4>
                    {scheme.subtitle && <span className="payment-scheme-subtitle">{scheme.subtitle}</span>}
                  </div>
                  <ul className="payment-scheme-items">
                    {scheme.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="payment-scheme-item">
                        <span className="payment-scheme-bullet">•</span>
                        <span className="payment-scheme-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === "documents" && (
          <div className="documents-container">
            <h3 className="documents-title">Dokumen Serah Terima</h3>
            <div className="documents-list">
              {documents.map((doc, index) => (
                <div
                  key={doc.id}
                  className={`document-card ${isVisible ? 'animate-fade-in-up-card' : 'animate-hidden-card'}`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.1}s` : '0s'
                  }}
                >
                  <div className="document-icon">
                    {doc.completed && <CheckCircle size={32} className="document-check" />}
                  </div>
                  <div className="document-content">
                    <h4 className="document-title">{doc.title}</h4>
                  </div>
                  <div className="document-status">
                    {doc.completed && <span className="document-completed">✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedConcept && (
        <div className="concept-modal-overlay" onClick={closeModal}>
          <div className="concept-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="concept-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="concept-modal-content">
              <Image
                src={selectedConcept.image || "/placeholder.svg"}
                alt={selectedConcept.alt}
                width={1200}
                height={900}
                className="concept-modal-image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
