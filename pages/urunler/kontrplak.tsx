import Head from 'next/head'
export default function Page() {
  const kontrplak = [
    {
      src: "/hus.jpg",
      title:"Huş Kontrplak",
      desc:" İnce ve düzgün dokusu, yüksek dayanımı ve estetik görünümü ile mobilyadan inşaata, denizcilikten otomotive kadar pek çok sektörde vazgeçilmez bir malzeme haline gelmiştir."
    },
    {
      src:"/okoume.jpg",
      title:"Okoume Kontrplak",
      desc:" Büyük projeler için ideal olan ürün, RINA sertifikası sayesinde uluslararası kalite ve güvenlik standartlarına uygunluğunu kanıtlar."
    },
    {
      src:"/ilomba.jpg",
      title:"İlomba Kontrplak",
      desc:"  Afrika’nın tropikal ormanlarında doğal olarak yetişen ve yoğun yapısıyla bilinen değerli bir orman ürünüdür. Bu ağaçtan elde edilen katmanlı yapı, kontrplak sektöründe yüksek mukavemetli, uzun ömürlü ve uygulama dostu bir çözüm sunar. Çapraz katman teknolojisiyle üretilen bu kontrplak, sağlam ve uzun ömürlü yapısıyla pek çok inşaat ve dekorasyon projesinde tercih edilir."
    },

  ]
  return (
    <>
      <Head>
        <title>Kontrplak | Lignum A.Ş.</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Kontrplak</h1>
        <p className="mt-3 text-gray-700">Endüstriyel kullanım için farklı kalınlık ve kalite sınıflarında kontrplak.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {kontrplak.map((item , i) => (
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
