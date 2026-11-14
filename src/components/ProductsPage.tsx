import React from "react";
import {useState} from "react";
import {Phone, Filter, X} from "lucide-react";
import {ImageWithFallback} from "./figma/ImageWithFallback";

interface ProductsPageProps {
  onNavigate: (page: string) => void;
}

// Үнэ тодорхойгүй бол null үлдээнэ — картан дээр "Үнэ тохиролцоно" гэж харагдана.
// Үнэ (₮) оруулбал үнийн шүүлтүүр автоматаар гарч ирнэ.
type Product = {
  id: number;
  image: string;
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
      image:
        "https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Дотор орчны бөмбөгөр камер HD",
      description: "1080p Full HD, 10 м хүртэл шөнийн харалт, хөдөлгөөн илрүүлэлт",
      price: null,
      type: "indoor",
      category: "Камер",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Дотор орчны бөмбөгөр камер 4K",
      description: "4K Ultra HD, сайжруулсан шөнийн харалт, хиймэл оюунт хөдөлгөөн илрүүлэлт",
      price: null,
      type: "indoor",
      category: "Камер",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Гадаа орчны цилиндр камер HD",
      description: "IP66 ус, тоосны хамгаалалт, 1080p, 18 м шөнийн харалт",
      price: null,
      type: "outdoor",
      category: "Камер",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Гадаа орчны цилиндр камер 4K",
      description: "IP67 ус, тоосны хамгаалалт, 4K нягтрал, 30 м инфра улаан харалт",
      price: null,
      type: "outdoor",
      category: "Камер",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Утасгүй PTZ камер",
      description: "Эргэх, хазайх, томруулах, 360° хамралт, автоматаар дагах",
      price: null,
      type: "wireless",
      category: "Камер",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Утасгүй хяналтын камер Pro",
      description: "Батарейгаар ажиллана, нарны хавтан холбогдоно, 2K нягтрал",
      price: null,
      type: "wireless",
      category: "Камер",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "4 сувгийн NVR иж бүрдэл",
      description: "4 камер багтсан, 1TB хадгалалт, залгаад л ажиллана",
      price: null,
      type: "system",
      category: "Иж бүрдэл",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "8 сувгийн NVR иж бүрдэл",
      description: "8 камер багтсан, 2TB хадгалалт, алсаас хандах",
      price: null,
      type: "system",
      category: "Иж бүрдэл",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "16 сувгийн NVR иж бүрдэл Pro",
      description: "16 камер, 4TB хадгалалт, хиймэл оюунт дүн шинжилгээ",
      price: null,
      type: "system",
      category: "Иж бүрдэл",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ухаалаг гэрийн хамгаалалтын төв",
      description: "Хиймэл оюунтай, клауд хадгалалт, гар утсаар удирдана",
      price: null,
      type: "system",
      category: "Иж бүрдэл",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Видео хаалганы хонх Pro",
      description: "2K видео, хоёр талын дуу яриа, хөдөлгөөний мэдэгдэл",
      price: null,
      type: "indoor",
      category: "Хаалганы хонх",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Клауд хадгалалтын багц – 1 жил",
      description: "30 хоногийн бичлэг хадгална, камерын тоо хязгааргүй",
      price: null,
      type: "accessory",
      category: "Үйлчилгээ",
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
                      {value: "indoor", label: "Дотор"},
                      {value: "outdoor", label: "Гадаа"},
                      {value: "wireless", label: "Утасгүй"},
                      {value: "system", label: "Иж бүрдэл систем"},
                      {value: "accessory", label: "Нэмэлт хэрэгсэл, үйлчилгээ"},
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
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className='w-full h-48 object-cover'
                    />
                    <div className='p-6'>
                      <div className='text-xs text-gray-500 mb-1'>
                        {product.category}
                      </div>
                      <h3 className='text-lg text-gray-900 mb-2'>
                        {product.title}
                      </h3>
                      <p className='text-sm text-gray-600 mb-4 line-clamp-2'>
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
