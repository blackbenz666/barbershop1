import Header from "@/components/Header";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Услуги</h1>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Стрижка
              </h2>
              <p className="text-gray-700">
                Профессиональная стрижка волос с учетом ваших пожеланий и
                особенностей лица.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Борода
              </h2>
              <p className="text-gray-700">
                Стрижка и укладка бороды любой сложности. Создание идеальной
                формы.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Укладка
              </h2>
              <p className="text-gray-700">
                Стильная укладка волос с использованием профессиональных
                средств.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

