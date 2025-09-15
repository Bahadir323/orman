import Head from "next/head";

export default function Page() {
  return (
    <div className="bg-green-200 min-h-screen">
      <Head>
        <title>İletişim | Bahar Timber</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          İletişim
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 transition-transform hover:scale-105">
            <div className="grid gap-5">
              <input
                className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Ad Soyad"
              />
              <input
                className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="E-posta"
              />
              <input
                className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Konu"
              />
              <textarea
                maxLength={500}
                className="px-4 py-3 rounded-xl border border-gray-300 min-h-[120px] max-h-[200px] resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                placeholder="Mesajınız"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-xl font-semibold text-white w-max bg-green-400 hover:bg-green-500 transition"
              >
                Gönder
              </button>
            </div>
          </form>

          {/* İletişim Bilgileri + Google Maps */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 flex flex-col gap-6">
            <div>
              <div className="font-semibold text-gray-700 mb-1">Adres</div>
              <div className="text-gray-500">
                İstanbul Deri Organize Sanayi Bölgesi Dolap Cd. No: 16 No: H16 /
                A Parsel 3.Yol Tuzla 34957
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Telefon</div>
              <div className="text-gray-500">+90 (216) 394 84 00</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">E-posta</div>
              <div className="text-gray-500">info@bahartimber.com</div>
            </div>

            {/* Google Maps */}
            <div className="w-full h-64 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6033.261758317694!2d29.35770605062618!3d40.879974097770926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad9034438720f%3A0x404540d6785a3963!2sBahar%20Orman%20%C3%9Cr%C3%BCnleri!5e0!3m2!1str!2sus!4v1746006981444!5m2!1str!2sus"
                width="100%"
                height="250"
                style={{ border: "0" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
