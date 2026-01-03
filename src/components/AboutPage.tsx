import React from "react";
import {
  Shield,
  Camera,
  Wrench,
  Eye,
  Users,
  Award,
  Target,
  CheckCircle,
} from "lucide-react";
import {ImageWithFallback} from "./figma/ImageWithFallback";

export function AboutPage() {
  const services = [
    {
      icon: Camera,
      title: "Суурилуулалт",
      description: "Олон жилийн ажлын туршлагатай, албан ёсоор баталгаажсан инженер, техникчдийн баг суурилуулалтыг мэргэжлийн түвшинд гүйцэтгэнэ.",
    },
    {
      icon: Wrench,
      title: "Засвар үйлчилгээ",
      description: "Тогтмол засвар үйлчилгээ болон системийн шинэчлэлт",
    },
    {
      icon: Eye,
      title: "харуул хамгаалалт",
      description: "24/7 алсын хяналт болон дэмжлэг үйлчилгээ",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "24/7 тасралтгүй шуурхай үйлчилгээ",
      description:
        "Special Force LLC нь өдөр шөнөгүй, 7 хоногийн 24 цаг тасралтгүй ажиллах шуурхай албатай бөгөөд танд найдвартай хамгаалалт өгнө.",
    },
    {
      icon: Users,
      title: "Үйлчлүүлэгч төвтэй хандлага",
      description:
        "Бид үйлчлүүлэгчийн хэрэгцээ, хүсэл сонирхлыг нэн тэргүүнд тавьж, уян хатан, оновчтой шийдлийг санал болгодог.",
    },
    {
      icon: Award,
      title: "Хууль эрх зүйн бүрэн дагуу ажиллах",
      description:
        "Манай компани нь шаардлагатай бүх тусгай зөвшөөрөл, гэрчилгээтэй бөгөөд салбарын дүрэм журам, стандартыг чанд мөрддөг",
    },
    {
      icon: Target,
      title: "Урт хугацааны итгэлцэл, хамтын ажиллагаа",
      description:
        "Бид зөвхөн нэг удаагийн үйлчилгээ үзүүлэх бус, үйлчлүүлэгчидтэйгээ урт хугацаанд хамтран ажиллахыг эрхэмлэдэг.",
    },
  ];

  const stats = [
    {number: "1000+", label: "Суурилуулсан систем"},
    {number: "10+", label: "Туршлага"},
    {number: "99%", label: "Сэтгэл ханамжийн түвшин"},
    {number: "24/7", label: "Харуул хамгаалалт"},
  ];

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl mb-6'>Special Force LLC </h1>
            <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
              2016 оноос хойш мэргэжлийн дохиолол, хамгаалалт, хяналтын камерын шийдлийг тасралтгүй хүргэж байна
            </p>
          </div>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl text-gray-900 mb-6'>Бидний Түүх</h2>
              <div className='space-y-4 text-gray-600'>
                <p>
                  Special Force LLC нь 2016 онд байгуулагдсан бөгөөд харуул хамгаалалт, дохиолол хамгаалалт, хяналтын камерийн систем зэрэг аюулгүй байдлын цогц үйлчилгээ үзүүлдэг мэргэжлийн компани юм.
                </p>
                <p>
                  Бид орчин үеийн техник технологи, мэргэжлийн боловсон хүчинд тулгуурлан хэрэглэгчдэд хурдан шуурхай, найдвартай үйлчилгээг 24/7 цагийн турш үзүүлдэг.
Манай компани өөрийн тоног төхөөрөмжийг импортлон оруулж ирдэг бөгөөд хэрэглэгчдийн хэрэгцээнд нийцсэн уян хатан шийдэл, өндөр чанартай бүтээгдэхүүнээр үйлчилдэг нь бидний гол давуу тал юм.

                </p>
                <p>
                  Special Force LLC нь үйлчлүүлэгчдийн аюулгүй байдлыг дээд зэргээр хангах, тасралтгүй хөгжиж дэвших зорилготой ажилладаг.
                </p>
              </div>
            </div>
            <div className='relative'>
              <ImageWithFallback
                src='https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjQ5NDI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                alt='Security camera installation'
                className='rounded-xl shadow-xl w-full h-[400px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl text-[#1e3a8a] mb-2'>
                  {stat.number}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>Бид хэрхэн ажилладаг вэ?</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Таны шаардлагад нийцсэн бүтээгдэхүүн болон үйлчилгээ
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow'>
                <div className='bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6'>
                  <service.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl text-gray-900 mb-3'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>Яагаад Special Force LLC компанийг сонгох ёстой вэ</h2>
            
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {values.map((value, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow'>
                <div className='bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <value.icon className='h-8 w-8 text-[#1e3a8a]' />
                </div>
                <h3 className='text-lg text-gray-900 mb-2'>{value.title}</h3>
                <p className='text-sm text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>How We Work</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our streamlined process ensures quality results every time
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-6'>
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Free site survey and needs assessment",
              },
              {
                step: "02",
                title: "Design",
                desc: "Custom security system design and quote",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Professional installation by certified techs",
              },
              {
                step: "04",
                title: "Support",
                desc: "Ongoing maintenance and 24/7 monitoring",
              },
            ].map((item, index) => (
              <div key={index} className='relative'>
                <div className='bg-gray-50 rounded-xl p-6 h-full'>
                  <div className='text-4xl text-[#1e3a8a] opacity-20 mb-4'>
                    {item.step}
                  </div>
                  <h3 className='text-xl text-gray-900 mb-2'>{item.title}</h3>
                  <p className='text-gray-600 text-sm'>{item.desc}</p>
                  <CheckCircle className='h-6 w-6 text-green-500 absolute top-6 right-6' />
                </div>
                {index < 3 && (
                  <div className='hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300' />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#1e3a8a] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl mb-4'>Ready to Get Started?</h2>
          <p className='text-xl text-blue-100 mb-8'>
            Contact us today for a free consultation and see how we can secure
            your property.
          </p>
          <button className='bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors'>
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
