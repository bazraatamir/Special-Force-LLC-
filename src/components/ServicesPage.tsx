import React from "react";
import {
  Camera,
  Wrench,
  Shield,
  Zap,
  Bell,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {ImageWithFallback} from "./figma/ImageWithFallback";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({onNavigate}: ServicesPageProps) {
  const mainServices = [
    {
      icon: Shield,
      title: "Харуул хамгаалалт",
      description:
        "Өдөр шөнөгүй ажилладаг төв пульт, шуурхай бүлэг, гэрээт харуулаас бүрдсэн цогц хамгаалалт. Галын, хулгайн болон бусад аюулын дохиог хүлээн авч шуурхай арга хэмжээ авна.",
      features: [
        "24/7 төв пультын хяналт",
        "Шуурхай бүлгийн дуудлага",
        "Гэрээт харуул",
        "Дохиоллын бүртгэл, тайлан",
        "Гэрээт обьектод тогтмол үзлэг",
      ],
      pricing: "Гэрээгээр",
      image:
        "/products/ir-beam.webp",
    },
    {
      icon: Zap,
      title: "Дохиолол суурилуулалт",
      description:
        "Хулгайн болон галын дохиоллын системийг таны байранд тохируулан төлөвлөж суурилуулна. Төв пульттэй холбож 24/7 хяналтад оруулах боломжтой.",
      features: [
        "Газар дээрх үзлэг, зөвлөгөө",
        "Хулгайн дохиоллын систем",
        "Галын дохиоллын систем",
        "Төв пульттэй холболт",
        "Ашиглах заавар, сургалт",
      ],
      pricing: "Үнэ тохиролцоно",
      image:
        "/products/pima-keypad.webp",
    },
    {
      icon: Camera,
      title: "Хяналтын камер суурилуулалт",
      description:
        "Орон сууц, аж ахуйн нэгжийн байранд хяналтын камерыг мэргэжлийн түвшинд суурилуулна. Камерын байршил, бичлэг хадгалалт, алсын хандалтыг оновчтой тохируулна.",
      features: [
        "Камерын байршлын төлөвлөлт",
        "Кабелийн мэргэжлийн угсралт",
        "NVR/DVR бичлэгийн тохиргоо",
        "Гар утсаар алсаас хянах тохиргоо",
        "Систем ашиглах заавар",
      ],
      pricing: "Үнэ тохиролцоно",
      image:
        "/products/camera-bullet.webp",
    },
    {
      icon: Bell,
      title: "Галын дохиолол, зарлан мэдээлэх систем",
      description:
        "Утааны мэдрэгч, гар дуудлагын товч, сирен, галын дохиоллын самбар болон байгууллагын зарлан мэдээлэх системийг төлөвлөж суурилуулна.",
      features: [
        "Галын дохиоллын удирдлагын самбар",
        "Утаа, дулааны мэдрэгч",
        "Гар дуудлагын товч, гэрэлт сирен",
        "Таазны болон хананы чанга яригч",
        "Алсын дэлгэц, төлөв хянах",
      ],
      pricing: "Үнэ тохиролцоно",
      image:
        "/products/fire-panel.webp",
    },
    {
      icon: Wrench,
      title: "Засвар үйлчилгээ",
      description:
        "Суурилуулсан систем тань тасралтгүй ажиллахын тулд тогтмол үзлэг, засвар үйлчилгээ хийж, асуудлыг гарахаас нь өмнө урьдчилан сэргийлнэ.",
      features: [
        "Тогтмол системийн үзлэг",
        "Камер, мэдрэгчийн цэвэрлэгээ, тохируулга",
        "Програм хангамжийн шинэчлэлт",
        "Кабель, холболтын шалгалт",
        "Яаралтай засвар",
      ],
      pricing: "Гэрээгээр",
      image:
        "/products/fire-repeater.webp",
    },
  ];

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl mb-6'>Бидний үйлчилгээ</h1>
            <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
              Суурилуулалтаас эхлээд 24/7 хяналт хүртэлх аюулгүй байдлын цогц
              шийдэл
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-16'>
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className='w-full lg:w-1/2'>
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className='rounded-xl shadow-lg w-full h-[400px] object-cover'
                  />
                </div>

                {/* Content */}
                <div className='w-full lg:w-1/2'>
                  <div className='bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
                    <service.icon className='h-8 w-8 text-white' />
                  </div>

                  <h2 className='text-3xl text-gray-900 mb-4'>
                    {service.title}
                  </h2>

                  <p className='text-gray-600 mb-6'>{service.description}</p>

                  <ul className='space-y-3 mb-6'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start gap-3'>
                        <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                        <span className='text-gray-700'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className='flex items-center gap-4 flex-wrap'>
                    <div className='text-2xl text-[#1e3a8a]'>
                      {service.pricing}
                    </div>
                    <button
                      onClick={() => onNavigate("contact")}
                      className='bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-colors flex items-center gap-2'>
                      Үнийн санал авах
                      <ArrowRight className='h-5 w-5' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>Үйлчилгээний багцууд</h2>
            <p className='text-lg text-gray-600'>
              Өөрийн хэрэгцээнд хамгийн сайн тохирох багцаа сонгоорой
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Basic Package */}
            <div className='bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200'>
              <h3 className='text-2xl text-gray-900 mb-2'>Үндсэн</h3>
              <div className='text-4xl text-[#1e3a8a] mb-6'>
                Тохиролцоно
                <span className='text-lg text-gray-500'> /нэг удаа</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>4 камер суурилуулалт</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Энгийн NVR систем</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Дотоод хадгалалт</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Гар утасны аппаар хандах</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>1 жилийн баталгаа</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate("contact")}
                className='w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors'>
                Захиалах
              </button>
            </div>

            {/* Pro Package */}
            <div className='bg-white rounded-xl p-8 shadow-xl border-2 border-[#1e3a8a] relative'>
              <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e3a8a] text-white px-4 py-1 rounded-full text-sm'>
                Хамгийн эрэлттэй
              </div>
              <h3 className='text-2xl text-gray-900 mb-2'>Мэргэжлийн</h3>
              <div className='text-4xl text-[#1e3a8a] mb-6'>
                Тохиролцоно
                <span className='text-lg text-gray-500'> /нэг удаа</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>8 камер суурилуулалт</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Ахисан түвшний NVR систем</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Клауд хадгалалт (1 жил)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Хиймэл оюунт хөдөлгөөн илрүүлэлт</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Нэн тэргүүний дэмжлэг</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>2 жилийн баталгаа</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate("contact")}
                className='w-full bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-colors'>
                Захиалах
              </button>
            </div>

            {/* Enterprise Package */}
            <div className='bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200'>
              <h3 className='text-2xl text-gray-900 mb-2'>Байгууллага</h3>
              <div className='text-4xl text-[#1e3a8a] mb-6'>
                Захиалгат
                <span className='text-lg text-gray-500'> /үнийн санал</span>
              </div>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Хязгааргүй тооны камер</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Байгууллагын NVR систем</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Хязгааргүй клауд хадгалалт</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Хиймэл оюунт дүн шинжилгээ</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>24/7 хяналтын үйлчилгээ</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-green-500 shrink-0 mt-0.5' />
                  <span className='text-gray-700'>Насан туршийн дэмжлэг</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate("contact")}
                className='w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors'>
                Холбогдох
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#1e3a8a] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl mb-4'>Танд тусгай шийдэл хэрэгтэй юу?</h2>
          <p className='text-xl text-blue-100 mb-8'>
            Манай баг таны шаардлагад тусгайлан тохирсон хамгаалалтын системийг
            төлөвлөж өгнө.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className='bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors'>
            Зөвлөгөө авах
          </button>
        </div>
      </section>
    </div>
  );
}
