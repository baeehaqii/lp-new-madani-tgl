"use client"

import { useState } from "react"
import Image from "next/image"
import { XIcon, ZoomInIcon, ZoomOutIcon } from "./icons"

export default function Gallery() {
  // State untuk lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const [currentMediaType, setCurrentMediaType] = useState<"image" | "video">("image")
  const [zoomLevel, setZoomLevel] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Data gambar-gambar yang ada di gallery
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761825386/2_4_-_Photo.jpeg_sjzwqy.avif",
      alt: "Modern luxury home exterior",
      type: "image",
    },
    {
      src: "https://res.cloudinary.com/dx8w9qwl6/image/upload/w_800,h_450,c_fill,f_auto,q_40/v1761825387/2_6_-_Photo.jpeg_sbnhu8.avif",
      alt: "Modern luxury home pool",
      type: "image",
    },
    {
      src: "https://www.instagram.com/reel/DN2khw-UrEC/",
      alt: "Instagram Reel 1",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dqobwse9q/image/upload/w_600,h_400,c_fill,f_auto,q_auto:eco/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.06_o6oiez.jpg",
    },
    {
      src: "https://www.instagram.com/reel/DNAe6_NTxcG/",
      alt: "Instagram Reel 2",
      type: "video",
      thumbnail: "https://res.cloudinary.com/dqobwse9q/image/upload/w_600,h_400,c_fill,f_auto,q_auto:eco/v1754637078/WhatsApp_Image_2025-06-19_at_11.00.07_bvpgud.jpg",
    },

  ]

  // Function untuk membuka lightbox
  // Define interface for gallery images
  interface GalleryImage {
    src: string
    alt: string
    type: "image" | "video"
    thumbnail?: string
  }

  const openLightbox = (imageSrc: string, mediaType: "image" | "video", index: number): void => {
    setCurrentImage(imageSrc)
    setCurrentMediaType(mediaType)
    setCurrentIndex(index)
    setLightboxOpen(true)
    setZoomLevel(1)
    document.body.style.overflow = "hidden"
  }

  // Function untuk navigasi ke gambar sebelumnya
  const previousImage = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    const image = galleryImages[newIndex]
    setCurrentImage(image.src)
    setCurrentMediaType(image.type as "image" | "video")
    setCurrentIndex(newIndex)
    setZoomLevel(1)
  }

  // Function untuk navigasi ke gambar berikutnya
  const nextImage = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    const image = galleryImages[newIndex]
    setCurrentImage(image.src)
    setCurrentMediaType(image.type as "image" | "video")
    setCurrentIndex(newIndex)
    setZoomLevel(1)
  }

  // Function untuk menutup lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    setZoomLevel(1)
    document.body.style.overflow = "auto"
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1))
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">Gallery Sapphire Madani Tegal</h2>
        <p className="section-subtitle">
          Temukan keindahan dan kenyamanan rumah impian Anda di Sapphire Madani Tegal. Setiap sudut dirancang dengan
          perhatian terhadap detail, menciptakan ruang yang sempurna untuk hidup dan bersantai.
        </p>

        <div className="gallery-grid">
          {/* Image 1 - Regular Image (No Play Button) */}
          <div
            className="gallery-grid-item"
            onClick={() => openLightbox(galleryImages[0].src, galleryImages[0].type as "image" | "video", 0)}
            style={{ position: "relative" }}
          >
            <Image
              src={galleryImages[0].src || "/placeholder.svg"}
              alt={galleryImages[0].alt}
              width={600}
              height={600}
              className="gallery-image"
            />
          </div>

          <div className="gallery-rows">
            {/* Image 2 - Regular Image (No Play Button) */}
            <div
              className="gallery-grid-item"
              onClick={() => openLightbox(galleryImages[1].src, galleryImages[1].type as "image" | "video", 1)}
              style={{ position: "relative" }}
            >
              <Image
                src={galleryImages[1].src || "/placeholder.svg"}
                alt={galleryImages[1].alt}
                width={600}
                height={300}
                className="gallery-image"
              />
            </div>

            <div className="gallery-columns">
              {/* Video 1 - Instagram Reel (WITH Play Button) */}
              <div
                className="gallery-grid-item"
                onClick={() => openLightbox(galleryImages[2].src, galleryImages[2].type as "image" | "video", 2)}
                style={{ position: "relative" }}
              >
                <Image
                  src={galleryImages[2].thumbnail || "/placeholder.svg"}
                  alt={galleryImages[2].alt}
                  width={300}
                  height={300}
                  className="gallery-image"
                />
                {galleryImages[2].type === "video" && (
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "48px",
                    color: "white",
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    pointerEvents: "none"
                  }}>
                    ▶️
                  </div>
                )}
              </div>

              {/* Video 2 - Instagram Reel (WITH Play Button) */}
              <div
                className="gallery-grid-item"
                onClick={() => openLightbox(galleryImages[3].src, galleryImages[3].type as "image" | "video", 3)}
                style={{ position: "relative" }}
              >
                <Image
                  src={galleryImages[3].thumbnail || "/placeholder.svg"}
                  alt={galleryImages[3].alt}
                  width={300}
                  height={300}
                  className="gallery-image"
                />
                {galleryImages[3].type === "video" && (
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "48px",
                    color: "white",
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    pointerEvents: "none"
                  }}>
                    ▶️
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <XIcon size={24} />
            </button>

            {currentMediaType === "image" && (
              <>
                <button className="gallery-lightbox-prev" onClick={previousImage} title="Previous">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <button className="gallery-lightbox-next" onClick={nextImage} title="Next">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                <div className="gallery-zoom-controls">
                  <button className="gallery-zoom-button" onClick={handleZoomIn} disabled={zoomLevel >= 3}>
                    <ZoomInIcon size={20} />
                  </button>
                  <button className="gallery-zoom-button" onClick={handleZoomOut} disabled={zoomLevel <= 1}>
                    <ZoomOutIcon size={20} />
                  </button>
                </div>
              </>
            )}

            <div className="gallery-lightbox-content">
              {currentMediaType === "video" ? (
                currentImage.includes("youtube.com") || currentImage.includes("youtu.be") ? (
                  <iframe
                    src={currentImage}
                    width="100%"
                    height="500px"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : currentImage.includes("instagram.com") ? (
                  <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <iframe
                      src={`https://www.instagram.com/reel/${currentImage.split('/reel/')[1]?.split('/')[0]}/embed/captioned`}
                      width="100%"
                      height="800"
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      style={{ maxWidth: "600px" }}
                    ></iframe>
                  </div>
                ) : (
                  <iframe
                    src={`https://drive.google.com/file/d/${currentImage}/preview`}
                    width="100%"
                    height="500px"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                )
              ) : (
                <div className="gallery-lightbox-image-wrapper">
                  <Image
                    src={currentImage || "/placeholder.svg"}
                    alt="Gallery image"
                    width={1200}
                    height={800}
                    className="gallery-lightbox-image"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
