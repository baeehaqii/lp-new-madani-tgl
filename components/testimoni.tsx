"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    location: string
    image: string
    rating: number
    text: string
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Prama G.",
            location: "Tegal, Indonesia",
            image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1764488271/gambar-1_eqx4w1.avif",
            rating: 5,
            text: "Satu lokasi punya lebih dari 1 konsep. Wuiihh, dah kaya di Jabodetabek saja Semoga jodoh bisa punya rumah di sini.",
        },
        {
            id: 2,
            name: "Zada D.",
            location: "Tegal, Indonesia",
            image: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1764488270/gambar-8_t2p9jt.avif",
            rating: 5,
            text: "Pengen banget punya rumah di sini, akses jalan luas, fasilitas lengkap, lokasinya strategis banget mau kemana mana deket. Bismillah.",
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="testimonials-title">Apa Kata Mereka</h2>
                </div>

                <div className="testimonials-grid">
                    <div>
                        <div className="testimonials-image-container">
                            <Image
                                src={currentTestimonial.image}
                                alt={`Testimoni dari ${currentTestimonial.name}`}
                                fill
                                className="object-cover testimonials-image"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="testimonials-text">{currentTestimonial.text}</p>
                        <div className="testimonials-stars">
                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                <Star key={i} className="testimonials-star" />
                            ))}
                        </div>
                        <div>
                            <h3 className="testimonials-name">{currentTestimonial.name}</h3>
                            <p className="testimonials-location">{currentTestimonial.location}</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-controls">
                    <button
                        onClick={handlePrev}
                        className="testimonials-btn"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="testimonials-btn testimonials-btn-primary"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
