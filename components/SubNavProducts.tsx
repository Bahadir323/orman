import Link from 'next/link'
import { useRouter } from 'next/router'

const SUBNAV = [
  { href: '/urunler/tomruk', label: 'Tomruk' },
  { href: '/urunler/kereste', label: 'Kereste' },
  { href: '/urunler/deck', label: 'Deck' },
  { href: '/urunler/kontrplak', label: 'Kontrplak' },
]

export default function SubNavProducts() {
  const { pathname } = useRouter()
  return (
    <div className="w-full bg-primary-700 text-white">
      <div className="container max-w-7xl">
        <div className="flex items-center gap-2 overflow-x-auto py-2">
          {SUBNAV.map(item => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`subnav-link ${active ? 'bg-accent-100 text-primary-700' : 'text-white'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
