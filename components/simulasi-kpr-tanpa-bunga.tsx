"use client"

import React, { useMemo, useState } from 'react'

function formatIDR(value: number) {
  return value.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })
}

export default function SimulasiKPRTanpaBunga() {
  const [harga, setHarga] = useState<number>(500000000)
  const [dp, setDp] = useState<number>(100000000)
  const [tahun, setTahun] = useState<number>(15)
  const [bunga, setBunga] = useState<number>(0)

  const jumlahPinjaman = useMemo(() => Math.max(0, harga - dp), [harga, dp])

  // Hitung cicilan dengan atau tanpa bunga
  const cicilanPerBulan = useMemo(() => {
    if (tahun <= 0) return 0
    const bulan = tahun * 12

    if (bunga === 0) {
      // Tanpa bunga: cicilan = pokok / bulan
      return jumlahPinjaman / bulan
    } else {
      // Dengan bunga: menggunakan rumus anuitas
      const bungaPerBulan = bunga / 100 / 12
      const pembilang = jumlahPinjaman * bungaPerBulan * Math.pow(1 + bungaPerBulan, bulan)
      const penyebut = Math.pow(1 + bungaPerBulan, bulan) - 1
      return pembilang / penyebut
    }
  }, [jumlahPinjaman, tahun, bunga])

  const totalPembayaran = useMemo(() => cicilanPerBulan * tahun * 12, [cicilanPerBulan, tahun])

  return (
    <section style={{
      width: '100%',
      padding: '48px 16px',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{
            fontSize: '35px',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '4px',
            fontFamily: 'inherit'
          }}>
            Simulasi KPR
          </h2>
          <p style={{
            fontSize: '20px',
            color: '#64748b',
            fontFamily: 'inherit'
          }}>
            Hitung estimasi cicilan KPR Anda dengan mudah
          </p>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px'
        }} className="kpr-grid-responsive">
          {/* Left Column: Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Harga Properti */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '6px',
                fontFamily: 'inherit'
              }}>
                Harga Properti
              </label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#334155',
                  backgroundColor: '#ffffff',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>

            {/* Uang Muka */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '13px',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '6px',
                fontFamily: 'inherit'
              }}>
                Uang Muka (DP)
              </label>
              <input
                type="number"
                value={dp}
                onChange={(e) => setDp(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#334155',
                  backgroundColor: '#ffffff',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>

            {/* Jangka Waktu & Suku Bunga */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '6px',
                  fontFamily: 'inherit'
                }}>
                  Jangka Waktu (Tahun)
                </label>
                <input
                  type="number"
                  value={tahun}
                  onChange={(e) => setTahun(Math.max(1, Number(e.target.value)))}
                  min="1"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#334155',
                    backgroundColor: '#ffffff',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '6px',
                  fontFamily: 'inherit'
                }}>
                  Suku Bunga (%)
                </label>
                <input
                  type="number"
                  value={bunga}
                  onChange={(e) => setBunga(Math.max(0, Number(e.target.value)))}
                  min="0"
                  step="0.1"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    color: '#334155',
                    backgroundColor: '#ffffff',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Results */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Main Red Card - Cicilan Per Bulan */}
            <div style={{
              backgroundColor: '#831016',
              color: '#ffffff',
              borderRadius: '16px',
              padding: '20px 24px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '6px',
                fontFamily: 'inherit',
                margin: 0
              }}>
                Cicilan Per Bulan
              </p>
              <p style={{
                fontSize: '36px',
                fontWeight: '800',
                fontFamily: 'inherit',
                margin: '8px 0 0 0',
                lineHeight: 1
              }}>
                {formatIDR(Math.round(cicilanPerBulan))}
              </p>
            </div>

            {/* Jumlah Pinjaman */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <p style={{
                fontSize: '12px',
                color: '#64748b',
                fontWeight: '500',
                margin: 0,
                fontFamily: 'inherit'
              }}>
                Jumlah Pinjaman
              </p>
              <p style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#0f172a',
                margin: '6px 0 0 0',
                fontFamily: 'inherit'
              }}>
                {formatIDR(Math.round(jumlahPinjaman))}
              </p>
            </div>

            {/* Yellow Note */}
            <div style={{
              backgroundColor: '#fef9c3',
              borderLeft: '4px solid #eab308',
              borderRadius: '6px',
              padding: '12px',
              marginTop: '4px'
            }}>
              <p style={{
                fontSize: '12px',
                color: '#713f12',
                margin: 0,
                fontFamily: 'inherit'
              }}>
                <span style={{ fontWeight: '700' }}>*</span> Estimasi tanpa bunga. Untuk simulasi dengan bunga gunakan komponen simulasi KPR standar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .kpr-grid-responsive {
            grid-template-columns: 1fr 1.5fr !important;
          }
        }
      `}</style>
    </section>
  )
}
