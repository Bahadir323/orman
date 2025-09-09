export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container max-w-7xl py-10 text-sm text-gray-700 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary-700 text-white grid place-items-center font-bold">L</div>
            <span className="font-semibold">Lignum A.Ş.</span>
          </div>
          <p className="mt-3 text-gray-600">Orman ürünlerinde sürdürülebilir, güvenilir ve yenilikçi çözümler.</p>
        </div>
        <div>
          <h4 className="font-semibold">İletişim</h4>
          <ul className="mt-2 space-y-1">
            <li>Tel: 0 (850) 000 00 00</li>
            <li>E-posta: info@lignum.com</li>
            <li>Adres: İstanbul, Türkiye</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Hızlı Linkler</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="/kurumsal">Kurumsal</a></li>
            <li><a href="/urunler">Ürünler</a></li>
            <li><a href="/iletisim">İletişim</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-xs text-gray-500">
        <div className="container max-w-7xl flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lignum A.Ş. Tüm hakları saklıdır.</span>
          <div className="flex gap-4">
            <a href="#">KVKK</a>
            <a href="#">Gizlilik</a>
            <a href="#">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
