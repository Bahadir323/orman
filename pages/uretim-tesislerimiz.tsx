import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Üretim Tesislerimiz | Lignum A.Ş.</title>
      </Head>

      {/* 1. Bölüm - Resim solda, yazı sağda */}
      <div className='bg-primary-700 min-h-screen'>
      <div className="container max-w-7xl py-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Resim */}
        <img
          src="/factory.jpg"
          alt="Üretim Tesisi"
          className="w-full h-72 object-cover rounded-2xl shadow-md"
        />
        {/* Yazılar */}
        <div>
          <h1 className="text-3xl md:text-4xl text-white font-bold">Üretim Tesislerimiz</h1>
          <p className="mt-3 text-white leading-relaxed">
            Modern teknolojilerle donatılmış makinelerimiz, hassas kesim yöntemleri
            ve titizlikle seçilmiş kaliteli tomruklarımızla oluşturduğumuz kontrplak
            üretim hattımız; mimari yapılardan endüstriyel projelere kadar geniş bir
            kullanım alanında maksimum dayanıklılık, esneklik ve estetik bütünlük sunar.
            Her bir katmanı, usta işçiliğin yanında tutkuyu da yansıtarak özenle bir
            araya getiriyor, ortaya hem güvenilir hem de uzun ömürlü çözümler çıkarıyoruz.
          </p>
        </div>
      </div>

      {/* 2. Bölüm - Yazı solda, resim sağda */}
      <div className="container max-w-7xl py-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Yazılar */}
        <div className="order-2 md:order-1">
          <p className="mt-3 text-white leading-relaxed">
            Burada üretim makinelerimiz hakkında bilgi verebilirsiniz. Modern hatlarımız,
            yüksek verimlilik ve kaliteyi bir arada sunmaktadır.
          </p>
        </div>
        {/* Resim */}
        <img
          src="/machines.jpg"
          alt="Üretim Makinaları"
          className="order-1 md:order-2 w-full h-72 object-cover rounded-2xl shadow-md"
        />
      </div>
       <div className="container max-w-7xl py-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Resim */}
        <img
          src="/factory.jpg"
          alt="Üretim Tesisi"
          className="w-full h-72 object-cover rounded-2xl shadow-md"
        />
        {/* Yazılar */}
        <div>
          
          <p className="mt-3 text-white leading-relaxed">
            İç ve dış mekânlar için doğal zarafeti, dayanıklılıkla buluşturduğumuz deck ve parke üretim tesisimiz, projelerinize prestij katıyor. Teak, Iroko ve Ayous gibi yüksek dayanıklılığa sahip egzotik ağaçlar, estetik yüzeyler hâline geliyor.
          </p>
            
        </div>
      </div>
      </div>
    </>
  )
}

