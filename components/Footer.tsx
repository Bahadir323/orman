export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-gray-300">
      <div className="container max-w-7xl py-10 text-sm text-gray-700 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3 ">
          <img src="/logo.png" alt="Logo" width={200} height={200} />
          </div>
          <p className="mt-3 text-gray-600 font-serif">İster büyük bir otel projesi, ister zarif bir villa, ister mimari detaylarla bezenmiş bir ofis alanı olsun…
            Bahar Orman Ürünleri, projenizin her adımında size doğru malzeme, doğru kalite ve doğru zamanlamayı garanti eder.</p>
        </div>
        <div>
          <h4 className="font-semibold">İletişim</h4>
          <ul className="mt-2 space-y-1">
            <li>Tel: 0 (216) 394 84 00</li>
            <li>E-posta: info@bahartimber.com</li>
            <li>Adres: İstanbul Deri Organize Sanayi Bölgesi Dolap Cd. No: 16 No: H16 / A Parsel 3.Yol Tuzla 34957</li>
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
          <span> Copyright © {new Date().getFullYear()} 2025 Bahar Orman Ürünleri San. ve Tic. A.Ş</span>
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
