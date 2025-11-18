import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Добро пожаловать в наш Барбершоп
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Профессиональные услуги стрижки и ухода за бородой. Мы создаем
            стильные образы для настоящих джентльменов.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Качество
              </h2>
              <p className="text-gray-700">
                Используем только профессиональные инструменты и средства
                ведущих брендов.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Опыт
              </h2>
              <p className="text-gray-700">
                Мастера с многолетним опытом работы и постоянным повышением
                квалификации.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Комфорт
              </h2>
              <p className="text-gray-700">
                Уютная атмосфера и индивидуальный подход к каждому клиенту.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
