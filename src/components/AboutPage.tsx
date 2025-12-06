import { Shield, Camera, Wrench, Eye, Users, Award, Target, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const services = [
    {
      icon: Camera,
      title: 'Camera Installation',
      description: 'Professional installation of all types of security cameras for residential and commercial properties.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Regular system maintenance, updates, and 24/7 technical support to keep your security system running smoothly.',
    },
    {
      icon: Eye,
      title: 'Remote Monitoring',
      description: 'Advanced remote monitoring solutions that let you watch your property from anywhere in the world.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize your safety with the latest technology and best practices in security.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide personalized solutions for every client.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'We use only premium, certified equipment and employ skilled technicians.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Count on us for dependable service, timely installations, and consistent support.',
    },
  ];

  const stats = [
    { number: '5000+', label: 'Installations' },
    { number: '15+', label: 'Years Experience' },
    { number: '99%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">About SecureVision</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading provider of professional security camera solutions since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Company History & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, SecureVision has grown from a small local installer to one of the region&apos;s 
                  most trusted security camera providers. Our journey began with a simple mission: to make 
                  professional security solutions accessible and affordable for everyone.
                </p>
                <p>
                  Over the years, we&apos;ve installed thousands of security systems across residential homes, 
                  retail stores, warehouses, offices, and industrial facilities. Our commitment to quality, 
                  customer service, and cutting-edge technology has made us the go-to choice for security solutions.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, incorporating the latest in AI-powered 
                  surveillance, cloud storage, and smart monitoring to provide comprehensive security that grows 
                  with your needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669049515462-6ab71c151720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjQ5NDI0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security camera installation"
                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-[#1e3a8a] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#1e3a8a] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quality results every time
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site survey and needs assessment' },
              { step: '02', title: 'Design', desc: 'Custom security system design and quote' },
              { step: '03', title: 'Installation', desc: 'Professional installation by certified techs' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 monitoring' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  <div className="text-4xl text-[#1e3a8a] opacity-20 mb-4">{item.step}</div>
                  <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <CheckCircle className="h-6 w-6 text-green-500 absolute top-6 right-6" />
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and see how we can secure your property.
          </p>
          <button className="bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
