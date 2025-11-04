import Image from "next/image"
import Link from "next/link"

export default function SitePlan() {
  return (
    <section id="siteplan" className="siteplan-section">
      <div className="siteplan-background">
        <Image src="/rumah-hero.jpeg" alt="Background" fill className="siteplan-bg-image" priority={false} />
        <div className="siteplan-overlay" />
      </div>

      <div className="container">
        <div className="siteplan-content">
          <h2 className="section-title text-primary">Site Plan</h2>
          <p className="siteplan-description">
            Tata letak perumahan Sapphire Madani Tegal yang strategis dan terencana dengan baik
          </p>

          <div className="siteplan-image-wrapper">
            <Image
              src="https://res.cloudinary.com/dx8w9qwl6/image/upload/v1762016395/Screenshot_2025-11-01_at_23.46.35_va7v1e.avif"
              alt="Site Plan Sapphire Madani Tegal"
              width={1200}
              height={800}
              className="siteplan-image"
              priority
            />
          </div>

          <div className="siteplan-legend">
            <div className="legend-item">
              <div className="legend-color legend-sold" />
              <span>Unit Terjual</span>
            </div>
            <div className="legend-item">
              <div className="legend-color legend-available" />
              <span>Unit Tersedia</span>
            </div>
          </div>

          <div className="siteplan-button-container">
            <Link
              href="https://maps.google.com/?q=-6.8289,108.6753"
              target="_blank"
              rel="noopener noreferrer"
              className="siteplan-gmaps-button"
            >
              <svg className="siteplan-gmaps-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
              </svg>
              Buka di Google Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
