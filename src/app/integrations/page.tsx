import Header from "@/components/Header";

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Интеграции
          </h1>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Онлайн запись
              </h2>
              <p className="text-gray-700">
                Интеграция с системами онлайн-бронирования для удобства наших
                клиентов.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Партнеры
              </h2>
              <p className="text-gray-700">
                Наши партнеры и интеграции с другими сервисами для расширения
                возможностей.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                API
              </h2>
              <p className="text-gray-700">
                Технические интеграции и API для разработчиков. Скоро здесь
                будет размещена документация.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

