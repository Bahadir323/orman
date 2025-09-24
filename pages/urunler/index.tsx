import Head from "next/head";
import Link from "next/link";

const CARDS = [
  {
    href: "/urunler/tomruk",
    title: "Tomruk",
    desc: "Yacht, tekne, gemi güverteleri ve dış mekân mobilya projelerinde doğallığı estetikle buluşturarak benzersiz bir prestij sunar.",
  },
  {
    href: "/urunler/kereste",
    title: "Kereste",
    desc: "Dayanıklılığı ve çok yönlü kullanım alanlarıyla inşaat, mobilya ve dış mekân projelerinde güvenle tercih edilen doğal bir malzemedir.",
  },
  {
    href: "/urunler/deck",
    title: "Deck",
    desc: "Estetik tasarımı ve yüksek dayanıklılığıyla deck, dış mekânlarda şıklığı ve konforu bir araya getirerek yaşam alanlarınıza prestij katar.",
  },
  {
    href: "/urunler/kontrplak",
    title: "Kontrplak",
    desc: "Çok katmanlı yapısıyla sağlam, hafif ve esnek bir malzeme olan kontrplak; inşaat, mobilya ve dekorasyonda güvenle kullanılır.",
  },
];

export default function Urunler() {
  return (
    <>
      <Head>
        <title>Ürünler | Lignum A.Ş.</title>
      </Head>
      <section className="container max-w-7xl py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Ürünler</h1>
        <p className="mt-3 text-gray-700">
          Aşağıdan ihtiyacınız olan ürün grubunu seçin.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="rounded-2xl border p-5 hover:shadow-soft bg-white"
            >
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
