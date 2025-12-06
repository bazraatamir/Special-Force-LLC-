import { Camera, Wrench, Eye, Shield, Zap, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const mainServices = [
    {
      icon: Camera,
      title: 'Camera Installation',
      description: 'Professional installation of security cameras for residential and commercial properties. Our certified technicians ensure optimal camera placement and configuration.',
      features: [
        'Site survey and consultation',
        'Custom camera placement design',
        'Professional cable management',
        'System configuration and testing',
        'Training on system operation',
      ],
      pricing: 'Starting at $299',
      image: 'https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjQ5NDI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Wrench,
      title: 'System Maintenance',
      description: 'Regular maintenance services to keep your security system running at peak performance. Prevent issues before they occur with our comprehensive maintenance plans.',
      features: [
        'Quarterly system inspections',
        'Camera cleaning and adjustment',
        'Software updates and patches',
        'Cable and connection checks',
        'Performance optimization',
      ],
      pricing: 'Starting at $99/month',
      image: 'https://images.unsplash.com/photo-1621886943381-cb97cc18b17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Professional monitoring service with instant alerts and rapid response. Monitor your property from anywhere with our advanced remote monitoring solutions.',
      features: [
        'Real-time video monitoring',
        'Instant motion alerts',
        'Mobile app access',
        'Cloud video storage',
        'Emergency response coordination',
      ],
      pricing: 'Starting at $49/month',
      image: 'https://images.unsplash.com/photo-1723399726238-cc1b5cdcf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwc3VydmVpbGxhbmNlJTIwc3lzdGVtfGVufDF8fHx8MTc2NTAyODQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Shield,
      title: 'Security System Setup',
      description: 'Complete security system design and implementation tailored to your specific needs. From planning to execution, we handle every detail.',
      features: [
        'Comprehensive security assessment',
        'Custom system design',
        'Equipment selection and procurement',
        'Complete installation',
        'Integration with existing systems',
      ],
      pricing: 'Request Quote',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzeXN0ZW18ZW58MXx8fHwxNzY1MDI4NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: Zap,
      title: 'System Upgrades',
      description: 'Upgrade your existing security system with the latest technology. Enhance your security with modern features and improved performance.',
      features: [
        'System compatibility assessment',
        'Latest technology integration',
        'HD to 4K camera upgrades',
        'Cloud storage migration',
        'Smart home integration',
      ],
      pricing: 'Starting at $199',
      image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlY3VyaXR5JTIwY2FtZXJhfGVufDF8fHx8MTc2NTAyODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: '24/7 technical support for all your security system needs. Our expert team is always ready to help you with any issues or questions.',
      features: [
        '24/7 phone and email support',
        'Remote troubleshooting',
        'On-site support available',
        'System training and tutorials',
        'Priority response for emergencies',
      ],
      pricing: 'Included with all systems',
      image: 'https://images.unsplash.com/photo-1762953007649-8ea70115059a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb21lJTIwc2VjdXJpdHklMjBjYW1lcmF8ZW58MXx8fHwxNzY1MDI4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive security solutions from installation to 24/7 monitoring
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-2xl text-[#1e3a8a]">
                      {service.pricing}
                    </div>
                    <button 
                      onClick={() => onNavigate('contact')}
                      className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-colors flex items-center gap-2"
                    >
                      Request Quote
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Service Packages</h2>
            <p className="text-lg text-gray-600">
              Choose the package that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl text-[#1e3a8a] mb-6">
                $799
                <span className="text-lg text-gray-500">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">4 camera installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic NVR system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Local storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile app access</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 year warranty</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Pro Package */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-[#1e3a8a] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1e3a8a] text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Professional</h3>
              <div className="text-4xl text-[#1e3a8a] mb-6">
                $1,499
                <span className="text-lg text-gray-500">/one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">8 camera installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced NVR system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cloud storage (1 year)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI motion detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">2 year warranty</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#1e3a8a] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border-2 border-gray-200">
              <h3 className="text-2xl text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl text-[#1e3a8a] mb-6">
                Custom
                <span className="text-lg text-gray-500">/quote</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited cameras</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enterprise NVR system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited cloud storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced AI analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 monitoring service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lifetime support</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team can design a security system tailored specifically to your requirements.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
