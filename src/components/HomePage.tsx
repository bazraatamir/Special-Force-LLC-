import { Shield, Wrench, Eye, Camera, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Camera,
      title: 'Installation',
      description: 'Professional installation by certified technicians',
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular maintenance and system updates',
    },
    {
      icon: Eye,
      title: 'Monitoring',
      description: '24/7 remote monitoring and support',
    },
  ];

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Indoor Dome Camera',
      description: '4K resolution, night vision, motion detection',
      price: '$249',
    },
    {
      image: 'https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Outdoor Bullet Camera',
      description: 'Weatherproof, 4K resolution, infrared night vision',
      price: '$299',
    },
    {
      image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Wireless PTZ Camera',
      description: 'Pan-tilt-zoom, 360° coverage, smart tracking',
      price: '$449',
    },
    {
      image: 'https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Complete CCTV System',
      description: '8-channel NVR, 4 cameras, cables included',
      price: '$1,299',
    },
    {
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Smart Home Security Hub',
      description: 'AI-powered, cloud storage, mobile app',
      price: '$599',
    },
    {
      image: 'https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjQ5NDI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Professional Installation Package',
      description: 'Full site survey, custom setup, training included',
      price: 'From $499',
    },
  ];

  const partners = [
    { name: 'Hikvision', logo: 'H' },
    { name: 'Dahua', logo: 'D' },
    { name: 'Axis', logo: 'A' },
    { name: 'Bosch', logo: 'B' },
    { name: 'Hanwha', logo: 'H' },
    { name: 'Uniview', logo: 'U' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-6">
                Professional Security Camera Installation & Sales
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Reliable, fast, and affordable security solutions for homes and businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => onNavigate('products')}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  View Products
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-2xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjQ5NDI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security camera installation"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Protecting What Matters Most
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in providing cutting-edge security camera solutions with professional installation, 
              ongoing maintenance, and 24/7 monitoring services. Your safety is our priority.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Featured Products & Services
            </h2>
            <p className="text-lg text-gray-600">
              Explore our range of professional security solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-[#1e3a8a]">{product.price}</span>
                    <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-lg hover:bg-[#1e40af] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate('products')}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg hover:bg-[#1e40af] transition-colors inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600">
              We work with industry-leading brands
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg px-8 py-6 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-12 flex items-center justify-center">
                  <div className="text-2xl text-gray-400">{partner.logo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-16 w-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and quote from our security experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
