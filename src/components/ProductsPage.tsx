import { useState } from 'react';
import { ShoppingCart, Filter, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Indoor Dome Camera HD',
      description: '1080p Full HD, night vision up to 30ft, motion detection',
      price: 199,
      type: 'indoor',
      category: 'Camera',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Indoor Dome Camera 4K',
      description: '4K Ultra HD, advanced night vision, AI motion detection',
      price: 249,
      type: 'indoor',
      category: 'Camera',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Outdoor Bullet Camera HD',
      description: 'Weatherproof IP66, 1080p, 60ft night vision',
      price: 229,
      type: 'outdoor',
      category: 'Camera',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Outdoor Bullet Camera 4K',
      description: 'Weatherproof IP67, 4K resolution, infrared 100ft',
      price: 299,
      type: 'outdoor',
      category: 'Camera',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wireless PTZ Camera',
      description: 'Pan-tilt-zoom, 360° coverage, auto-tracking',
      price: 449,
      type: 'wireless',
      category: 'Camera',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wireless Security Camera Pro',
      description: 'Battery powered, solar compatible, 2K resolution',
      price: 179,
      type: 'wireless',
      category: 'Camera',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: '4-Channel NVR System',
      description: '4 cameras included, 1TB storage, plug & play',
      price: 799,
      type: 'system',
      category: 'System',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: '8-Channel NVR System',
      description: '8 cameras included, 2TB storage, remote access',
      price: 1299,
      type: 'system',
      category: 'System',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: '16-Channel NVR System Pro',
      description: '16 cameras, 4TB storage, AI analytics',
      price: 2499,
      type: 'system',
      category: 'System',
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Smart Home Security Hub',
      description: 'AI-powered, cloud storage, mobile app control',
      price: 599,
      type: 'system',
      category: 'System',
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Video Doorbell Pro',
      description: '2K video, two-way audio, motion alerts',
      price: 199,
      type: 'indoor',
      category: 'Doorbell',
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Cloud Storage Plan - 1 Year',
      description: '30 days rolling storage, unlimited cameras',
      price: 120,
      type: 'accessory',
      category: 'Service',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const typeMatch = selectedType === 'all' || product.type === selectedType;
    let priceMatch = true;
    
    if (priceRange === 'under200') priceMatch = product.price < 200;
    else if (priceRange === '200-500') priceMatch = product.price >= 200 && product.price <= 500;
    else if (priceRange === '500-1000') priceMatch = product.price >= 500 && product.price <= 1000;
    else if (priceRange === 'over1000') priceMatch = product.price > 1000;
    
    return typeMatch && priceMatch;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-4">Our Products</h1>
          <p className="text-xl text-blue-100">
            Browse our complete range of security cameras and systems
          </p>
        </div>
      </section>

      {/* Products Grid with Sidebar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden bg-white border border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center gap-2"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>

            {/* Sidebar Filter */}
            <div
              className={`${
                filterOpen ? 'block' : 'hidden'
              } lg:block lg:w-64 shrink-0`}
            >
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 className="text-lg text-gray-900">Filters</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="lg:hidden"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Type Filter */}
                <div className="mb-6">
                  <h4 className="text-sm text-gray-900 mb-3">Type</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Products' },
                      { value: 'indoor', label: 'Indoor' },
                      { value: 'outdoor', label: 'Outdoor' },
                      { value: 'wireless', label: 'Wireless' },
                      { value: 'system', label: 'Complete Systems' },
                      { value: 'accessory', label: 'Accessories' },
                    ].map((type) => (
                      <label key={type.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={type.value}
                          checked={selectedType === type.value}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="text-sm text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under200', label: 'Under $200' },
                      { value: '200-500', label: '$200 - $500' },
                      { value: '500-1000', label: '$500 - $1,000' },
                      { value: 'over1000', label: 'Over $1,000' },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedType('all');
                    setPriceRange('all');
                  }}
                  className="w-full mt-6 text-sm text-[#1e3a8a] hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-4 text-gray-600">
                Showing {filteredProducts.length} products
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                      <h3 className="text-lg text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl text-[#1e3a8a]">
                          ${product.price}
                        </span>
                        <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#1e40af] transition-colors flex items-center gap-2">
                          <ShoppingCart className="h-4 w-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products match your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
