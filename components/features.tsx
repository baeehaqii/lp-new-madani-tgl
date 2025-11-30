import { ShieldCheck, Trees, Cctv, CarFront, CircleMinus, IdCard } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Sistem Keamanan 24/7",
      description:
        "Nikmati keamanan tinggi dengan one gate system, petugas sekuriti, CCTV, dan patroli 24 jam yang siap menjaga lingkungan hunian serta memberikan rasa aman dan tenang bagi Anda dan keluarga.",
    },
    {
      icon: <CircleMinus />,
      title: "Privasi Penghuni Terjaga",
      description:
        "Rasakan ketenangan rumah yang jauh dari kebisingan, sehingga privasi Anda dan keluarga tetap terjaga.",
    },
    {
      icon: <CarFront />,
      title: "Akses Jalan Lebar",
      description:
        "Jalan utama perumahan 8 meter, jalan lingkungan 6 meter. Dapatkan kemudahan mobilitas berkat akses yang luas dan bebas dari kemacetan. Anda bisa berkendara dengan lebih nyaman.",
    },
    {
      icon: <Trees />,
      title: "Taman dan Ruang Terbuka Hijau",
      description:
        "Rasakan kesejukan udara dan ketenangan hunian sembari menikmati pemandangan hijau yang memanjakan mata.",
    },
  ]

  return (
    <section id="fasilitas" className="features-section">
      <div className="container">
        <h2 className="section-title">Hidup Praktis di Tengah Kota Tegal</h2>
        <p className="section-subtitle">
          Nyaman untuk Beristirahat, Bermain, & Berkumpul
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
