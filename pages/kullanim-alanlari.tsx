import Head from "next/head";
import Image from "next/image";

const areas = [
  {
    title: "İnşaat Sektörü",
    description:
      "Dayanıklı yapısı sayesinde inşaat sektöründe geniş kullanım alanı bulur.",
    image: "/areas/insaat.jpg",
  },
  {
    title: "Mobilya Üretimi",
    description:
      "Estetik görünümüyle mobilya tasarımlarında sıkça tercih edilmektedir.",
    image: "/areas/mobilya.jpg",
  },
  {
    title: "Dekorasyon",
    description:
      "İç ve dış mekan dekorasyonunda doğal ve şık bir görünüm sağlar.",
    image: "/areas/dekorasyon.jpg",
  },
  {
    title: "Ambalaj & Palet",
    description:
      "Nakliye ve depolamada kullanılan paletler için güvenilir bir malzemedir.",
    image: "/areas/palet.jpg",
  },
];

export default function KullanimAlanlari() {
  return (
    <>
      <Head>
        <title>Kullanım Alanları | Bahar Timber</title>
        <meta
          name="description"
          content="Ahşap ürünlerimizin kullanım alanları hakkında bilgi edinin."
        />
      </Head>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Kullanım Alanları
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{area.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

