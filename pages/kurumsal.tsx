import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Kurumsal - Bahar Orman Ürünleri</title>
      </Head>

      {/* Hero Section */}
      <div
        className="relative text-white"
        style={{
          backgroundImage: "url('/bahar.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "350px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="relative container max-w-7xl py-20">
          <h2 className="text-5xl font-bold">Kurumsal</h2>
          <p className="mt-4 text-white/90">
            Bahar Orman Ürünleri, 1958 yılından bu yana orman ürünleri alanında
            faaliyet gösteren köklü bir aile şirketidir.
          </p>
        </div>
      </div>

      {/* İçerik */}
      <section className="container max-w-7xl py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Sol taraf - görseller */}
        <div className="space-y-6">
          <img
            src="/kurumsal.jpg"
            alt="Kurumsal"
            className="rounded-xl shadow-lg w-full h-[500px] object-cover animate-fadeInDown"
          />
          <img
            src="/kurumsal1.jpg"
            alt="Kurumsal-1"
            className="rounded-xl shadow-lg w-full h-[400px] object-cover animate-fadeInUp"
          />
        </div>

        {/* Sağ taraf - metin */}
        <div className="space-y-6 animate-fadeInRight">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            1958 yılından{" "}
            <span className="text-amber-600">bu yana köklerimize bağlı, geleceğe odaklı…</span>
          </h2>

          <p className="text-gray-700">
            <strong>Bahar Orman Ürünleri</strong>, bir aile şirketi olarak 1958
            yılında İstanbul Kartal’da kaplama üretimi ile sektöre adım atmıştır.
            Kuruluşumuzdan bugüne, ahşap sektöründeki uzmanlığımızı sürekli
            geliştirerek, geniş ürün yelpazemizle hem yurt içi hem yurt dışı
            pazarda güvenilir bir çözüm ortağı haline geldik.
          </p>

          <p className="text-gray-700">
            Bugün; <strong>Marin Kontrplak, Tomruk, Kereste, Doğal Masif Paneller,
            Ahşap Deck, Teak, Iroko ve Maun türü egzotik ağaç ürünlerinin</strong>{" "}
            ithalat, ihracat ve satışını başarıyla gerçekleştiren firmamız,
            büyük projelere malzeme sağlayan ve estetik çözümler sunan güçlü bir
            markadır.
          </p>

          <blockquote className="text-xl italic text-amber-700 font-semibold">
            “Ahşabın doğallığı, Bahar’ın güveniyle birleşiyor…”
          </blockquote>
        </div>
      </section>

      {/* Ek bilgi */}
      <section className="container max-w-7xl py-12 text-gray-700 space-y-6">
        <p>
          Bahar Orman Ürünleri, sektörde elli yılı aşan tecrübesi ile Asya, Afrika
          ve Amerika Kıtalarındaki çeşitli ülkelerden, tomruk ve kereste ithalatı
          yapmaktadır. Türkiye’de kendi alanında lider konumda olan, Bahar Orman
          Ürünleri yıllık yaklaşık 25,000 m³ tomruk ithalatı, 10,000 m³ kereste,
          10,000 m³ kontrplak imalat kapasitesine sahiptir.
        </p>

        <p>
          Tesisimiz üretim ve direkt olarak ithal edilen tomruk ve kerestelerle,
          üç ana grup olarak üretim yapmaktadır:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Yılda 10,000 m³ tomruk işleme tesisi</li>
          <li>
            Son sistem elektronik kontrollü tam otomatik İtalyan 9 adet
            750-900 m³ net kurutma kapasiteli fırın
          </li>
          <li>
            Üç hat son sistem Alman makineleri ile parke, lambri, sauna tahtası,
            deck ve türlü profil imalatı, 2 mm ve üstü ahşap üst katman (top
            layer) üretimi
          </li>
          <li>
            Son sistem tam otomatik İtalyan-Brezilya-Alman makinelerle Rina
            Certificate standartlarında marin kontrplak üretimi (yılda 10,000 m³)
          </li>
        </ul>
      </section>

      {/* Basit animasyon tanımları */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}
