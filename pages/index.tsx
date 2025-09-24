import Head from "next/head";
import Slider from "../components/Slider";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  const foto = [
    { src: "/ak.png" },
    { src: "/sirenna.png" },
    { src: "/woodd.png" },
    { src: "/tann.png" },
    { src: "/gardenstar.png" },
    { src: "/nov.png" },
  ];
  const repeatedFoto = [...foto, ...foto].reverse();

  return (
    <>
      <Head>
        <title>Bahar Orman Ürünleri</title>
      </Head>

      <section className="bg-gradient-to-b from-primary-100 to-base">
        <div className="container max-w-7xl py-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-100 text-accent-700 px-3 py-1 text-xs font-medium">
              Doğa ile uyumlu üretim
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-primary-900">
              Orman ürünlerinde güvenilir çözüm ortağınız
            </h1>
            <p className="mt-3 text-gray-700">
              Tomruk, kereste, deck ve kontrplakta geniş ürün yelpazesi.
              Sürdürülebilir kaynaklardan, yüksek kalite standartlarıyla.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/urunler"
                className="inline-flex items-center rounded-xl bg-primary-700 text-white px-4 py-2 font-medium hover:bg-primary-900"
              >
                Ürünleri Gör
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center rounded-xl border border-primary-700 text-primary-700 px-4 py-2 font-medium hover:bg-primary-100"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
          <Slider />
        </div>
      </section>

      <section className="container max-w-7xl py-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Neden Bahar Orman Ürünleri?
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Misyonumuz",
              d: "Doğadan gelen en değerli kaynağı, sürdürülebilirlik ilkesiyle işleyerek; müşterilerimize kaliteli, estetik ve uzun ömürlü ahşap ürünleri sunmak. Tedarikten teslimata kadar her aşamada güvenilir, hızlı ve çözüm odaklı hizmet anlayışımızla sektöre değer katmak.",
            },
            {
              t: "Vizyonumuz",
              d: "Ahşap sektöründe yenilikçi ürün ve hizmetlerimizle fark yaratarak, Türkiye’nin ve Avrupa’nın önde gelen doğal ahşap tedarikçileri arasında yer almak; doğaya saygılı, kaliteli üretimi ilke edinmiş ve müşteri memnuniyetini ön planda tutan bir marka olarak global pazarda güçlü bir konuma ulaşmak.",
            },
            {
              t: "Tarihimiz",
              d: "Bahar Orman Ürünleri, 1958 yılından bu yana orman ürünleri alanında faaliyet gösteren köklü bir aile şirketidir. Ayous kereste başta olmak üzere, dünyanın farklı bölgelerinden ithal ettiği seçkin ağaç türlerini yüksek stok kapasitesiyle müşterilerine sunar.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="
                      rounded-2xl border border-gray-200 
                      p-6 bg-white shadow-md 
                      hover:shadow-xl hover:scale-105 
                      transition-all duration-300 ease-in-out
                      
                      "
            >
              <h3 className="font-semibold text-lg text-gray-800">{c.t}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full h-[150px] md:h-[200px] z-0 my-1 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[120%] -translate-y-1/2  -ml-[20%]">
            <Marquee speed={55} className="py-6 px-8">
              {repeatedFoto.map((item, index) => (
                <div className="flex items-center mx-8 gap-2" key={index}>
                  <img
                    src={item.src}
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <div
        className="relative text-white bg-no-repeat bg-center bg-cover mb-10 "
        style={{
          backgroundImage: "url('/bahar.jpg')",
          backgroundPosition: "center", // hem yatay hem dikey ortalı
          backgroundSize: "cover", // section'ı tamamen kaplar
        }}
      >
        {/* Overlay ekleyerek içerik okunaklı hale getiriyoruz */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative container max-w-7xl py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">Üretim Tesislerimiz</h3>
            <p className="mt-4 text-white/90">
              Modern makineler ve deneyimli ekiplerle yüksek hacimli, verimli
              üretim.
            </p>
            <Link
              href="/uretim-tesislerimiz"
              className="inline-flex mt-6 rounded-xl bg-white text-primary-700 px-6 py-3 font-medium"
            >
              Detaylar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
