import Header from "@/components/Header";

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Наши клиенты</h1>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Отзывы
              </h2>
              <p className="text-gray-700 mb-4">
                Здесь будут отображаться отзывы наших клиентов о качестве
                наших услуг.
              </p>
              <p className="text-gray-600 italic">
                "Лучший барбершоп в городе!" - Иван П.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Галерея работ
              </h2>
              <p className="text-gray-700">
                Фотографии наших работ и довольных клиентов. Скоро здесь будет
                размещена галерея.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

