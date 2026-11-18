import React from "react";
import {useState} from "react";
import {Phone, Filter, X, Flame, ShieldAlert, Camera, DoorOpen} from "lucide-react";

const typeIcons: Record<string, typeof Flame> = {
  fire: Flame,
  alarm: ShieldAlert,
  camera: Camera,
  intercom: DoorOpen,
};
import {ImageWithFallback} from "./figma/ImageWithFallback";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

// Үнэ тодорхойгүй бол null үлдээнэ — картан дээр "Үнэ тохиролцоно" гэж харагдана.
// Үнэ (₮) оруулбал үнийн шүүлтүүр автоматаар гарч ирнэ.
type Product = {
  id: number;
  image: string | null; // зураггүй бол ангиллын дүрс харагдана
  title: string;
  description: string;
  price: number | null;
  type: string;
  category: string;
};

export function ProductsPage({onNavigate}: ProductsPageProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products: Product[] = [
    {
      id: 1,
      image: "/products/smoke-detector.webp",
      title: "Утаа мэдрэгч",
      description: "Өрөөнд утаа гармагц илрүүлж галын дохиоллын самбар руу дохио өгнө. Оффис, орон сууц, коридорт хамгийн өргөн хэрэглэгддэг.",
      price: null,
      type: "fire",
      category: "Галын дохиолол",
    },
    {
      id: 2,
      image: null,
      title: "Газ мэдрэгч",
      description: "Байгалийн болон шингэрүүлсэн хийн алдагдлыг илрүүлж сэрэмжлүүлнэ. Гал тогоо, уурын зуух, агуулахад тохиромжтой.",
      price: null,
      type: "fire",
      category: "Галын дохиолол",
    },
    {
      id: 3,
      image: null,
      title: "Дулаан мэдрэгч",
      description: "Температур огцом өсөх эсвэл тогтоосон хэмээс хэтрэхэд ажиллана. Утаа, уур ихтэй гал тогоо, гаражид утаа мэдрэгчийн оронд суурилуулна.",
      price: null,
      type: "fire",
      category: "Галын дохиолол",
    },
    {
      id: 4,
      image: null,
      title: "Гал мэдрэгч",
      description: "Галын дөлийн цацрагийг шууд илрүүлдэг. Өндөр таазтай агуулах, үйлдвэр, задгай талбайд тохиромжтой.",
      price: null,
      type: "fire",
      category: "Галын дохиолол",
    },
    {
      id: 5,
      image: "/products/ir-beam.webp",
      title: "Гадна хашааны периметр мэдрэгч",
      description: "Хашаа, хаалганы дагуу үл үзэгдэх инфра улаан туяа үүсгэж, туяаг таслан нэвтрэхийг илрүүлнэ.",
      price: null,
      type: "alarm",
      category: "Хулгайн дохиолол",
    },
    {
      id: 6,
      image: null,
      title: "Дотор хөдөлгөөн мэдрэгч",
      description: "Өрөөн доторх хүний хөдөлгөөнийг биеийн дулаанаар илрүүлнэ. Дохиолол асаалттай үед хөдөлгөөн гарвал төв пульт руу дохио очно.",
      price: null,
      type: "alarm",
      category: "Хулгайн дохиолол",
    },
    {
      id: 7,
      image: null,
      title: "Ус мэдрэгч",
      description: "Шалан дээр ус алдагдах, үерлэхийг илрүүлж эрт сэрэмжлүүлнэ. Сервер өрөө, агуулах, угаалгын өрөөнд суурилуулна.",
      price: null,
      type: "alarm",
      category: "Хулгайн дохиолол",
    },
    {
      id: 8,
      image: null,
      title: "Чимээ мэдрэгч",
      description: "Шил хагарах, хана цоолох зэрэг сэжигтэй чимээг илрүүлнэ. Дэлгүүрийн цонх, витрин, сейфийн өрөөнд тохиромжтой.",
      price: null,
      type: "alarm",
      category: "Хулгайн дохиолол",
    },
    {
      id: 9,
      image: null,
      title: "Хаалганы зай мэдрэгч",
      description: "Хаалга, цонх онгойход соронзон контакт салж дохио өгнө. Хамгийн энгийн бөгөөд найдвартай хамгаалалт.",
      price: null,
      type: "alarm",
      category: "Хулгайн дохиолол",
    },
    {
      id: 10,
      image: "/products/camera-bullet.webp",
      title: "Гадна IP камер",
      description: "Барилгын гадна талд суурилуулах ус, тоосны хамгаалалттай сүлжээний камер. Инфра улаан гэрэлтүүлэгтэй тул шөнө ч бичлэг хийнэ.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 11,
      image: "/products/camera-dome.webp",
      title: "Дотор IP камер",
      description: "Оффис, дэлгүүр, агуулах, коридорт зориулсан авсаархан сүлжээний камер.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 12,
      image: null,
      title: "Гадна 4G камер",
      description: "SIM карттай, интернет кабель шаардлагагүй гадна камер. Барилгын талбай, зуслан, хашаа зэрэг сүлжээгүй газарт тохиромжтой.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 13,
      image: null,
      title: "Гадна WiFi камер",
      description: "WiFi сүлжээгээр холбогддог гадна камер. Кабель татах шаардлага багатай тул суурилуулалт хялбар.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 14,
      image: null,
      title: "Дотор 4G камер",
      description: "SIM карттай дотор камер. Интернет холболтгүй байранд гар утсаар алсаас хянах боломж олгоно.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 15,
      image: null,
      title: "Дотор WiFi камер",
      description: "Гэр, жижиг оффист зориулсан WiFi камер. Гар утасны аппаар шууд харж, бичлэгээ үзнэ.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 16,
      image: null,
      title: "PTZ камер",
      description: "Эргэх, хазайх, томруулах боломжтой камер. Нэг камераар том талбайг бүхэлд нь хянана.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 17,
      image: null,
      title: "Dome камер",
      description: "Бөмбөгөр хэлбэрийн, гэмтээхэд хэцүү камер. Таазанд суурилуулж олон нийтийн газар, коридорт ашиглана.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 18,
      image: null,
      title: "Татдаг PTZ камер",
      description: "Хол зайд хүчтэй томруулдаг PTZ камер. Зогсоол, талбай, барилгын периметрийг алсаас нарийвчлан хянана.",
      price: null,
      type: "camera",
      category: "IP камер",
    },
    {
      id: 19,
      image: null,
      title: "Домофон",
      description: "Орон сууц, оффисын орцны видео болон аудио домофон. Зочныг харж ярилцаад хаалгыг алсаас нээнэ.",
      price: null,
      type: "intercom",
      category: "Домофон",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const typeMatch = selectedType === "all" || product.type === selectedType;
    let priceMatch = true;

    const price = product.price;

    if (priceRange !== "all" && price === null) priceMatch = false;
    else if (price !== null) {
      if (priceRange === "under200") priceMatch = price < 200_000;
      else if (priceRange === "200-500")
        priceMatch = price >= 200_000 && price <= 500_000;
      else if (priceRange === "500-1000")
        priceMatch = price >= 500_000 && price <= 1_000_000;
      else if (priceRange === "over1000") priceMatch = price > 1_000_000;
    }

    return typeMatch && priceMatch;
  });

  const hasPrices = products.some((p) => p.price !== null);

  return (
    <div className='pt-20'>
      {/* Header */}
      <section className='bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl lg:text-5xl mb-4'>Бидний бүтээгдэхүүн</h1>
          
        </div>
      </section>

      {/* Products Grid with Sidebar */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className='lg:hidden bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center gap-2'>
              <Filter className='h-5 w-5' />
              Шүүлтүүр
            </button>

            {/* Sidebar Filter */}
            <div
              className={`${
                filterOpen ? "block" : "hidden"
              } lg:block lg:w-64 shrink-0`}>
              <div className='bg-white rounded-xl p-6 shadow-md sticky top-24'>
                <div className='flex items-center justify-between mb-4 lg:mb-6'>
                  <h3 className='text-lg text-gray-900'>Шүүлтүүр</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className='lg:hidden'>
                    <X className='h-5 w-5' />
                  </button>
                </div>

                {/* Type Filter */}
                <div className='mb-6'>
                  <h4 className='text-sm text-gray-900 mb-3'>Төрөл</h4>
                  <div className='space-y-2'>
                    {[
                      {value: "all", label: "Бүх бүтээгдэхүүн"},
                      {value: "fire", label: "Галын дохиолол"},
                      {value: "alarm", label: "Хулгайн дохиолол"},
                      {value: "camera", label: "IP камер"},
                      {value: "intercom", label: "Домофон"},
                    ].map((type) => (
                      <label
                        key={type.value}
                        className='flex items-center cursor-pointer'>
                        <input
                          type='radio'
                          name='type'
                          value={type.value}
                          checked={selectedType === type.value}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className='mr-2'
                        />
                        <span className='text-sm text-gray-700'>
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                {hasPrices && (
                <div>
                  <h4 className='text-sm text-gray-900 mb-3'>Үнийн хязгаар</h4>
                  <div className='space-y-2'>
                    {[
                      {value: "all", label: "Бүх үнэ"},
                      {value: "under200", label: "200,000₮-с доош"},
                      {value: "200-500", label: "200,000 – 500,000₮"},
                      {value: "500-1000", label: "500,000 – 1,000,000₮"},
                      {value: "over1000", label: "1,000,000₮-с дээш"},
                    ].map((range) => (
                      <label
                        key={range.value}
                        className='flex items-center cursor-pointer'>
                        <input
                          type='radio'
                          name='price'
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className='mr-2'
                        />
                        <span className='text-sm text-gray-700'>
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                )}

                <button
                  onClick={() => {
                    setSelectedType("all");
                    setPriceRange("all");
                  }}
                  className='w-full mt-6 text-sm text-[#1e3a8a] hover:underline'>
                  Шүүлтүүр цэвэрлэх
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className='flex-1'>
              <div className='mb-4 text-gray-600'>
                Нийт {filteredProducts.length} бүтээгдэхүүн
              </div>

              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow'>
                    {product.image ? (
                      <ImageWithFallback
                        src={product.image}
                        alt={product.title}
                        className='w-full h-48 object-cover'
                      />
                    ) : (
                      (() => {
                        const Icon = typeIcons[product.type] ?? Camera;
                        return (
                          <div
                            className='w-full h-48 flex items-center justify-center'
                            style={{background: "linear-gradient(135deg, #1e3a8a, #0f172a)"}}>
                            <Icon className='h-16 w-16' color='rgba(255,255,255,0.85)' strokeWidth={1.5} />
                          </div>
                        );
                      })()
                    )}
                    <div className='p-6'>
                      <div className='text-xs text-gray-500 mb-1'>
                        {product.category}
                      </div>
                      <h3 className='text-lg text-gray-900 mb-2'>
                        {product.title}
                      </h3>
                      <p className='text-sm text-gray-600 mb-4'>
                        {product.description}
                      </p>
                      <div className='flex items-center justify-between'>
                        <span
                          className={`${
                            product.price !== null ? "text-2xl" : "text-lg"
                          } text-[#1e3a8a]`}>
                          {product.price !== null
                            ? `${product.price.toLocaleString("en-US")}₮`
                            : "Үнэ тохиролцоно"}
                        </span>
                        <button
                          onClick={() => onNavigate("contact")}
                          className='bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#1e40af] transition-colors flex items-center gap-2'>
                          <Phone className='h-4 w-4' />
                          Лавлах
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className='text-center py-12'>
                  <p className='text-gray-500'>
                    Шүүлтүүрт тохирох бүтээгдэхүүн олдсонгүй.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
