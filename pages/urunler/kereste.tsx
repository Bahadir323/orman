import Head from "next/head";
export default function Page() {
  const kereste = [
    {
      src: "/teak.jpg",
      title: "Teak Kereste",
      desc: " dayanıklılık, estetik ve kullanım kolaylığını bir araya getiren dünyanın en değerli ağaç türlerinden biridir. Hem iç hem de dış mekan uygulamalarında üstün performansı ve şıklığı ile öne çıkan Teak, yacht, tekne, gemi güverteleri, mimari projeler ve mobilya üretimine kadar geniş bir kullanım alanı sunar.  ",
    },
    {
      src: "/irokoo.jpg",
      title: "İroko Tomruk",
      desc: " Yapısal dayanıklılığı, suya ve dış etkenlere karşı yüksek direnci sayesinde yacht, tekne, gemi güverteleri, inşaat, mobilya ve dış mekan uygulamaları gibi birçok alanda yoğun olarak kullanılmaktadır. Bahar Orman Ürünleri olarak, doğanın sunduğu bu eşsiz materyali en iyi kalite standartlarıyla sizlere sunuyoruz. ",
    },
    {
      src: "/sepellii.jpg",
      title: "Sapelli Kereste",
      desc: " estetik görünümü ve üstün dayanıklılığı ile yacht, tekne, gemi güverteleri, lüks mobilya, kaplama ve inşaat sektörlerinin vazgeçilmezlerinden biridir. Zarif damar yapısı ve sıcak tonları sayesinde projelere değer katar.",
    },
    {
      src: "/ayous.jpg",
      title: "Ayous Kereste",
      desc: "  Afrika’nın tropikal ormanlarında yetişen Ayous ağacı, özellikle iç mekân kaplamaları, sauna uygulamaları ve mobilya imalatında eşsiz avantajlar sunuyor.",
    },
    {
      src: "/sipooo.jpg",
      title: "Sipo Kereste",
      desc: "Afrika ormanlarının sunduğu en kaliteli ve estetik malzemelerden biridir. Uzun ömürlü, güçlü ve şık bir çözüm arıyorsanız, Sipo tam aradığınız ağaç türü.",
    },
    {
      src: "/acajouu.jpg",
      title: "Acajou Kereste",
      desc: " Zarafeti ve performansı bir arada sunan özel bir malzemedir. Doğal güzelliği ve güçlü yapısıyla, prestijli projelerin vazgeçilmez tercihlerinden biridir.",
    },
    {
      src: "/mese.jpg",
      title: "Meşe Kereste",
      desc: "  dayanıklılığı, doğal görünümü ve işlenebilirliği ile mimariden marangozluğa kadar birçok sektörde vazgeçilmez bir malzeme haline gelmiştir.",
    }

  ];

  return (
    <>
      <Head>
        <title>Kereste | Lignum A.Ş.</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Kereste</h1>
        <p className="mt-3 text-gray-700">
          Kurutulmuş, standardize edilmiş ölçülerde yüksek kalite kereste
          üretimi.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {kereste.map((item, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white p-4 text-center
                ${i === 6 ? "md:col-start-2" : ""}`}>
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
  );
}
