"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { XIcon, ZoomInIcon, ZoomOutIcon, Play, ChevronDown } from "lucide-react"

export default function ConstructionProgress() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState<{ type: "image" | "video"; src: string } | null>(null)
    const [zoom, setZoom] = useState(1)
    const [selectedMonth, setSelectedMonth] = useState(10)
    const [selectedYear, setSelectedYear] = useState(2025)
    const [showMonthPicker, setShowMonthPicker] = useState(false)
    const [showYearPicker, setShowYearPicker] = useState(false)

    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]

    const years = Array.from({ length: 3 }, (_, i) => 2025 - i)

    const progressItems = [
        // Oktober 2025
        {
            id: 1,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=Oktober+Gambar+1",
            alt: "Progres Pembangunan Oktober 1",
            title: "Persiapan Lokasi",
            month: 10,
            year: 2025,
        },
        {
            id: 2,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=Oktober+Gambar+2",
            alt: "Progres Pembangunan Oktober 2",
            title: "Penggalian Pondasi",
            month: 10,
            year: 2025,
        },
        {
            id: 3,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=Oktober+Gambar+3",
            alt: "Progres Pembangunan Oktober 3",
            title: "Proses Konstruksi",
            month: 10,
            year: 2025,
        },
        {
            id: 4,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=Oktober+Gambar+4",
            alt: "Progres Pembangunan Oktober 4",
            title: "Pasang Kolom",
            month: 10,
            year: 2025,
        },
        {
            id: 5,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=Oktober+Gambar+5",
            alt: "Progres Pembangunan Oktober 5",
            title: "Plesteran Dinding",
            month: 10,
            year: 2025,
        },
        {
            id: 6,
            type: "video" as const,
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            alt: "Video Progres Oktober",
            title: "Video Progres Oktober 2025",
            month: 10,
            year: 2025,
        },
        // November 2025
        {
            id: 7,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=November+Gambar+1",
            alt: "Progres Pembangunan November 1",
            title: "Atap Struktur",
            month: 11,
            year: 2025,
        },
        {
            id: 8,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=November+Gambar+2",
            alt: "Progres Pembangunan November 2",
            title: "Pengecatan Awal",
            month: 11,
            year: 2025,
        },
        {
            id: 9,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=November+Gambar+3",
            alt: "Progres Pembangunan November 3",
            title: "Instalasi Listrik",
            month: 11,
            year: 2025,
        },
        {
            id: 10,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=November+Gambar+4",
            alt: "Progres Pembangunan November 4",
            title: "Pemasangan Pintu",
            month: 11,
            year: 2025,
        },
        {
            id: 11,
            type: "image" as const,
            src: "https://via.placeholder.com/400x300?text=November+Gambar+5",
            alt: "Progres Pembangunan November 5",
            title: "Finishing Interior",
            month: 11,
            year: 2025,
        },
        {
            id: 12,
            type: "video" as const,
            src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            alt: "Video Progres November",
            title: "Video Progres November 2025",
            month: 11,
            year: 2025,
        },
    ]

    const filteredItems = progressItems.filter(
        (item) => item.month === selectedMonth + 1 && item.year === selectedYear
    )

    const openLightbox = (item: { type: "image" | "video"; src: string }) => {
        setSelectedItem(item)
        setIsLightboxOpen(true)
        setZoom(1)
        document.body.style.overflow = "hidden"
    }

    const closeLightbox = () => {
        setIsLightboxOpen(false)
        setSelectedItem(null)
        setZoom(1)
        document.body.style.overflow = "auto"
    }

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 0.5, 3))
    }

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 0.5, 1))
    }

    const getDropdownStyle = (isBottom: boolean = true) => ({
        position: "absolute" as const,
        top: isBottom ? "100%" : "auto",
        bottom: isBottom ? "auto" : "100%",
        left: 0,
        marginTop: isBottom ? "4px" : 0,
        marginBottom: isBottom ? 0 : "4px",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "6px",
        zIndex: 10,
        minWidth: "150px",
        maxHeight: "300px",
        overflowY: "auto" as const,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    })

    return (
        <div style={{ paddingTop: "16px" }}>
            {/* Date Picker Section */}
            <div style={{
                display: "flex",
                gap: "12px",
                marginBottom: "24px",
                alignItems: "flex-start",
                flexWrap: "wrap",
            }}>
                <span style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1e293b",
                    width: "100%",
                    marginBottom: "8px",
                }}>
                    Pilih Bulan &amp; Tahun:
                </span>

                {/* Month Picker */}
                <div style={{ position: "relative", flex: "0 1 auto", minWidth: "140px" }}>
                    <button
                        onClick={() => {
                            setShowMonthPicker(!showMonthPicker)
                            setShowYearPicker(false)
                        }}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#1e293b",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.2s ease",
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            btn.style.borderColor = "#831016"
                            btn.style.backgroundColor = "#f8fafc"
                        }}
                        onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            btn.style.borderColor = "#e2e8f0"
                            btn.style.backgroundColor = "#ffffff"
                        }}
                    >
                        {months[selectedMonth]}
                        <ChevronDown size={16} />
                    </button>

                    {showMonthPicker && (
                        <div style={getDropdownStyle(true) as React.CSSProperties}>
                            {months.map((month, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedMonth(index)
                                        setShowMonthPicker(false)
                                    }}
                                    style={{
                                        width: "100%",
                                        padding: "10px 16px",
                                        backgroundColor: index === selectedMonth ? "#f0f4f8" : "#ffffff",
                                        border: "none",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color: index === selectedMonth ? "#831016" : "#475569",
                                        fontWeight: index === selectedMonth ? 600 : 500,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        if (index !== selectedMonth) {
                                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f8fafc"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (index !== selectedMonth) {
                                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff"
                                        }
                                    }}
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Year Picker */}
                <div style={{ position: "relative", flex: "0 1 auto", minWidth: "100px" }}>
                    <button
                        onClick={() => {
                            setShowYearPicker(!showYearPicker)
                            setShowMonthPicker(false)
                        }}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#1e293b",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            transition: "all 0.2s ease",
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            btn.style.borderColor = "#831016"
                            btn.style.backgroundColor = "#f8fafc"
                        }}
                        onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLButtonElement
                            btn.style.borderColor = "#e2e8f0"
                            btn.style.backgroundColor = "#ffffff"
                        }}
                    >
                        {selectedYear}
                        <ChevronDown size={16} />
                    </button>

                    {showYearPicker && (
                        <div style={getDropdownStyle(true) as React.CSSProperties}>
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => {
                                        setSelectedYear(year)
                                        setShowYearPicker(false)
                                    }}
                                    style={{
                                        width: "100%",
                                        padding: "10px 16px",
                                        backgroundColor: year === selectedYear ? "#f0f4f8" : "#ffffff",
                                        border: "none",
                                        textAlign: "center",
                                        fontSize: "14px",
                                        color: year === selectedYear ? "#831016" : "#475569",
                                        fontWeight: year === selectedYear ? 600 : 500,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        if (year !== selectedYear) {
                                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f8fafc"
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (year !== selectedYear) {
                                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ffffff"
                                        }
                                    }}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Grid Section */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                }}
            >
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: "relative",
                            cursor: "pointer",
                            borderRadius: "12px",
                            overflow: "hidden",
                            backgroundColor: "#f1f5f9",
                            aspectRatio: "4/3",
                        }}
                        onClick={() => openLightbox({ type: item.type, src: item.src })}
                    >
                        {item.type === "image" ? (
                            <>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: "rgba(0, 0, 0, 0)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        transition: "backgroundColor 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor =
                                            "rgba(0, 0, 0, 0.3)"
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLDivElement).style.backgroundColor =
                                            "rgba(0, 0, 0, 0)"
                                    }}
                                >
                                    <ZoomInIcon
                                        size={32}
                                        style={{
                                            color: "white",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "#000",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Play
                                        size={48}
                                        style={{ color: "white", opacity: 0.7 }}
                                    />
                                </div>
                            </>
                        )}
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                color: "white",
                                padding: "12px",
                                fontSize: "14px",
                                fontWeight: "600",
                            }}
                        >
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {filteredItems.length === 0 && (
                <div style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    color: "#94a3b8",
                    fontSize: "14px",
                }}>
                    Tidak ada progres untuk bulan {months[selectedMonth]} {selectedYear}
                </div>
            )}

            {isLightboxOpen && selectedItem && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000,
                    }}
                    onClick={closeLightbox}
                >
                    <div
                        style={{
                            position: "relative",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeLightbox}
                            style={{
                                position: "absolute",
                                top: "-50px",
                                right: "0",
                                backgroundColor: "transparent",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <XIcon size={32} />
                        </button>

                        {selectedItem.type === "image" && (
                            <>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "12px",
                                        position: "absolute",
                                        bottom: "-50px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                >
                                    <button
                                        onClick={handleZoomIn}
                                        disabled={zoom >= 3}
                                        style={{
                                            padding: "8px 12px",
                                            backgroundColor: zoom >= 3 ? "#64748b" : "#831016",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: zoom >= 3 ? "not-allowed" : "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <ZoomInIcon size={18} />
                                        Perbesar
                                    </button>
                                    <button
                                        onClick={handleZoomOut}
                                        disabled={zoom <= 1}
                                        style={{
                                            padding: "8px 12px",
                                            backgroundColor: zoom <= 1 ? "#64748b" : "#831016",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "6px",
                                            cursor: zoom <= 1 ? "not-allowed" : "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        <ZoomInIcon size={18} style={{ transform: "rotate(180deg)" }} />
                                        Perkecil
                                    </button>
                                </div>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "auto",
                                    }}
                                >
                                    <Image
                                        src={selectedItem.src}
                                        alt="Preview"
                                        width={800}
                                        height={600}
                                        style={{
                                            transform: `scale(${zoom})`,
                                            transition: "transform 0.2s ease",
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            </>
                        )}

                        {selectedItem.type === "video" && (
                            <div
                                style={{
                                    width: "100%",
                                    maxWidth: "800px",
                                    aspectRatio: "16/9",
                                }}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={selectedItem.src}
                                    title="Video Progres"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ borderRadius: "8px" }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
