import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Facebook, Youtube, Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Navigation */}
                    {/* <div>
                        <h3 className="footer-heading">Navigasi</h3>
                        <ul className="footer-nav">
                            <li>
                                <Link href="#home" className="footer-link">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="#property" className="footer-link">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="footer-link">
                                    Tipe Rumah
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="footer-link">
                                    Fasilitas
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="footer-link">
                                    Pertanyaan Umum
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Information */}
                    {/* <div>
                        <h3 className="footer-heading">Informasi</h3>
                        <ul className="footer-nav">
                            <li>
                                <Link href="#" className="footer-link">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="footer-link">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="footer-link">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="footer-link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Company */}
                    {/* <div>
                        <h3 className="footer-heading">Perusahaan</h3>
                        <ul className="footer-nav">
                            <li>
                                <Link href="#" className="footer-link">
                                    Sapphire Grup
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="footer-link">
                                    Sapphire Graha
                                </Link>
                            </li>
                        </ul>
                    </div> */}

                    {/* Subscribe */}
                    {/* <div className="footer-subscribe">
                        <h3 className="footer-heading">Dapatkan Promo KPR Terbaru</h3>
                        <div className="footer-form">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="footer-input"
                            />
                            <button type="submit" className="footer-button">
                                <ArrowRight className="footer-social-icon"  />
                            </button>
                        </div>
                        <p className="footer-description">
                            Dengan mengisi email, Anda setuju untuk menerima informasi dan penawaran dari Sapphire Residence Sumbang.
                        </p>
                    </div> */}
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">
                        <Image
                            src="https://res.cloudinary.com/dqobwse9q/image/upload/v1761877791/Sapphire_Griya_j2f8a2.avif"
                            alt="Sapphire Madani Tegal Logo"
                            width={80}
                            height={50}
                        />
                    </div>

                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} Sapphire Madani Tegal by Sapphire Grup.
                    </div>

                    <div className="footer-social">
                        <Link href="https://www.instagram.com/samaragriyaofficial" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <Instagram className="footer-social-icon" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61572800044348" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <Facebook className="footer-social-icon" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://www.youtube.com/@SamaraGrup" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <Youtube className="footer-social-icon" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
