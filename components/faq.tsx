"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Dimana lokasi proyeknya?",
      answer:
        "Lokasi Sapphire Madani Tegal di Jalan Pendidikan, Pesurungan Lor, Margadana, Kota Tegal. Lokasinya dekat dengan fasilitas umum. Hanya berjarak 5 menit dari Gerbang Tol Tegal, 4 menit dari Transmart Tegal, 4 menit dari SMK N 1 Tegal, RS Mitra Keluarga Tegal, 8 menit dari Pusat Pemerintahan Kota Tegal, dan 9 menit dari Stasiun Tegal.",
    },
    {
      question: "Apa saja fasilitas umum yang disediakan di dalam Sapphire Madani Tegal?",
      answer:
        "Di Sapphire Madani Tegal, kami menghadirkan lingkungan dengan fasilitas modern dan nyaman. Kami menyediakan fasilitas olahraga di sekitar area perumahan. Selain itu, kami juga menyediakan area terbuka hijau atau green area yang memberikan kesejukan dan ketenangan sehingga cocok digunakan untuk tempat rekreasi Anda. Kami juga mengutamakan keamanan dengan one gate system dan penjagaan dari sekuriti selama 24 jam untuk menjaga kawasan tetap aman.",
    },
    {
      question: "Apakah rumah di Sapphire Madani Tegal sudah memiliki sertifikat hak milik (SHM)?",
      answer:
        "Di Sapphire Madani Tegal, kami sudah mengurus proses pemecahan sertifikat, jadi saat serah terima nanti, sertifikatnya langsung atas nama Bapak/Ibu. Hal ini mempermudah dan mempercepat proses kepemilikan tanpa perlu menunggu lama untuk pengurusan balik nama. Kami memastikan urusan administrasi menjadi lebih praktis untuk Bapak/Ibu, jadi begitu Anda menerima kunci, status kepemilikan sudah resmi atas nama Anda.",
    },
    {
      question: "Apakah sertifikat ini aman dari masalah hukum di kemudian hari?",
      answer:
        "Mengenai legalitas di Sapphire Madani Tegal, semua sudah lengkap dan aman, Bapak/Ibu. Properti di sini dilengkapi Sertifikat Hak Milik (SHM), jadi kepemilikannya jelas atas nama pembeli. Izin bangunannya juga sudah ada melalui Persetujuan Bangunan Gedung (PBG), artinya bangunan sudah sesuai aturan dan aman.",
    },
    {
      question: "Kapan saya akan menerima sertifikat rumah setelah pembelian?",
      answer:
        "Setelah proses pembelian selesai, sertifikat rumah akan siap dalam waktu sekitar 8 bulan. Kami pastikan prosesnya berjalan lancar dan akan segera mengabari Anda begitu sertifikat selesai. Selama periode ini, kami juga siap membantu dan memberikan update terkait perkembangan administrasi.",
    },
    {
      question: "Apakah rumah di Sapphire Madani Tegal sudah memiliki PBG?",
      answer:
        "Rumah di Sapphire Madani Tegal sudah memiliki Persetujuan Bangunan Gedung (PBG), jadi Anda tidak perlu khawatir soal legalitas bangunan ini. PBG ini memastikan bahwa proses pembangunan sudah sesuai dengan peraturan yang berlaku, sehingga hunian di sini aman dan sah untuk ditinggali, maupun sebagai investasi jangka panjang.",
    },
    {
      question: "Bagaimana saya bisa memastikan legalitas semua dokumen yang diberikan?",
      answer:
        "Terkait legalitas dokumen-dokumennya, nanti saat Bapak/Ibu berkunjung ke kantor marketing, kami bisa perlihatkan soft file-nya untuk ditinjau. Dengan begitu, Anda bisa langsung melihat rincian dokumen seperti sertifikat, PBG, dan lainnya.",
    },
    {
      question: "Siapa yang akan mengurus balik nama sertifikat dan bagaimana dengan pajaknya?",
      answer:
        "Terkait proses balik nama dan pajak, semua biaya sudah termasuk dalam harga, jadi Bapak/Ibu tidak perlu khawatir tentang biaya tambahan. Proses ini akan sepenuhnya kami tangani, sehingga Bapak/Ibu bisa fokus menikmati hunian baru tanpa repot mengurus dokumen. Ketika serah terima nanti, kami pastikan sertifikat sudah resmi atas nama Bapak/Ibu, sehingga status kepemilikan sudah sepenuhnya sah dan aman.",
    },
    {
      question: "Mekanisme pembeliannya bagaimana, ya?",
      answer:
        "Terkait mekanisme pembelian rumah, kami menyediakan dua metode pembayaran, yaitu melalui Kredit Pemilikan Rumah (KPR) atau secara tunai. Jika memilih KPR, kami bisa membantu proses pengajuan melalui beberapa bank rekanan dengan suku bunga yang kompetitif dan proses yang lebih mudah. Untuk pembayaran tunai, kami juga menawarkan fleksibilitas, seperti potongan harga khusus atau promo lainnya. Kami siap menjelaskan lebih lanjut mengenai kedua opsi ini, agar bisa disesuaikan dengan kebutuhan Bapak/Ibu.",
    },
    {
      question: "Tersedia KPR Bank apa saja?",
      answer:
        "Kami telah menjalin kerja sama dengan beberapa bank terkemuka, yaitu Bank Mandiri, BTN, BSI, dan BRI. Dengan kerja sama ini, kami dapat membantu memudahkan pengajuan KPR dan menawarkan suku bunga yang kompetitif sesuai dengan preferensi Bapak/Ibu. Kami juga siap memberikan informasi detail mengenai persyaratan dan proses KPR dari masing-masing bank, supaya Bapak/Ibu bisa memilih solusi pembiayaan yang paling sesuai.",
    },
    {
      question: "Apakah ada pilihan untuk membayar tanpa KPR?",
      answer:
        "Ya, di Sapphire Madani Tegal kami juga menyediakan pilihan untuk pembayaran tanpa menggunakan KPR. Pembayaran bisa dilakukan secara cash keras (pembayaran penuh sekaligus), soft cash (dengan uang muka lebih ringan dan sisanya dicicil), dan cash termin. Kami siap membantu menjelaskan setiap opsi dan memberi informasi terkait potongan harga atau promo yang berlaku untuk pembayaran tunai.",
    },
    {
      question: "Berapa uang muka dan cicilan per bulan yang harus dibayarkan?",
      answer:
        "Untuk yang berpenghasilan tetap, uang muka mulai dari 5%. Sedangkan untuk wiraswasta, uang muka mulai dari 10%.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Pertanyaan Umum Sapphire Madani Tegal</h2>
          <p className="faq-description">
            Temukan semua informasi yang Anda butuhkan di bagian FAQ kami.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <ChevronDown
                  className={`faq-icon ${openIndex === index ? "faq-icon-rotated" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
