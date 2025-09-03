import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-professional-blue to-trust-green text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-roboto font-bold mb-6">
            Ремонт и обслуживание газовых котлов
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Профессиональный сервис с гарантией качества и безопасности
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-emergency-red hover:bg-red-700 text-white px-8 py-4 text-lg font-medium"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Вызвать мастера
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-professional-blue px-8 py-4 text-lg"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Расчет стоимости
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7</h3>
              <p className="opacity-90">Круглосуточная поддержка</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
              <p className="opacity-90">До 3 лет на работы</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="opacity-90">100% решенных задач</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр работ с газовым оборудованием
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ремонт котлов",
                description: "Диагностика и устранение неисправностей любой сложности",
                price: "от 2 500 ₽",
                icon: "Wrench"
              },
              {
                title: "Техобслуживание",
                description: "Плановое обслуживание для безопасной работы",
                price: "от 3 000 ₽",
                icon: "Settings"
              },
              {
                title: "Установка котлов",
                description: "Монтаж и подключение нового оборудования",
                price: "от 15 000 ₽",
                icon: "Home"
              },
              {
                title: "Чистка системы",
                description: "Промывка теплообменника и системы отопления",
                price: "от 4 500 ₽",
                icon: "Droplets"
              },
              {
                title: "Замена запчастей",
                description: "Оригинальные детали с гарантией качества",
                price: "от 1 500 ₽",
                icon: "Cog"
              },
              {
                title: "Экстренный вызов",
                description: "Аварийные работы в любое время суток",
                price: "от 4 000 ₽",
                icon: "Zap"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-professional-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon name={service.icon as any} className="text-professional-blue" size={24} />
                    </div>
                    <Badge variant="secondary" className="bg-trust-green text-white">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-roboto">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-professional-blue hover:bg-blue-700">
                    Заказать услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Лицензии и сертификаты
            </h2>
            <p className="text-xl text-gray-600">
              Подтвержденная квалификация и право на выполнение газовых работ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/df47c4f2-ec7b-48ba-b656-24e877a83c04.jpg" 
                alt="Сертификаты безопасности" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-trust-green/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name="FileCheck" className="text-trust-green" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-roboto mb-2">
                    Лицензия Ростехнадзора
                  </h3>
                  <p className="text-gray-600">
                    Официальное разрешение на проведение работ повышенной опасности с газовым оборудованием
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-professional-blue/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" className="text-professional-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-roboto mb-2">
                    Сертификат безопасности
                  </h3>
                  <p className="text-gray-600">
                    Подтверждение соответствия требованиям безопасности при работе с газом
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Наши мастера
            </h2>
            <p className="text-xl text-gray-600">
              Опытные специалисты с профильным образованием
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <img 
                  src="/img/80675d42-36c7-4a68-bcbf-a074c7d37248.jpg" 
                  alt="Мастер газового оборудования" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold font-roboto mb-2">Алексей Иванов</h3>
                <p className="text-gray-600 mb-2">Ведущий специалист</p>
                <p className="text-sm text-gray-500 mb-4">Стаж работы: 15 лет</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Vaillant</Badge>
                  <Badge variant="secondary">Bosch</Badge>
                  <Badge variant="secondary">Baxi</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold font-roboto mb-2">Дмитрий Петров</h3>
                <p className="text-gray-600 mb-2">Инженер по ремонту</p>
                <p className="text-sm text-gray-500 mb-4">Стаж работы: 12 лет</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Navien</Badge>
                  <Badge variant="secondary">Ariston</Badge>
                  <Badge variant="secondary">Viessmann</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold font-roboto mb-2">Михаил Сидоров</h3>
                <p className="text-gray-600 mb-2">Техник-диагност</p>
                <p className="text-sm text-gray-500 mb-4">Стаж работы: 8 лет</p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Buderus</Badge>
                  <Badge variant="secondary">Protherm</Badge>
                  <Badge variant="secondary">Wolf</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нашей работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Елена Михайлова",
                text: "Отличная работа! Мастер приехал быстро, диагностировал проблему и устранил её за час. Котел работает как новенький.",
                rating: 5,
                date: "2 недели назад"
              },
              {
                name: "Андрей Козлов",
                text: "Профессиональный подход и разумные цены. Делали техобслуживание котла Baxi - всё выполнили качественно.",
                rating: 5,
                date: "1 месяц назад"
              },
              {
                name: "Ирина Васильева",
                text: "Спасибо за оперативность! Вызывала мастера в выходной день - приехал через час и починил котел.",
                rating: 5,
                date: "3 недели назад"
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-professional-blue/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-professional-blue" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-sm">{review.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-professional-blue text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold mb-4">
              Контакты
            </h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
              <p className="opacity-90">+7 (905) 987-65-43</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@gasservice.ru</p>
              <p className="opacity-90">service@gasservice.ru</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">ул. Газовиков, д. 15</p>
              <p className="opacity-90">Москва, 123456</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
              <p className="opacity-90">Пн-Вс: 8:00-22:00</p>
              <p className="opacity-90">Аварийная служба: 24/7</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-emergency-red hover:bg-red-700 text-white px-8 py-4 text-lg font-medium mr-4"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Вызвать мастера сейчас
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-professional-blue px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}