import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
              <div className=" rounded-lg p-2">
                <img src="/Gemini_Generated_Image_vq24xjvq24xjvq24-Picsart-BackgroundRemover.png" alt="" />
              </div>
              
            </div>
            <p className="text-sm text-gray-400">
              Мэргэжлийн хяналтын камерын суурилуулалт ба худалдаа. Гэр ахуй, бизнесийн зориулалттай найдвартай, хурдан, боломжийн үнэтэй аюулгүй байдлын шийдлүүд.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Нүүр', 'Бидний тухай', 'Үйлчилгээ', 'Бүтээгдэхүүн', 'Холбоо барих'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Бидний Үйлчилгээ</h3>
            <ul className="space-y-2 text-sm">
              <li>Камерын суурилуулалт</li>
              <li>Системийн ажиллагаа</li>
              <li>24/7 хяналт</li>
              <li>Аюулгүй байдлын санал болгох</li>
              <li>Системийн шинэчлэлт</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <div>+976 (555) 123-4567</div>
                  <div>+1 (555) 987-6543</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@securevision.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Security Blvd, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <button className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SecureVision Security Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
