import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { company, telHref } from '../data/company';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1f2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-large.png" alt="Special Force LLC" style={{height: 96, width: "auto"}} />
              
            </div>
            <p className="text-sm text-gray-400">
              Харуул хамгаалалт, галын болон хулгайн дохиолол, хяналтын камерын цогц шийдэл. Гэр ахуй, байгууллагад зориулсан найдвартай, шуурхай үйлчилгээ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Цэс</h3>
            <ul className="space-y-2">
              {[
                { name: 'Нүүр', id: 'home' },
                { name: 'Бидний тухай', id: 'about' },
                { name: 'Үйлчилгээ', id: 'services' },
                { name: 'Бүтээгдэхүүн', id: 'products' },
                { name: 'Холбоо барих', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Бидний Үйлчилгээ</h3>
            <ul className="space-y-2 text-sm">
              <li>Харуул хамгаалалт</li>
              <li>Хулгайн дохиолол</li>
              <li>Галын дохиолол</li>
              <li>IP камер суурилуулалт</li>
              <li>Домофон</li>
              <li>Засвар үйлчилгээ</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Холбоо барих</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  {company.phones.map((phone, i) => (
                    <a key={i} href={telHref(phone)} className="block hover:text-white transition-colors">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{company.address}</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              {company.social.facebook && (
                <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {company.social.instagram && (
                <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {company.name}. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
}
