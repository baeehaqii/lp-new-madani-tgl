import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "11 menit dari RSUD Kardinah Tegal",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "4 menit dari SMK N 1 Tegal",
        "9 menit dari SMA N 1 Tegal",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan & Hiburan",
      items: [
        "4 menit dari Transmart Tegal",
        "4 menit dari RSM Tegal",
        "4 menit dari Bahari Waterpark Tegal",
        "6 menit dari Pasific Mall Tegal",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Publik",
      items: [
        "8 menit dari Pusat Pemerintahan Kota Tegal",
        "9 menit dari Stasiun Tegal",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
