import { useEffect, useState } from 'react'

const slides = [
  { src: '/1.png', caption: 'Sürdürülebilir ormancılık' },
  { src: '/2.png', caption: 'Yüksek kalite kereste' },
  { src: '/3.png', caption: 'Dayanıklı deck çözümleri' },
  { src: '/4.jpeg', caption: 'Endüstriyel kontrplak' },
]

export default function Slider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-soft">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.src} className="min-w-full aspect-[16/9] bg-gray-100 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.caption} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-xl text-sm font-medium">
              {s.caption}
            </div>
          </div>
        ))}
      </div>

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm">›</button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i+1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-accent-600' : 'bg-white/70 border border-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
