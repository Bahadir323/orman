import Head from 'next/head'

export default function Page() {
  const tomruk = [
    { 
      src: "/sapelli.jpg", 
      title: "Sapelli Tomruk", 
      desc: "estetik görünümü, yüksek dayanıklılığı ve işlenebilir yapısıyla mobilya, iç mimari ve yapı sektörlerinin en gözde tropikal ağaç türlerinden biridir. Afrika ormanlarından özenle elde edilen bu özel tomruklar, hem teknik hem de görsel anlamda projelerin değerini artırır.  " 
    },
    { 
      src: "/iroko.jpg", 
      title: "İroko Tomruk", 
      desc: " Batı Afrika’nın zengin ormanlarında yetişen ve dayanıklılığı ile bilinen bir tropikal ağaç türüdür. Yüksek yoğunluğa sahip, altın sarısından zeytin kahverengisine uzanan renk tonlarıyla hem estetik hem de performans açısından üst düzey bir doğal malzemedir. " 
    },
    { 
      src: "/sipo.jpg", 
      title: "sipo Tomruk", 
      desc: " Batı ve Orta Afrika ormanlarında yetişen tropikal bir ağaç türüdür. Sapelli ile akraba olan bu ağaç, görünüm ve özellik bakımından oldukça benzerdir ancak daha açık tonlarda ve işlenmeye daha yatkındır. Renk olarak açık kahverengi ile pembemsi kahverengi arasında değişen tonlara sahiptir. Genellikle mobilya ve iç mimari uygulamalarda zarif görünümüyle öne çıkar." 
      
    },
    { 
      src: "/acajou.jpeg", 
      title: "Acajou Tomruk", 
      desc: " Acajou tomruk, egzotik ormanlardan gelen, hem zarif görünümü hem de üstün teknik özellikleriyle tanınan değerli bir sert ağaç türüdür. yacht, tekne, gemi güverteleri, mobilya ve yapı sektöründe lüksü ve doğallığı bir araya getirmek isteyenlerin ilk tercihlerindendir. Estetik görünümü, dayanıklılığı ve kolay işlenebilirliği sayesinde yüksek kalite iç mekân tasarımları için vazgeçilmez bir malzeme haline gelmiştir." 
    },
    
  ]

  return (
    <>
      <Head>
        <title>Bahar Orman Ürünleri</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Tomruk</h1>
        <p className="mt-3 text-gray-700">
          Çeşitli ağaç türlerinde, farklı çap ve boy seçenekleriyle tomruk tedariki.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6 ">
          {tomruk.map((item, i) => (
             <div 
              key={i} 
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white p-4 text-center
                ${i === 3 ? "md:col-start-2" : ""}`}
            >
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
