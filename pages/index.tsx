import Head from 'next/head'
import Slider from '../components/Slider'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bahar Orman Ürünleri</title>
      </Head>

      <section className="bg-gradient-to-b from-primary-100 to-base">
        <div className="container max-w-7xl py-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-700 px-3 py-1 text-xs font-medium">Doğa ile uyumlu üretim</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-primary-900">Orman ürünlerinde güvenilir çözüm ortağınız</h1>
            <p className="mt-3 text-gray-700">Tomruk, kereste, deck ve kontrplakta geniş ürün yelpazesi. Sürdürülebilir kaynaklardan, yüksek kalite standartlarıyla.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/urunler" className="inline-flex items-center rounded-xl bg-primary-700 text-white px-4 py-2 font-medium hover:bg-primary-900">Ürünleri Gör</Link>
              <Link href="/iletisim" className="inline-flex items-center rounded-xl border border-primary-700 text-primary-700 px-4 py-2 font-medium hover:bg-primary-100">İletişime Geç</Link>
            </div>
          </div>
          <Slider />
        </div>
      </section>

      <section className="container max-w-7xl py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Neden Bahar Orman Ürünleri?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Sürdürülebilir Kaynak', d: 'Sertifikalı ormanlardan sorumlu tedarik.'},
            { t: 'Tutarlı Kalite', d: 'Sıkı kalite kontrol ve standart ölçüler.'},
            { t: 'Zamanında Teslim', d: 'Optimum lojistik ve güçlü stok yönetimi.'},
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border p-6 bg-white">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-700 text-white">
        <div className="container max-w-7xl py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Üretim Tesislerimiz</h3>
            <p className="mt-2 text-white/90">Modern makineler ve deneyimli ekiplerle yüksek hacimli, verimli üretim.</p>
            <Link href="/uretim-tesislerimiz" className="inline-flex mt-4 rounded-xl bg-white text-primary-700 px-4 py-2 font-medium">Detaylar</Link>
          </div>
          <div className="rounded-2xl bg-white/10 aspect-[16/9]" />
        </div>
      </section>
    </>
  )
}
