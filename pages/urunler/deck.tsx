import Head from 'next/head'
export default function Page() {
  const deck = [
    {
      src: "/teakkk.jpg",
      title:"Teak Deck",
      desc:" Sahip olduğu doğal yağlar sayesinde suya, neme, böceklenmeye ve çürümeye karşı son derece dirençlidir. Bu özellikleri ile Teak Deck, Yacht, tekne, gemi güverteleri, havuz kenarları, teraslar, yat güverteleri ve bahçe zeminleri için en ideal seçimdir."
      
    },
    {
      src: "/irokoooo.jpg",
      title:"İroko Deck",
      desc:" Afrika’nın tropikal bölgelerinde yetişen Iroko ağacından üretilen, dış mekânlarda kullanılan yüksek dayanıklılığa sahip ahşap deck ürünüdür. “Afrika deck” olarak da bilinen Iroko, teak ağacına benzer özellikleri ile dış mekân projelerinde ekonomik ve uzun ömürlü bir alternatif olarak öne çıkar."
    },
    {
      src: "/ayousss.jpg",
      title:"Ayous Deck",
      desc:"  Batı Afrika kökenli Ayous (Triplochiton scleroxylon) ağacından üretilen, hafif yapısı ve estetik görünümüyle dış mekânlarda tercih edilen kaliteli bir deck türüdür. Düz damarlı yapısı ve açık renk tonları sayesinde modern tasarımlara doğal bir sıcaklık ve zarafet kazandırır."
    },

  ]
  return (
    <>
      <Head>
        <title>Deck | Lignum A.Ş.</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Deck</h1>
        <p className="mt-3 text-gray-700">Dış mekân kullanımına uygun, dayanıklı deck kaplama çözümleri.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {deck.map((item , i) => (
            <div key={i} className="rounded-2xl border p-5 bg-white">
              <img 
                src={item.src} 
                alt={item.title}
                className="object-contain w-full h-72 rounded-lg" 
              />
              <h4 className="font-semibold text-lg mt-3 text-gray-800">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
