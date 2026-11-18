import React from "react";
import {
  Shield,
  Wrench,
  Eye,
  Camera,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {ImageWithFallback} from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({onNavigate}: HomePageProps) {
  const features = [
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
    title: "Харуул хамгаалалт",
    description: "24/7 алсын хяналт болон дэмжлэг үйлчилгээ",
  },
];


  const products = [
    {
      image: "/products/camera-bullet.webp",
      title: "Гадна IP камер",
      description: "Ус, тоосны хамгаалалттай, шөнийн харалттай гадна камер",
      price: "Үнэ тохиролцоно",
    },
    {
      image: "/products/camera-dome.webp",
      title: "Дотор IP камер",
      description: "Оффис, дэлгүүр, агуулахад зориулсан дотор камер",
      price: "Үнэ тохиролцоно",
    },
    {
      image: "/products/pima-keypad.webp",
      title: "Хулгайн дохиолол",
      description: "PIMA дохиоллын систем, хөдөлгөөн, хаалга, ус, чимээ мэдрэгч",
      price: "Үнэ тохиролцоно",
    },
    {
      image: "/products/ir-beam.webp",
      title: "Периметр мэдрэгч",
      description: "Хашаа, хаалганы дагуух инфра улаан туяаны мэдрэгч",
      price: "Үнэ тохиролцоно",
    },
    {
      image: "/products/fire-panel.webp",
      title: "Хаяглагдсан галын дохиолол",
      description: "Мэдрэгч бүр өөрийн хаягтай тул гал гарсан яг байршлыг самбар дээр харуулна",
      price: "Үнэ тохиролцоно",
    },
    {
      image: "/products/fire-callpoint.webp",
      title: "Галын мэдрэгч, сирен",
      description: "Утаа, газ, дулаан, гал мэдрэгч, гар дуудлагын товч",
      price: "Үнэ тохиролцоно",
    },
  ];

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='  bg-cover bg-center text-white' style={{background:"url(/2.png)",backgroundSize:"cover", backgroundPosition:"center"}}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28'>
          <div className='grid md:grid-cols-3  gap-12 items-center' style={{height:"70vh" }}>
            <div style={{gridColumn:"1/3"}}>
              <h1 className='text-4xl lg:text-5xl mb-6' >
                Хяналтын камер болон дохиоллын систем суурилуулалт, борлуулалт
              </h1>
              <p className='text-xl text-blue-100 mb-8'>
                Special Force LLC нь харуул хамгаалалтын цогц үйлчилгээ үзүүлдэг, дохиолол хамгаалалт болон хяналтын камерын системийн суурилуулалт, шуурхай бүлгийн үйл ажиллагааг мэргэжлийн түвшинд явуулдаг компани юм.
              </p>
              <div className='flex flex-wrap gap-4'>
                <button 
                  onClick={() => onNavigate("contact")}
                  className='bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2'
                  style={{minWidth: 220}}>
                  Холбоо барих
                  <ArrowRight className='h-5 w-5' />
                </button>
                <button
                  onClick={() => onNavigate("products")}
                  className='bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20'
                  style={{minWidth: 220}}>
                  Бүтээгдэхүүн үзэх
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>
              Аюулгүй байдал – Хамгаалалтын цогц шийдэл
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Бид орчин үеийн камер, дохиолол, хамгаалалтын системийг мэргэжлийн түвшинд суурилуулж, байнгын арчилгаа үйлчилгээ болон 24/7 тасралтгүй хяналтыг үзүүлдэг. Таны аюулгүй байдлыг бид хангана.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow'>
                <div className='bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl text-gray-900 mb-3'>{feature.title}</h3>
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl text-gray-900 mb-4'>
              Онцлох бүтээгдэхүүн, үйлчилгээ
            </h2>
            <p className='text-lg text-gray-600'>
              Бидний санал болгож буй мэргэжлийн аюулгүй байдлын цогц шийдлүүд
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow'
                    style={{display: "flex", flexDirection: "column"}}>
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className='w-full h-48 object-cover'
                />
                <div className='p-6' style={{display: "flex", flexDirection: "column", flex: 1}}>
                  <h3 className='text-xl text-gray-900 mb-2'>
                    {product.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4' style={{flex: 1}}>
                    {product.description}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-lg text-[#1e3a8a]'>
                      {product.price}
                    </span>
                    <button
                      onClick={() => onNavigate("contact")}
                      className='bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#1e40af] transition-colors'>
                      Лавлах
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-8'>
            <button
              onClick={() => onNavigate("products")}
              className='bg-[#1e3a8a] text-white px-8 py-3 rounded-lg hover:bg-[#1e40af] transition-colors inline-flex items-center gap-2'>
              Бүгдийг үзэх
              <ArrowRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-[#1e3a8a] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <Lock className='h-16 w-16 mx-auto mb-6 text-blue-200' />
          <h2 className='text-3xl mb-4'>Өөрийн өмч хөрөнгөө хамгаалахад бэлэн үү?</h2>
          <p className='text-xl text-blue-100 mb-8'>
            Манай мэргэжилтнүүдээс үнэ төлбөргүй зөвлөгөө, үнийн санал аваарай.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <button
              onClick={() => onNavigate("contact")}
              className='bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors'>
              Үнийн санал авах
            </button>
            <button
              onClick={() => onNavigate("services")}
              className='bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20'>
              Үйлчилгээ үзэх
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
