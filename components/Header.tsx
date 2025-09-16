import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

const NAV = [
  { href: '/', label: 'Anasayfa' },
  { href: '/kurumsal', label: 'Kurumsal' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/uretim-tesislerimiz', label: 'Üretim Tesislerimiz' },
  { href: '/kullanim-alanlari', label: 'Kullanım Alanları' },
  { href: '/iletisim', label: 'İletişim' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-slate-300 backdrop-blur border-b border-primary-100">
      <div className="container max-w-7xl">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(item => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link key={item.href} href={item.href} className={`nav-link ${active ? 'text-primary-700' : ''}`}>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <button onClick={()=>setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2">
            Menü
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid gap-2">
            {NAV.map(item => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={()=>setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
