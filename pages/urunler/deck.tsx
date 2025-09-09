import Head from 'next/head'
export default function Page() {
  return (
    <>
      <Head>
        <title>Deck | Lignum A.Ş.</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Deck</h1>
        <p className="mt-3 text-gray-700">Dış mekân kullanımına uygun, dayanıklı deck kaplama çözümleri.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-2xl border p-5 bg-white">
              <div className="aspect-[4/3] bg-primary-100 rounded-xl mb-3" />
              <h4 className="font-semibold">Deck Ürün #{i}</h4>
              <p className="text-sm text-gray-600 mt-1">Örnek teknik özellik ve kısa açıklama.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
